const SENTIMENT_CONFIG = {
  positive: {
    dot: 'bg-forest-500 dark:bg-forest-400',
    ring: 'bg-forest-500/40 dark:bg-forest-400/40',
    label: 'Positive',
    text: 'text-forest-600 dark:text-forest-300',
  },
  neutral: {
    dot: 'bg-slate-400 dark:bg-slate-500',
    ring: 'bg-slate-400/40 dark:bg-slate-500/40',
    label: 'Neutral',
    text: 'text-slate-600 dark:text-slate-300',
  },
  negative: {
    dot: 'bg-clay-500 dark:bg-clay-400',
    ring: 'bg-clay-500/40 dark:bg-clay-400/40',
    label: 'Negative',
    text: 'text-clay-600 dark:text-clay-300',
  },
}

export default function SentimentPulse({ sentiment = 'neutral', showLabel = true, className = '' }) {
  const config = SENTIMENT_CONFIG[sentiment] || SENTIMENT_CONFIG.neutral

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${config.ring} animate-pulse-soft`}
        />
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${config.dot}`} />
      </span>
      {showLabel && (
        <span className={`text-xs font-medium ${config.text}`}>{config.label}</span>
      )}
    </span>
  )
}
