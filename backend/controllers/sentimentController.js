const { reviews } = require("../data/reviews");
const ApiError = require("../middleware/ApiError");

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

        const result = reviews.filter(r =>
            r.guestName.toLowerCase().includes(q.toLowerCase()) ||
            r.hotel.toLowerCase().includes(q.toLowerCase()) ||
            r.review.toLowerCase().includes(q.toLowerCase())
        );

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

        const result = reviews.filter(
            r => r.sentiment === sentiment
        );

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
        const positive = reviews.filter(r => r.sentiment === "Positive").length;
        const neutral = reviews.filter(r => r.sentiment === "Neutral").length;
        const negative = reviews.filter(r => r.sentiment === "Negative").length;

        res.status(200).json({
            success: true,
            data: {
                totalReviews: reviews.length,
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