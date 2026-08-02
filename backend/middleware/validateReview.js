const ApiError = require("./apiError");

const VALID_SENTIMENTS = [
  "Positive",
  "Neutral",
  "Negative"
];

function validateReview(req, res, next) {

  const {
    guestName,
    hotel,
    review,
    sentiment,
    rating
  } = req.body;

  if (!guestName || guestName.trim() === "") {
    return next(new ApiError(400, "Guest name is required."));
  }

  if (!hotel || hotel.trim() === "") {
    return next(new ApiError(400, "Hotel name is required."));
  }

  if (!review || review.trim() === "") {
    return next(new ApiError(400, "Review is required."));
  }

  if (!VALID_SENTIMENTS.includes(sentiment)) {
    return next(
      new ApiError(
        400,
        "Sentiment must be Positive, Neutral or Negative."
      )
    );
  }

  if (
    typeof rating !== "number" ||
    rating < 1 ||
    rating > 5
  ) {
    return next(
      new ApiError(
        400,
        "Rating must be a number between 1 and 5."
      )
    );
  }

  next();
}

module.exports = validateReview;