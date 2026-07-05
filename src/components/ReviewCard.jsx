import { Link, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import Card from "./Card.jsx";
import { SentimentPulse, Button } from "./ui";
import { deleteReview } from "../api/reviewService";

export default function ReviewCard({ review }) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!confirmDelete) return;

    try {
      await deleteReview(review._id || review.id);

      alert("Review deleted successfully");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
};
  return (
    <Card
      title={review.guestName || "Guest"}
      description={review.review || review.excerpt || "No review available."}
     footer={
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SentimentPulse sentiment={review.sentiment} />
        <div className="flex gap-2">
          <Link to={`/review/${review.id || review._id}`}>
            <Button variant="ghost" size="sm">
              View
            </Button>
          </Link>
          <Button
            size="sm"
            onClick={() =>
              navigate(`/edit-review/${review._id || review.id}`)
            }
          >
            Edit
          </Button>
          <Button
            size="sm"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    }
    >
      <div className="flex items-center justify-between mt-1 mb-3">
        <span className="text-xs text-forest-500 dark:text-forest-400">
          {review.hotel || review.homestay}
        </span>

        <span className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < (review.rating || 0)
                  ? "fill-clay-400 text-clay-400"
                  : "fill-transparent text-forest-200 dark:text-forest-700"
              }`}
            />
          ))}
        </span>
      </div>
    </Card>
  );
}