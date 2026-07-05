const Review = require("../models/Review");
const ApiError = require("../middleware/ApiError");

//const VALID_SENTIMENTS = ["Positive", "Neutral", "Negative"];

// GET /api/reviews
async function getAllReviews(req, res, next) {
    try {
        const reviews = await Review.find();
        res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } catch (err) {
        next(err);
    }
}

// GET /api/reviews/:id
async function getReviewById(req, res, next) {
    try {
        const review = await Review.findById(req.params.id);
        if (!review)
        throw new ApiError(404, "Review not found");
        res.status(200).json({
            success: true,
            data: review
        });

    } catch (err) {
        next(err);
    }
}

// POST /api/reviews
async function createReview(req, res, next) {

    try {

        const {
            guestName,
            hotel,
            review,
            sentiment,
            rating
        } = req.body;

         const newReview = await Review.create({
            guestName,
            hotel,
            review,
            sentiment,
            rating,
            date: new Date()
        });

        res.status(201).json({
            success: true,
            data: newReview
        });

    } catch (err) {
        next(err);
    }

}

// PUT/PATCH /api/reviews/:id
async function updateReview(req, res, next) {

    try {

    const updatedReview = await Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        { 
            new: true,
            runValidators: true
         }
    );

if (!updatedReview)
    throw new ApiError(404, "Review not found");

        res.status(200).json({
            success: true,
            data: updatedReview
        });

    } catch (err) {
        next(err);
    }

}

// DELETE /api/reviews/:id
async function deleteReview(req, res, next) {
try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
        throw new ApiError(404, "Review not found");
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};