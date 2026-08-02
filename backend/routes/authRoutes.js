const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/authController");

const {
  authLimiter,
  generalLimiter,
} = require("../middleware/rateLimiter");

// Register
router.post("/register",authLimiter, registerUser);

// Login
router.post("/login",authLimiter, loginUser);

// Logout
router.post("/logout", authLimiter, logoutUser);

// Redirect to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session:false,
  })
);

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "https://ai-guest-review-sentiment-classifie.vercel.app/login",
  }),
  async (req, res) => {
     console.log("Google callback executed");
    console.log(req.user);
    const user = req.user;

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.redirect(
      `https://ai-guest-review-sentiment-classifie.vercel.app/login?token=${token}&name=${encodeURIComponent(
        user.name
      )}&email=${encodeURIComponent(user.email)}`
    );
  }
);

module.exports = router;