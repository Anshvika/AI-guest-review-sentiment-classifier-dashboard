import { useMemo, useState, useEffect} from 'react'
import { MessageCircle, ThumbsUp, ThumbsDown, Star, Search, TriangleAlert } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from "react-router-dom";
import ReviewCard from '../components/ReviewCard.jsx'
import { Input } from '../components/ui'
import { getAllReviews, getDashboardStats } from '../api/reviewService'

const SENTIMENT_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'positive', label: 'Positive' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'negative', label: 'Negative' },
]


function MetricCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft">
      <span className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${accent}`}>
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <p className="text-2xl font-display font-bold text-forest-950 dark:text-cream leading-tight">
          {value}
        </p>
        <p className="text-sm text-forest-500 dark:text-forest-400">{label}</p>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [sentimentFilter, setSentimentFilter] = useState('all')
  const [homestayFilter, setHomestayFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({})
  const [weeklyTrend, setWeeklyTrend] = useState([])
  const [topAlerts, setTopAlerts] = useState([])

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewsResponse = await getAllReviews()
        setReviews(reviewsResponse.data.data)

        const statsResponse = await getDashboardStats()
        setStats(statsResponse.data.data)
      } catch (error) {
        console.error("Error fetching reviews:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      const matchesSentiment =
  sentimentFilter === 'all' ||
  r.sentiment?.trim().toLowerCase() === sentimentFilter
      const matchesHomestay = homestayFilter === 'all' || r.hotel === homestayFilter
      const matchesSearch =
        search.trim() === '' ||
        r.guestName.toLowerCase().includes(search.toLowerCase()) ||
        r.review.toLowerCase().includes(search.toLowerCase())
      return matchesSentiment && matchesHomestay && matchesSearch
    })
  }, [reviews, sentimentFilter, homestayFilter, search])

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Responsive Branding Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-1">
            Management Console
          </span>
          <h1 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-forest-950 dark:text-cream leading-tight">
            AI Guest Review Sentiment Classifier Dashboard{' '}
            <span className="text-forest-500 dark:text-forest-400 font-normal block sm:inline sm:before:content-['('] sm:after:content-[')']">
              Trishul Analytics
            </span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-forest-600 dark:text-forest-400">
            A real-time read on guest sentiment across all your properties.
          </p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <MetricCard
            icon={MessageCircle}
            label="Total reviews"
            value={stats?.totalReviews || 0}
            accent="bg-forest-100 dark:bg-forest-800 text-forest-700 dark:text-forest-300"
          />
          <MetricCard
            icon={ThumbsUp}
            label="Positive sentiment"
            value={`${stats ? Math.round((stats.positiveReviews / stats.totalReviews) * 100) : 0}%`}
            accent="bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300"
          />
          <MetricCard
            icon={ThumbsDown}
            label="Negative sentiment"
            value={`${stats ? Math.round((stats.negativeReviews / stats.totalReviews) * 100) : 0}%`}
            accent="bg-clay-100 dark:bg-clay-900/40 text-clay-600 dark:text-clay-300"
          />
          <MetricCard
            icon={Star}
            label="Average rating"
            value={stats?.averageRating || 0}
            accent="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          />
        </div>

        {/* Charts & Trends Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft overflow-hidden">
            <h2 className="font-display font-semibold text-forest-950 dark:text-cream mb-5">
              Sentiment trend, last 4 weeks
            </h2>
            <div className="flex items-end gap-3 sm:gap-4 h-44">
              {weeklyTrend.map((week) => {
                const total = week.positive + week.neutral + week.negative
                return (
                  <div key={week.week} className="flex-1 flex flex-col items-center gap-2 h-full">
                    <div className="flex-1 w-full flex flex-col justify-end rounded-lg overflow-hidden bg-forest-50 dark:bg-forest-950/50">
                      <div
                        className="bg-clay-400 dark:bg-clay-500"
                        style={{ height: `${(week.negative / total) * 100}%` }}
                      />
                      <div
                        className="bg-slate-300 dark:bg-slate-600"
                        style={{ height: `${(week.neutral / total) * 100}%` }}
                      />
                      <div
                        className="bg-forest-500 dark:bg-forest-400"
                        style={{ height: `${(week.positive / total) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-forest-500 dark:text-forest-400">{week.week}</span>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-forest-500 dark:text-forest-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-forest-500 dark:bg-forest-400" /> Positive
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" /> Neutral
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-clay-400 dark:bg-clay-500" /> Negative
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft">
            <h2 className="font-display font-semibold text-forest-950 dark:text-cream mb-5 flex items-center gap-2">
              <TriangleAlert className="w-4.5 h-4.5 text-clay-500 shrink-0" />
              Top alerts
            </h2>
            <div className="flex flex-col gap-4">
              {topAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start justify-between gap-3 border-b border-forest-50 dark:border-forest-800/50 pb-2 last:border-none last:pb-0">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-forest-900 dark:text-cream truncate">
                      {alert.issue}
                    </p>
                    <p className="text-xs text-forest-500 dark:text-forest-400 truncate">{alert.homestay}</p>
                  </div>
                  <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-clay-100 dark:bg-clay-900/40 text-clay-700 dark:text-clay-300">
                    {alert.mentions} m
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Toolbar Controls */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
          <h2 className="font-display text-xl font-semibold text-forest-950 dark:text-cream">
            Guest Reviews
          </h2>
           <Link
              to="/add-review"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              + Add Review
            </Link>
        </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <Input
                placeholder="Search guest or keyword…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={Search}
                className="w-full sm:max-w-xs"
              />
              <select
                value={homestayFilter}
                onChange={(e) => setHomestayFilter(e.target.value)}
                className="w-full sm:w-auto min-w-[180px] rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3.5 py-2.5 text-sm text-forest-950 dark:text-cream focus:outline-none focus:ring-2 focus:ring-forest-500 transition-colors"
              >
                <option value="all">All properties</option>
                {[new Set(reviews.map(r => r.hotel))].map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Smooth wrapping layout buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {SENTIMENT_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSentimentFilter(filter.value)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 ${
                    sentimentFilter === filter.value
                      ? 'bg-forest-600 dark:bg-forest-400 text-cream dark:text-forest-950 shadow-sm'
                      : 'bg-white dark:bg-forest-900 border border-forest-200 dark:border-forest-700 text-forest-600 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Feed Window */}
          {filteredReviews.length === 0 ? (
            <div className="text-center py-16 rounded-2xl border border-dashed border-forest-200 dark:border-forest-700 bg-white/50 dark:bg-forest-900/30">
              <p className="text-forest-600 dark:text-forest-400">
                No reviews match these filters. Try widening your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredReviews.map((review) => (
               <ReviewCard key={review.id || review._id} review={review}/>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
