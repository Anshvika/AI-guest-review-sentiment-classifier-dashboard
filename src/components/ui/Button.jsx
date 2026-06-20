import { Loader2 } from 'lucide-react'

const VARIANT_CLASSES = {
  primary:
    'bg-forest-600 text-cream hover:bg-forest-700 active:bg-forest-800 dark:bg-forest-400 dark:text-forest-950 dark:hover:bg-forest-300 shadow-soft',
  secondary:
    'bg-clay-500 text-cream hover:bg-clay-600 active:bg-clay-700 dark:bg-clay-400 dark:text-forest-950 dark:hover:bg-clay-300 shadow-soft',
  outline:
    'bg-transparent border border-forest-300 text-forest-700 hover:bg-forest-50 active:bg-forest-100 dark:border-forest-600 dark:text-forest-200 dark:hover:bg-forest-800/50',
  ghost:
    'bg-transparent text-forest-700 hover:bg-forest-100 dark:text-forest-200 dark:hover:bg-forest-800/50',
}

const SIZE_CLASSES = {
  sm: 'text-sm px-3 py-1.5 gap-1.5 rounded-lg',
  md: 'text-sm px-4 py-2.5 gap-2 rounded-xl',
  lg: 'text-base px-6 py-3 gap-2 rounded-xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  icon: Icon,
  className = '',
  onClick,
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center font-medium
        transition-all duration-150 ease-out
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2
        dark:focus-visible:ring-offset-forest-950
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-none
        ${VARIANT_CLASSES[variant]}
        ${SIZE_CLASSES[size]}
        ${className}
      `}
      {...rest}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {!loading && Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
      {children}
    </button>
  )
}
