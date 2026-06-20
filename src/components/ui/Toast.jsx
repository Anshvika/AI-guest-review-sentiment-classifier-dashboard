import { CheckCircle2, XCircle, Info, X } from 'lucide-react'
import { useToast } from '../../context/ToastContext.jsx'

const VARIANT_STYLES = {
  success: {
    icon: CheckCircle2,
    classes: 'bg-forest-600 dark:bg-forest-500 text-cream',
  },
  error: {
    icon: XCircle,
    classes: 'bg-clay-600 dark:bg-clay-500 text-cream',
  },
  info: {
    icon: Info,
    classes: 'bg-slate-700 dark:bg-slate-600 text-cream',
  },
}

export default function ToastViewport() {
  const { toasts, dismissToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-[calc(100%-2rem)] max-w-sm"
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((toast) => {
        const config = VARIANT_STYLES[toast.variant] || VARIANT_STYLES.info
        const Icon = config.icon
        return (
          <div
            key={toast.id}
            role="status"
            className={`
              flex items-start gap-2.5 rounded-xl px-4 py-3 shadow-soft-lg
              ${config.classes}
              ${toast.leaving ? 'animate-slide-out-right' : 'animate-slide-in-right'}
            `}
          >
            <Icon className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => dismissToast(toast.id)}
              aria-label="Dismiss notification"
              className="shrink-0 opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
