# AI Guest Review Sentiment Classifier Dashboard

## 📝 Description

The AI Guest Review Sentiment Classifier Dashboard is a full-stack MERN application that helps hospitality businesses analyze customer feedback using AI-powered insights.

The application allows users to register, log in securely, manage their own guest reviews, visualize review statistics through a dashboard, and interact with an AI assistant powered by the Google Gemini API.

Each authenticated user can only access and manage their own reviews, ensuring complete data isolation.

---

# 🌐 Live Application

### Frontend

https://ai-guest-review-sentiment-classifie.vercel.app/

### Backend

https://ai-guest-review-backend.onrender.com/

---

# ✨ Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User-specific data

## Review Management

- Create Review
- Read Reviews
- Update Review
- Delete Review
- Search Reviews
- Filter by Sentiment

## Dashboard

Displays:

- Total Reviews
- Positive Reviews
- Neutral Reviews
- Negative Reviews
- Average Rating

## AI Assistant

Powered by Google Gemini API.

Users can ask questions like:

- Which hotel has the best reviews?
- Summarize negative reviews.
- Give recommendations.
- Review statistics.
- Review analysis.

If the Gemini API is unavailable, the application automatically falls back to local review analysis.

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

## Database

- MongoDB Atlas
- Mongoose ODM

## AI

- Google Gemini API

## Deployment

### Frontend

- Vercel

### Backend

- Render

---

# 📂 Project Structure

```
AI-guest-review-sentiment-classifier-dashboard
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── images
│
├── src
│   ├── api
│   ├── components
│   ├── context
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
├── public
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Anshvika/AI-guest-review-sentiment-classifier-dashboard.git
```

```bash
cd AI-guest-review-sentiment-classifier-dashboard
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

Start backend

```bash
npm start
```

Runs on

```
http://localhost:5000
```

---

# Frontend Setup

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# REST API Endpoints

## Authentication

| Method | Endpoint |
|----------|----------------|
| POST | /api/auth/register |
| POST | /api/auth/login |

---

## Reviews

| Method | Endpoint |
|----------|----------------|
| GET | /api/reviews |
| GET | /api/reviews/:id |
| POST | /api/reviews |
| PUT | /api/reviews/:id |
| PATCH | /api/reviews/:id |
| DELETE | /api/reviews/:id |

---

## Dashboard

| Method | Endpoint |
|----------|----------------|
| GET | /api/dashboard/stats |

---

## AI

| Method | Endpoint |
|----------|----------------|
| POST | /api/ai |

---

## Sentiment

| Method | Endpoint |
|----------|----------------|
| GET | /api/sentiment |
| GET | /api/sentiment/search?q=value |
| GET | /api/sentiment/:sentiment |

---

# Database

The application uses **MongoDB Atlas** as its cloud database.

Each review is associated with the authenticated user.

Users can only:

- View their own reviews
- Edit their own reviews
- Delete their own reviews
- Generate AI insights from their own reviews

---

# Database Schema

![Database Schema](./images/W5_SchemaDiagram_TBI-26100853.png)

---

# Architecture

```
React Frontend
        │
        │
        ▼
JWT Authentication
        │
        ▼
Express API
        │
Controllers
        │
Mongoose Models
        │
MongoDB Atlas
        │
Google Gemini API
```

---

# Deployment

## Frontend

Deployed on **Vercel**

https://ai-guest-review-sentiment-classifie.vercel.app/

---

## Backend

Deployed on **Render**

https://ai-guest-review-backend.onrender.com/

---

# Known Limitations (Free Tier)

This project uses free-tier hosting services.

### Render

- Backend spins down after approximately 15 minutes of inactivity.
- The first request after inactivity may take **30–60 seconds** while the server wakes up.

### MongoDB Atlas

- Uses the free shared cluster.

### Google Gemini API

- Uses the free API tier.
- Subject to daily request limits and rate limits.

---

# Future Improvements

- Charts and analytics dashboard
- Review export (PDF/CSV)
- Admin dashboard
- Email verification
- Password reset
- OAuth login (Google)

---

# Author

**Anshvika**

GitHub:

https://github.com/Anshvika/AI-guest-review-sentiment-classifier-dashboard