const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
      trim: true,
    },
    hotel: {
      type: String,
      required: true,
      trim: true,
    },
    review: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    sentiment: {
      type: String,
      enum: ["Positive", "Neutral", "Negative"],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);