import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext.jsx";
import { ToastViewport } from "./components/ui";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DetailView from "./pages/DetailView.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Settings from "./pages/Settings.jsx";
import AIFeature from "./pages/AIFeature.jsx";
import AddReview from "./pages/AddReview.jsx";
import EditReview from "./pages/EditReview.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <ToastProvider>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/review/:id"
          element={
            <ProtectedRoute>
              <DetailView />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-review"
          element={
            <ProtectedRoute>
              <AddReview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-review/:id"
          element={
            <ProtectedRoute>
              <EditReview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ai-insights"
          element={
            <ProtectedRoute>
              <AIFeature />
            </ProtectedRoute>
          }
        />

      </Routes>

      <ToastViewport />
    </ToastProvider>
  );
}