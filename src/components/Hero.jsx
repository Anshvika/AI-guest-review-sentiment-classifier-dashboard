import { useNavigate } from 'react-router-dom'
import { ArrowRight, MessageSquareHeart, TrendingUp, Sparkles } from 'lucide-react'
import { Button } from './ui'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-cream dark:bg-forest-950">
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] dark:opacity-[0.1]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-forest-500 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-clay-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-forest-700 dark:text-forest-300 bg-forest-100 dark:bg-forest-800 px-3 py-1 rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            AI-powered sentiment classification
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-forest-950 dark:text-cream">
            Know what every
            <span className="text-forest-600 dark:text-forest-400"> guest review</span> really
            means.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-forest-700 dark:text-forest-300 max-w-lg">
            Trishul Analytics reads your homestay reviews the moment they land — surfacing
            sentiment, flagging recurring complaints, and drafting responses so nothing slips
            through.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" icon={ArrowRight} onClick={() => navigate('/dashboard')}>
              View Dashboard
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/ai-insights')}>
              Try AI Assistant
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-forest-600 dark:text-forest-400">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-forest-500" /> 248 reviews analyzed
            </span>
            <span className="flex items-center gap-1.5">
              <MessageSquareHeart className="w-4 h-4 text-clay-500" /> 71% positive sentiment
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 shadow-soft-lg p-6 sm:p-8">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-medium text-forest-500 dark:text-forest-400">
                Live sentiment feed
              </span>
              <span className="flex items-center gap-1.5 text-xs text-forest-500 dark:text-forest-400">
                <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse-soft" />
                Updating
              </span>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Ananya S.', text: 'Felt like family from the moment we arrived…', sentiment: 'positive' },
                { name: 'Rohan V.', text: 'Wi-Fi barely worked, check-in took an hour…', sentiment: 'negative' },
                { name: 'Priya N.', text: 'Lovely quiet stay, hot water was spotty…', sentiment: 'neutral' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-3 p-3 rounded-xl bg-cream dark:bg-forest-950/60 border border-forest-100 dark:border-forest-800"
                >
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                      item.sentiment === 'positive'
                        ? 'bg-forest-500'
                        : item.sentiment === 'negative'
                          ? 'bg-clay-500'
                          : 'bg-slate-400'
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-forest-900 dark:text-cream">{item.name}</p>
                    <p className="text-sm text-forest-600 dark:text-forest-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-clay-400/20 dark:bg-clay-400/10 -z-10" />
        </div>
      </div>
    </section>
  )
}
