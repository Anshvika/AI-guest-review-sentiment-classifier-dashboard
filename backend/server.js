require("dotenv").config();

const express = require("express");
const cors = require("cors");
const passport = require("passport");

require("./config/passport");

const connectDB = require("./config/db");
const corsOptions = require("./config/corsConfig");

const reviewRoutes = require("./routes/reviewRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const sentimentRoutes = require("./routes/sentimentRoutes");
const authRoutes = require("./routes/authRoutes");

const authMiddleware = require("./middleware/authMiddleware");
const notFound = require("./middleware/notFound");
const { errorHandler } = require("./middleware/errorHandler");

const aiRoutes = require("./routes/aiRoutes");

const app = express();

connectDB();

app.use(cors(corsOptions));
app.use(express.json());

app.use(passport.initialize()); // ONLY THIS

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API Running",
  });
});

app.use("/api/reviews", reviewRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/sentiment", sentimentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});