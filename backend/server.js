require('dotenv').config();

const express = require('express');
const cors = require('cors');
const corsOptions= require("./config/corsConfig");
const reviewRoutes = require('./routes/reviewRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const sentimentRoutes = require('./routes/sentimentRoutes');
const notFound =require("./middleware/notFound");
const {errorHandler }= require('./middleware/errorHandler');

const app = express();

// --- Global Middleware ---
app.use(cors(corsOptions)); // Allows the React frontend (different origin/port) to call this API.
app.use(express.json()); // Parses incoming JSON request bodies into req.body.

// --- Health check / root route ---
// Handy for quickly confirming the server is alive in a browser or curl.
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Trishul Analytics API is running.',
    docs: {
    reviews: '/api/reviews',
    dashboard: '/api/dashboard/stats',
    sentiment: '/api/sentiment'
}
  });
});

// --- API Routes ---
app.use('/api/reviews', reviewRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/sentiment', sentimentRoutes);

// --- 404 handler ---
// Catches any request that didn't match a route above.
app.use(notFound);

// --- Centralized error handler ---
// MUST be registered last. Any next(err) call or thrown error inside an
// async route handler ends up here.
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Trishul Analytics API server running on http://localhost:${PORT}`);
  console.log(`📋 Review endpoints: http://localhost:${PORT}/api/reviews`);
  console.log(`📊 Dashboard endpoint: http://localhost:${PORT}/api/dashboard/stats`);
  console.log(`😊 Sentiment endpoint: http://localhost:${PORT}/api/sentiment`);
});