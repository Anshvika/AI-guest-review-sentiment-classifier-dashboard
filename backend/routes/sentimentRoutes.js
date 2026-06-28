const express = require("express");
const router = express.Router();

const {
  searchReviews,
  getReviewsBySentiment,
  getSentimentSummary,
} = require("../controllers/sentimentController");

// Search Reviews

router.get("/",getSentimentSummary);

router.get("/search", searchReviews);

// Filter by Sentiment

router.get("/:sentiment", getReviewsBySentiment);

module.exports = router;