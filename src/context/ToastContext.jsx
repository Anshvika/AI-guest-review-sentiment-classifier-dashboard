import { createContext, useCallback, useContext, useState } from 'react'

const ToastContext = createContext(undefined)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, leaving: true } : t)))
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 250)
  }, [])

  const showToast = useCallback(
    ({ message, variant = 'success', duration = 3200 }) => {
      const id = Date.now() + Math.random()
      setToasts((prev) => [...prev, { id, message, variant, leaving: false }])
      setTimeout(() => dismissToast(id), duration)
      return id
    },
    [dismissToast],
  )

  return (
    <ToastContext.Provider value={{ showToast, dismissToast, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (ctx === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return ctx
}
