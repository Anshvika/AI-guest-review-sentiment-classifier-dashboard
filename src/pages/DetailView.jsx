import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Wand2, Copy, Check } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Button, SentimentPulse, Spinner } from '../components/ui'
import { useToast } from '../context/ToastContext.jsx'
import { getReviewById } from '../data/mockData.js'

const TAG_LABELS = {
  cleanliness: 'Cleanliness',
  checkIn: 'Check-in',
  amenities: 'Amenities',
  hospitality: 'Hospitality',
  valueForMoney: 'Value for money',
}

function tagColor(score) {
  if (score >= 0.7) return 'bg-forest-500 dark:bg-forest-400'
  if (score >= 0.45) return 'bg-clay-300 dark:bg-clay-500'
  return 'bg-clay-500 dark:bg-clay-400'
}

export default function DetailView() {
  const { id } = useParams()
  const navigate = useNavigate()
  const review = getReviewById(id)
  const { showToast } = useToast()

  const [draft, setDraft] = useState('')
  const [generating, setGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!review) {
    return (
      <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-forest-950 dark:text-cream mb-3">
            Review not found
          </h1>
          <p className="text-forest-600 dark:text-forest-400 mb-6">
            We couldn't locate a review with this ID. It may have been removed.
          </p>
          <Button onClick={() => navigate('/dashboard')}>Back to dashboard</Button>
        </main>
        <Footer />
      </div>
    )
  }

  function generateDraft() {
    setGenerating(true)
    setDraft('')
    const responseBank = {
      positive: `Dear ${review.guestName},\n\nThank you so much for the kind words about your stay at ${review.homestay}. We're delighted the little details — from the garden breakfast to the warm welcome — made your trip memorable. We'd love to host you again soon!\n\nWarmly,\nThe ${review.homestay} Team`,
      negative: `Dear ${review.guestName},\n\nThank you for taking the time to share this, and I'm sorry your stay at ${review.homestay} fell short of what we promise our guests. We're addressing the issues you raised directly with our team this week. I'd welcome the chance to make it right on a future visit.\n\nSincerely,\nThe ${review.homestay} Team`,
      neutral: `Dear ${review.guestName},\n\nThank you for your honest feedback on your stay at ${review.homestay}. We're glad the essentials worked well for you, and we're taking note of where we can add a little more polish. Hope to welcome you back soon.\n\nBest,\nThe ${review.homestay} Team`,
    }
    const fullText = responseBank[review.sentiment]
    let i = 0
    const interval = setInterval(() => {
      i += 3
      setDraft(fullText.slice(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
        setGenerating(false)
      }
    }, 15)
  }

  function copyDraft() {
    navigator.clipboard?.writeText(draft)
    setCopied(true)
    showToast({ message: 'Draft copied to clipboard', variant: 'success' })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-forest-600 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-200 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="font-display text-xl font-bold text-forest-950 dark:text-cream">
                    {review.guestName}
                  </h1>
                  <p className="text-sm text-forest-500 dark:text-forest-400">
                    {review.homestay} · {new Date(review.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
                <SentimentPulse sentiment={review.sentiment} />
              </div>
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'fill-clay-400 text-clay-400'
                        : 'fill-transparent text-forest-200 dark:text-forest-700'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-forest-500 dark:text-forest-400">
                  {Math.round(review.confidence * 100)}% classification confidence
                </span>
              </div>
              <p className="text-forest-800 dark:text-forest-200 leading-relaxed">
                {review.fullText}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display font-semibold text-forest-950 dark:text-cream flex items-center gap-2">
                  <Wand2 className="w-4.5 h-4.5 text-forest-500" />
                  AI-generated response draft
                </h2>
                {!draft && !generating && (
                  <Button size="sm" onClick={generateDraft}>
                    Generate draft
                  </Button>
                )}
              </div>

              {generating && draft === '' && (
                <div className="flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400 py-6">
                  <Spinner size="sm" /> Drafting a response…
                </div>
              )}

              {draft && (
                <>
                  <pre className="whitespace-pre-wrap font-body text-sm text-forest-800 dark:text-forest-200 bg-cream dark:bg-forest-950/50 rounded-xl p-4 border border-forest-100 dark:border-forest-800 leading-relaxed">
                    {draft}
                    {generating && <span className="inline-block w-1.5 h-4 bg-forest-500 ml-0.5 animate-pulse-soft align-middle" />}
                  </pre>
                  {!generating && (
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" onClick={copyDraft} icon={copied ? Check : Copy}>
                        {copied ? 'Copied' : 'Copy draft'}
                      </Button>
                      <Button size="sm" variant="ghost" onClick={generateDraft}>
                        Regenerate
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft h-fit">
            <h2 className="font-display font-semibold text-forest-950 dark:text-cream mb-5">
              Emotional tag breakdown
            </h2>
            <div className="flex flex-col gap-4">
              {Object.entries(review.tags).map(([key, score]) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-forest-700 dark:text-forest-300">
                      {TAG_LABELS[key]}
                    </span>
                    <span className="text-xs font-medium text-forest-500 dark:text-forest-400">
                      {Math.round(score * 100)}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-forest-50 dark:bg-forest-950/60 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${tagColor(score)}`}
                      style={{ width: `${score * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
