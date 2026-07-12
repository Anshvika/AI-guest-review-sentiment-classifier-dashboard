const rateLimit = require("express-rate-limit");

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    message: "Too many requests, try again later"
  }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 5, // Allow only 5 requests

  handler: (req, res) => {
    console.log("RATE LIMIT EXCEEDED");
    res.status(429).json({
          success: false,
          message: "Too many login attempts. Please try again later.",
        });
      },
});

module.exports = {
  generalLimiter,
  authLimiter
};
