const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const validateReview = require("../middleware/validateReview");

// CRUD Routes

router.get("/", getAllReviews);

router.get("/:id", getReviewById);

router.post("/", validateReview, createReview);

router.put("/:id", validateReview, updateReview);

router.patch("/:id", validateReview, updateReview);

router.delete("/:id", deleteReview);

module.exports = router;