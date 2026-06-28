const { reviews, getNextId } = require("../data/reviews");
const ApiError = require("../middleware/ApiError");

const VALID_SENTIMENTS = ["Positive", "Neutral", "Negative"];

// GET /api/reviews
async function getAllReviews(req, res, next) {
    try {
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
        const id = Number(req.params.id);

        if (Number.isNaN(id))
            throw new ApiError(400, "Invalid Review ID");

        const review = reviews.find(r => r.id === id);

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

        const newReview = {
            id: getNextId(),
            guestName,
            hotel,
            review,
            sentiment,
            rating,
            date: new Date().toISOString().split("T")[0]
        };

        reviews.push(newReview);

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

        const id = Number(req.params.id);

        const index = reviews.findIndex(r => r.id === id);

        if (index === -1)
            throw new ApiError(404, "Review not found");

        reviews[index] = {
            ...reviews[index],
            ...req.body
        };

        res.status(200).json({
            success: true,
            data: reviews[index]
        });

    } catch (err) {
        next(err);
    }

}

// DELETE /api/reviews/:id
async function deleteReview(req, res, next) {

    try {

        const id = Number(req.params.id);

        const index = reviews.findIndex(r => r.id === id);

        if (index === -1)
            throw new ApiError(404, "Review not found");

        reviews.splice(index, 1);

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