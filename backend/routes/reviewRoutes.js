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
const authMiddleware = require("../middleware/authMiddleware");

// CRUD Routes

// Protected Routes
router.get("/", authMiddleware, getAllReviews);
router.get("/:id", authMiddleware, getReviewById);

router.post("/", authMiddleware, validateReview, createReview);
router.put("/:id", authMiddleware, validateReview, updateReview);
router.patch("/:id", authMiddleware, validateReview, updateReview);
router.delete("/:id", authMiddleware, deleteReview);

module.exports = router;