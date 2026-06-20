import { useId } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  hint,
  required = false,
  className = '',
  icon: Icon,
  ...rest
}) {
  const id = useId()

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-forest-800 dark:text-forest-100">
          {label}
          {required && <span className="text-clay-500 ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest-400 dark:text-forest-500"
            aria-hidden="true"
          />
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          className={`
            w-full rounded-xl border bg-white dark:bg-forest-900
            px-3.5 py-2.5 text-sm text-forest-950 dark:text-cream
            placeholder:text-forest-400 dark:placeholder:text-forest-500
            transition-colors duration-150
            focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500
            disabled:opacity-50 disabled:cursor-not-allowed
            ${Icon ? 'pl-9' : ''}
            ${error ? 'border-clay-500 focus:ring-clay-500 focus:border-clay-500' : 'border-forest-200 dark:border-forest-700'}
          `}
          {...rest}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1 text-xs text-clay-600 dark:text-clay-300">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
      {!error && hint && (
        <p id={`${id}-hint`} className="text-xs text-forest-500 dark:text-forest-400">
          {hint}
        </p>
      )}
    </div>
  )
}
