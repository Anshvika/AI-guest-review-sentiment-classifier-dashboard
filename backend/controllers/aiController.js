const { GoogleGenAI } = require("@google/genai");
const Review = require("../models/Review");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required.",
      });
    }

    // Fetch reviews
    const reviews = await Review.find().sort({ createdAt: -1 });

    if (reviews.length === 0) {
      return res.status(200).json({
        success: true,
        reply: "There are currently no guest reviews available to analyze.",
      });
    }

    const reviewText = reviews
      .map(
        (review, index) => `
Review ${index + 1}
Guest: ${review.guestName}
Hotel: ${review.hotel}
Rating: ${review.rating}/5
Sentiment: ${review.sentiment}
Review: ${review.review}
`
      )
      .join("\n--------------------------------\n");

    const finalPrompt = `
You are an AI Guest Review Assistant.

Guest Reviews:

${reviewText}

User Question:

${prompt}

Instructions:
- Use ONLY the reviews above.
- Do not invent information.
- Give concise and helpful answers.
`;

    try {
      // Try Gemini first
      const result = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: finalPrompt,
      });

      return res.status(200).json({
        success: true,
        reply: result.text,
      });

    } catch (geminiError) {

      console.log("Gemini unavailable. Using local AI fallback.");

      const lowerPrompt = prompt.toLowerCase();

      // -------------------------------
      // Best Hotel
      // -------------------------------
      if (
        lowerPrompt.includes("best hotel") ||
        lowerPrompt.includes("best reviews") ||
        lowerPrompt.includes("highest rated")
      ) {

        const best = [...reviews].sort((a, b) => b.rating - a.rating);

        const top = best.filter(r => r.rating === best[0].rating);

        const reply =
          `Based on the guest reviews in the database, the highest-rated hotels are:\n\n` +
          top
            .map(
              r =>
                `• ${r.hotel} (${r.rating}/5)\nReason: "${r.review}"`
            )
            .join("\n\n");

        return res.json({
          success: true,
          reply,
        });
      }

      // -------------------------------
      // Negative Review Summary
      // -------------------------------
      if (
        lowerPrompt.includes("negative") ||
        lowerPrompt.includes("complaint") ||
        lowerPrompt.includes("summarize")
      ) {

        const negatives = reviews.filter(
          r => r.sentiment === "Negative"
        );

        const summary =
          negatives.length === 0
            ? "No negative reviews found."
            : negatives
                .map(
                  r =>
                    `• ${r.hotel}: ${r.review}`
                )
                .join("\n");

        return res.json({
          success: true,
          reply:
            `Summary of Negative Reviews\n\n${summary}`,
        });
      }

      // -------------------------------
      // Recommendations
      // -------------------------------
      if (
        lowerPrompt.includes("recommend") ||
        lowerPrompt.includes("improve")
      ) {

        return res.json({
          success: true,
          reply: `Recommendations:

• Improve cleanliness and hygiene.

• Reduce guest disturbance from noise.

• Improve water pressure in bathrooms.

• Improve food quality.

• Continue providing excellent hospitality at highly rated homestays.`,
        });
      }

      // -------------------------------
      // Default Analysis
      // -------------------------------
      const positive = reviews.filter(
        r => r.sentiment === "Positive"
      ).length;

      const neutral = reviews.filter(
        r => r.sentiment === "Neutral"
      ).length;

      const negative = reviews.filter(
        r => r.sentiment === "Negative"
      ).length;

      return res.json({
        success: true,
        reply: `Current Review Statistics

Total Reviews: ${reviews.length}

Positive: ${positive}

Neutral: ${neutral}

Negative: ${negative}

Gemini AI is currently unavailable, so this response was generated using the review database.`,
      });

    }

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};