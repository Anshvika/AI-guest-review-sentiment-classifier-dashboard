import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login({ navigate, currentPage }) {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [role,     setRole]     = useState("manager");
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("dashboard");
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-stone">
      <Navbar navigate={navigate} currentPage={currentPage} />

      <main className="flex-1 pt-16 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* ── Card ── */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

            {/* Green header strip */}
            <div className="bg-leaf-gradient px-8 pt-8 pb-10 text-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden="true">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-4 5-3 5-3C17 1 11 1 9.5 5.5A11.56 11.56 0 0 0 17 8Z"/>
                </svg>
              </span>
              <h1 className="font-display text-2xl font-bold text-white">Staff sign in</h1>
              <p className="text-forest-200 text-sm mt-1">Trishul Analytics · Eco-Homestays</p>
            </div>

            {/* Form area */}
            <div className="px-8 py-8 -mt-4 bg-white rounded-t-3xl">

              {/* Role selector */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Sign in as
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["manager", "staff"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2.5 rounded-xl text-sm font-medium border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 capitalize ${
                        role === r
                          ? "bg-forest-600 text-white border-forest-600"
                          : "bg-gray-50 text-gray-500 border-gray-200 hover:border-forest-400 hover:text-forest-700"
                      }`}
                    >
                      {r === "manager" ? "Property Manager" : "Front-desk Staff"}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@trishulhomes.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-forest-400 transition"
                  />
                </div>

                {/* Password */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs text-forest-600 hover:text-forest-800 focus:outline-none focus-visible:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPass ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-forest-400 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                      aria-label={showPass ? "Hide password" : "Show password"}
                    >
                      {showPass ? (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p role="alert" className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-forest-600 hover:bg-forest-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" strokeLinecap="round" />
                      </svg>
                      Signing in…
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-6">
                Access is restricted to authorised Trishul Eco-Homestays staff.{" "}
                <button
                  onClick={() => navigate("about")}
                  className="text-forest-600 hover:underline focus:outline-none"
                >
                  Learn more
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
