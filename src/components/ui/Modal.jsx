import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const modalRef = useRef(null)
  const previousActiveElement = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    previousActiveElement.current = document.activeElement

    const node = modalRef.current
    const focusables = node ? node.querySelectorAll(FOCUSABLE_SELECTOR) : []
    if (focusables.length > 0) {
      focusables[0].focus()
    } else {
      node?.focus()
    }

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab') {
        const focusableEls = node.querySelectorAll(FOCUSABLE_SELECTOR)
        if (focusableEls.length === 0) return
        const first = focusableEls[0]
        const last = focusableEls[focusableEls.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previousActiveElement.current?.focus?.()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-forest-950/50 backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className={`
          relative w-full ${sizeClasses[size]} max-h-[85vh] overflow-y-auto scrollbar-thin
          bg-cream dark:bg-forest-900 rounded-2xl shadow-soft-lg
          border border-forest-100 dark:border-forest-700
          focus:outline-none
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-forest-100 dark:border-forest-800 sticky top-0 bg-cream dark:bg-forest-900 rounded-t-2xl">
          <h2 id="modal-title" className="text-lg font-semibold text-forest-950 dark:text-cream">
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-forest-500 hover:bg-forest-100 dark:text-forest-300 dark:hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  )
}
