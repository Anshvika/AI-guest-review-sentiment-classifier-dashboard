import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Sprout, Mail, Lock, User } from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { Input, Button } from "../components/ui";
import { useToast } from "../context/ToastContext.jsx";
import { loginUser, registerUser } from "../api/reviewService";
import { useAuth } from "../context/AuthContext";

export default function LoginSignup() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const { showToast } = useToast()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const { login } = useAuth()

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (mode === 'signup' && !form.name.trim()) next.name = 'Enter your full name.'
    if (!form.email.trim()) next.email = 'Enter your email address.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.password) next.password = 'Enter your password.'
    else if (form.password.length < 6) next.password = 'Use at least 6 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

useEffect(() => {
  const token = searchParams.get("token");
  const name = searchParams.get("name");
  const email = searchParams.get("email");

  if (token && name && email) {
    login(
      {
        name,
        email,
      },
      token
    );

    showToast({
      message: "Google login successful",
      variant: "success",
    });

    navigate("/dashboard", { replace: true });
  }
}, [searchParams, login, navigate, showToast]);

async function handleSubmit(e) {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {

    if (mode === "login") {

      const response = await loginUser({
        email: form.email,
        password: form.password,
      });

      login(response.data.user, response.data.token);

      showToast({
        message: "Signed in successfully",
        variant: "success",
      });

      navigate("/dashboard");

    } else {

      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      showToast({
        message: "Account created successfully",
        variant: "success",
      });

      setMode("login");

      setForm({
        name: "",
        email: "",
        password: "",
      });

    }

  } catch (error) {

    showToast({
      message:
        error.response?.data?.message ||
        "Something went wrong.",
      variant: "error",
    });

  } finally {

    setLoading(false);

  }
}
  

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-forest-700 dark:bg-forest-400 mb-4">
              <Sprout className="w-6 h-6 text-cream dark:text-forest-950" />
            </span>
            <h1 className="font-display text-2xl font-bold text-forest-950 dark:text-cream">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="mt-1.5 text-sm text-forest-600 dark:text-forest-400 text-center">
              {mode === 'login'
                ? 'Sign in to manage your homestay reviews.'
                : 'Start tracking guest sentiment in minutes.'}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft flex flex-col gap-4"
            noValidate
          >
            {mode === 'signup' && (
              <Input
                label="Full name"
                placeholder="Asha Kapoor"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                error={errors.name}
                icon={User}
                required
              />
            )}
            <Input
              label="Email address"
              type="email"
              placeholder="you@homestay.com"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              error={errors.email}
              icon={Mail}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => updateField('password', e.target.value)}
              error={errors.password}
              hint={mode === 'signup' ? 'At least 6 characters.' : undefined}
              icon={Lock}
              required
            />

            <Button type="submit" size="lg" loading={loading} className="mt-2 w-full">
              {mode === 'login' ? 'Sign in' : 'Create account'}
            </Button>
            {mode === "login" && (
            <Button
              type="button"
              className="w-full mt-3"
              onClick={() => {
                console.log("Google button clicked");
                window.location.href = "http://ai-guest-review-backend.onrender.com/auth/google";
              }}
            >
              Sign in with Google
            </Button>
          )}
          </form>

          <p className="text-center text-sm text-forest-600 dark:text-forest-400 mt-5">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => {
                setMode(mode === 'login' ? 'signup' : 'login')
                setErrors({})
              }}
              className="font-medium text-forest-700 dark:text-forest-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 rounded"
            >
              {mode === 'login' ? 'Create one' : 'Sign in'}
            </button>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
