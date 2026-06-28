const { reviews } = require("../data/reviews");

// GET /api/dashboard/stats

async function getDashboardStats(req, res, next) {

    try {

        const positive = reviews.filter(r => r.sentiment === "Positive").length;
        const neutral = reviews.filter(r => r.sentiment === "Neutral").length;
        const negative = reviews.filter(r => r.sentiment === "Negative").length;

        const averageRating =
            reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

        res.status(200).json({

            success: true,

            data: {

                totalReviews: reviews.length,

                positiveReviews: positive,

                neutralReviews: neutral,

                negativeReviews: negative,

                averageRating: Number(averageRating.toFixed(1))

            }

        });

    } catch (err) {

        next(err);

    }

}

module.exports = {

    getDashboardStats

};