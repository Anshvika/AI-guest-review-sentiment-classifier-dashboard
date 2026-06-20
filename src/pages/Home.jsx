import { BrainCircuit, BellRing, Wand2, BarChart3 } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import { REVIEWS } from '../data/mockData.js'

const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'Instant sentiment scoring',
    description: 'Every review is classified positive, neutral, or negative within seconds of arriving.',
  },
  {
    icon: BellRing,
    title: 'Early issue alerts',
    description: 'Set thresholds so recurring complaints reach you before they become trends.',
  },
  {
    icon: Wand2,
    title: 'AI response drafts',
    description: 'Generate a thoughtful, on-brand reply to any review with one prompt.',
  },
  {
    icon: BarChart3,
    title: 'Property-level breakdowns',
    description: 'See cleanliness, check-in, and amenity sentiment scored separately, per stay.',
  },
]

export default function Home() {
  const sampleReviews = REVIEWS.slice(0, 6)

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Feature Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
              Core Capabilities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest-950 dark:text-cream leading-tight">
              Built for the way homestays actually run
            </h2>
            <p className="mt-3 text-sm sm:text-base text-forest-600 dark:text-forest-400 leading-relaxed">
              No spreadsheets, no guesswork — the{' '}
              <strong className="text-forest-900 dark:text-cream font-medium">
                AI Guest Review Sentiment Classifier Dashboard (Trishul Analytics)
              </strong>{' '}
              gives you a clear read on how guests feel about every single stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="p-5 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft flex flex-col transform transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-forest-100 dark:bg-forest-800 mb-4 shrink-0">
                  <feature.icon className="w-5 h-5 text-forest-600 dark:text-forest-300" />
                </span>
                <h3 className="font-display font-semibold text-forest-950 dark:text-cream mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-forest-600 dark:text-forest-400 leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Feed Sample Section */}
        <section className="bg-forest-50/60 dark:bg-forest-900/40 border-y border-forest-100 dark:border-forest-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-forest-950 dark:text-cream">
                  Recent guest reviews
                </h2>
                <p className="mt-2 text-sm sm:text-base text-forest-600 dark:text-forest-400">
                  A live stream sample of data actively classified inside the{' '}
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    AI Guest Review Sentiment Classifier Dashboard (Trishul Analytics)
                  </span>
                  .
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sampleReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}