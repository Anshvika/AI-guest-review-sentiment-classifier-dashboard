import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import Card from './Card.jsx'
import { SentimentPulse, Button } from './ui'

export default function ReviewCard({ review }) {
  console.log(review.guestName, review.sentiment)
  return (
    <Card
      title={review.guestName}
      description={review.review}
      footer={
        <div className="flex items-center justify-between">
          <SentimentPulse sentiment={review.sentiment} />
          <Link to={`/review/${review.id}`}>
            <Button variant="ghost" size="sm">
              View details
            </Button>
          </Link>
        </div>
      }
    >
      <div className="flex items-center justify-between mt-1 mb-3">
        <span className="text-xs text-forest-500 dark:text-forest-400">{review.hotel}</span>
        <span className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < review.rating
                  ? 'fill-clay-400 text-clay-400'
                  : 'fill-transparent text-forest-200 dark:text-forest-700'
              }`}
            />
          ))}
        </span>
      </div>
    </Card>
  )
}
