const Review = require("../models/Review");

// GET /api/dashboard/stats

async function getDashboardStats(req, res, next) {
  try {
    // Total reviews for logged-in user
    const totalReviews = await Review.countDocuments({
      user: req.user.id,
    });

    // Sentiment counts
    const positiveReviews = await Review.countDocuments({
      user: req.user.id,
      sentiment: "Positive",
    });

    const neutralReviews = await Review.countDocuments({
      user: req.user.id,
      sentiment: "Neutral",
    });

    const negativeReviews = await Review.countDocuments({
      user: req.user.id,
      sentiment: "Negative",
    });

    // Ratings
    const reviews = await Review.find(
      { user: req.user.id },
      "rating"
    );

    const averageRating =
      reviews.length > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        : 0;

    // Percentages
    const positivePercent =
      totalReviews > 0
        ? Math.round((positiveReviews / totalReviews) * 100)
        : 0;

    const neutralPercent =
      totalReviews > 0
        ? Math.round((neutralReviews / totalReviews) * 100)
        : 0;

    const negativePercent =
      totalReviews > 0
        ? Math.round((negativeReviews / totalReviews) * 100)
        : 0;

    res.status(200).json({
      success: true,
      data: {
        totalReviews,
        positiveReviews,
        neutralReviews,
        negativeReviews,
        positivePercent,
        neutralPercent,
        negativePercent,
        averageRating: Number(averageRating.toFixed(1)),
      },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getDashboardStats,
};