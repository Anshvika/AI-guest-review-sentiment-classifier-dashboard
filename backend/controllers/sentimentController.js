const Review = require("../models/review");
const ApiError = require("../middleware/apiError");

const VALID_SENTIMENTS = [
    "Positive",
    "Neutral",
    "Negative"
];

// GET /api/sentiment/search?q=

async function searchReviews(req, res, next) {

    try {

        const { q } = req.query;

        if (!q)
            throw new ApiError(400, "Search query required");

        const result = await Review.find({
            $or: [
                { guestName: { $regex: q, $options: "i" } },
                { hotel: { $regex: q, $options: "i" } },
                { review: { $regex: q, $options: "i" } }
            ]
        });

        res.status(200).json({

            success: true,

            count: result.length,

            data: result

        });

    } catch (err) {

        next(err);

    }

}

// GET /api/sentiment/:sentiment

async function getReviewsBySentiment(req, res, next) {

    try {

        const sentiment = req.params.sentiment;

        if (!VALID_SENTIMENTS.includes(sentiment))
            throw new ApiError(400, "Invalid Sentiment");

        const result = await Review.find({
            sentiment: sentiment
        });

        res.status(200).json({

            success: true,

            count: result.length,

            data: result

        });

    } catch (err) {

        next(err);

    }

}

async function getSentimentSummary(req, res, next) {
    try {
        const positive = await Review.countDocuments({ sentiment: "Positive" });
        const neutral = await Review.countDocuments({ sentiment: "Neutral" });
        const negative = await Review.countDocuments({ sentiment: "Negative" });

        res.status(200).json({
            success: true,
            data: {
                totalReviews: positive + neutral + negative,
                positiveReviews: positive,
                neutralReviews: neutral,
                negativeReviews: negative
            }
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {

    searchReviews,

    getReviewsBySentiment,

    getSentimentSummary

};