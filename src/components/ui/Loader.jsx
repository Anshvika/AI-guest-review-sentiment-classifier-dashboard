import { Loader2 } from 'lucide-react'

export function Spinner({ size = 'md', className = '', label = 'Loading' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  }

  return (
    <div role="status" className={`inline-flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-forest-500 dark:text-forest-300`} />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`} role="status" aria-label="Loading content">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-full skeleton-shimmer animate-shimmer ${
            i === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export function SkeletonCard({ className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5 ${className}`}
      role="status"
      aria-label="Loading card"
    >
      <div className="h-4 w-1/3 rounded-full skeleton-shimmer animate-shimmer mb-3" />
      <SkeletonText lines={2} />
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default function Loader({ variant = 'spinner', ...props }) {
  if (variant === 'skeleton-text') return <SkeletonText {...props} />
  if (variant === 'skeleton-card') return <SkeletonCard {...props} />
  return <Spinner {...props} />
}
