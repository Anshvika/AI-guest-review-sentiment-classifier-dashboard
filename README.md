# AI Guest Review Sentiment Classifier Dashboard

## 📝 Description

The AI Guest Review Sentiment Classifier Dashboard is a full-stack web application that helps hospitality businesses analyze customer feedback. It provides a centralized dashboard for viewing guest reviews, filtering them by sentiment, monitoring review statistics, and managing reviews through complete CRUD operations.

The application uses MongoDB Atlas as its cloud database and follows a modular MERN architecture. Future development will integrate an AI model to automatically classify the sentiment of guest reviews.

---

## ✨ Features

- View all guest reviews
- Create, update and delete reviews
- Search reviews by guest name, hotel or review text
- Filter reviews by sentiment
- Dashboard showing:
  - Total Reviews
  - Positive Reviews
  - Neutral Reviews
  - Negative Reviews
  - Average Rating
- REST API built with Express
- MongoDB Atlas database integration using Mongoose

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose ODM

### Future AI Integration

- Anthropic Claude API

---

## 📂 Project Structure

```
AI-guest-review-sentiment-classifier-dashboard
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── reviewController.js
│   ├── middleware
│   ├── models
│   │   └── Review.js
│   ├── routes
│   │   └── reviewRoutes.js
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│
├── images
│   └── W5_SchemaDiagram_TBI-26100853.png
│
├── public
│
├── src
│   ├── api
│   │   ├── api.js
│   │   └── reviewService.js
│   ├── components
│   │   ├── ui
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ReviewCard.jsx
│   ├── context
│   ├── data
│   │   └── mockData.js
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   └── DetailView.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm
- MongoDB Atlas account

---

### Clone Repository

```bash
git clone https://github.com/Anshvika/AI-guest-review-sentiment-classifier-dashboard.git
```

```bash
cd AI-guest-review-sentiment-classifier-dashboard
```

---

## Backend Setup

From the project root, navigate to the backend directory:

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
```

Example

```env
PORT=5000

MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/guest_reviews_db
```

Start backend

```bash
npm start
```

Backend runs on

```
http://localhost:5000
```

---

## Frontend Setup

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## REST API Endpoints

### Reviews

| Method | Endpoint |
|---------|----------|
| GET | /api/reviews |
| GET | /api/reviews/:id |
| POST | /api/reviews |
| PUT | /api/reviews/:id |
| DELETE | /api/reviews/:id |

---

### Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard/stats |

---

### Sentiment

| Method | Endpoint |
|---------|----------|
| GET | /api/sentiment |
| GET | /api/sentiment/search?q=value |
| GET | /api/sentiment/:sentiment |

---

## Database

This project uses **MongoDB Atlas** as the cloud database.

### Why MongoDB?

- Flexible document-based schema
- Easy integration with Node.js
- Scalable cloud database
- Uses Mongoose ODM for validation and CRUD operations

---

## Database Schema

The application stores guest reviews in MongoDB collection.

![Database Schema](./images/W5_SchemaDiagram_TBI-26100853.png)

## Architecture

```
React Frontend
      │
      │ REST API
      ▼
Express Server
      │
Controllers
      │
Mongoose Models
      │
MongoDB Atlas
```

---

## Future Improvements

- AI-powered sentiment prediction using Anthropic Claude API
- Interactive analytics charts
- User authentication
- Admin dashboard
- Review export functionality

---
