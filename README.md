# AI Guest Review Sentiment Classifier Dashboard

## 📝 Description

An AI-powered analytics dashboard that automatically ingests, classifies, and visualizes the sentiment of guest reviews to surface actionable hospitality insights. Built to help property managers understand customer feedback trends in real time.

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
  
- **Backend:** Node.js, Express
  
- **Current Data Store:** In-memory JavaScript data (planned migration to MongoDB)
  
- **Future AI Integration:** Anthropic Claude API

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
  
- npm

### Installation

Clone the repository:

git clone https://github.com/Anshvika/AI-guest-review-sentiment-classifier-dashboard.git

Navigate to the project:

cd AI-guest-review-sentiment-classifier-dashboard

Install frontend dependencies:

npm install

## ▶️ Running the Frontend

Start the frontend development server:

npm start

The frontend will be available at:

http://localhost:5173

## ▶️ Running the Backend Locally

Navigate to the backend folder:

cd backend

Install backend dependencies:

npm install

Create a `.env` file in the backend folder with the following content:

PORT=5000

Start the backend server:

npm start

The backend API will be available at:

http://localhost:5000

You can verify the backend by opening:

http://localhost:5000/

## 💡 Understanding the Architecture

This project follows a modular architecture with a clear separation between the frontend presentation layer and the backend API services. The current backend uses in-memory JavaScript data for development and testing, with a planned migration to MongoDB and future integration with the Anthropic Claude API for AI-powered sentiment analysis.
