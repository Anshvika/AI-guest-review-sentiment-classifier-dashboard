import api from "./api";

export const getAllReviews = () => api.get("/reviews");

export const getReviewById = (id) => api.get(`/reviews/${id}`);

export const createReview = (review) => api.post("/reviews", review);

export const updateReview = (id, review) => api.put(`/reviews/${id}`, review);

export const deleteReview = (id) => api.delete(`/reviews/${id}`);

export const getDashboardStats = () => api.get("/dashboard/stats");

export const searchReviews = (query) =>
  api.get(`/reviews/search?query=${encodeURIComponent(query)}`);

export const registerUser = (user) =>
  api.post("/auth/register", user);

export const loginUser = (credentials) =>
  api.post("/auth/login", credentials);

export const logoutUser = () =>
  api.post("/auth/logout");

export const askAI = (prompt) =>
  api.post("/ai", {
    prompt,
  });