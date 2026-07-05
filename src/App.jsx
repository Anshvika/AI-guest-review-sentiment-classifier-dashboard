import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from './context/ToastContext.jsx'
import { ToastViewport } from './components/ui'
import Home from './pages/Home.jsx'
import AddReview from "./pages/AddReview";
import EditReview from "./pages/EditReview";
import Dashboard from './pages/Dashboard.jsx'
import DetailView from './pages/DetailView.jsx'
import LoginSignup from './pages/LoginSignup.jsx'
import Settings from './pages/Settings.jsx'
import AIFeature from './pages/AIFeature.jsx'

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-review" element={<AddReview />} />
        <Route path="/edit-review/:id" element={<EditReview />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/review/:id" element={<DetailView />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ai-insights" element={<AIFeature />} />
      </Routes>
      <ToastViewport />
    </ToastProvider>
  )
}
