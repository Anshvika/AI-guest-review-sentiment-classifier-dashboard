import React from "react";
export default function Hero({ navigate }) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-leaf-gradient"
      aria-labelledby="hero-heading"
    >
      {/* ── Decorative background circles ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-forest-800/30 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-forest-600/20 blur-2xl"
      />

      {/* ── Leaf pattern overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C15 10 10 25 5 50c5-5 10-8 15-8-3 8-4 13-4 18 10-10 18-22 18-35 0 13 8 25 18 35 0-5-1-10-4-18 5 0 10 3 15 8-5-25-10-40-25-45z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow label */}
        <span className="inline-block px-3 py-1 mb-6 rounded-full bg-forest-600/50 border border-forest-500/60 text-forest-200 text-xs font-semibold uppercase tracking-widest">
          AI · Sentiment Analysis · Eco-Tourism
        </span>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-shadow leading-tight mb-5"
        >
          Know how every guest{" "}
          <span className="italic text-forest-300">really</span> feels
        </h1>

        {}
        <p className="text-forest-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          It uses large language models to classify guest reviews from Booking.com, Google, and Airbnb — surfacing positive highlights and critical concerns so you can act, not guess.
        </p>

        {}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("dashboard")}
            className="px-7 py-3.5 rounded-xl bg-forest-500 hover:bg-forest-400 text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-forest-900/50 hover:shadow-forest-700/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300"
          >
            Open Dashboard →
          </button>
          <button
            onClick={() => navigate("about")}
            className="px-7 py-3.5 rounded-xl border border-forest-500/60 hover:border-forest-400 text-forest-200 hover:text-white font-semibold text-sm tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300"
          >
            About the project
          </button>
        </div>

        {}
        <div className="mt-16 flex flex-col items-center gap-1.5 text-forest-500 text-xs">
          <span className="tracking-widest uppercase">Scroll to explore</span>
          <svg
            className="w-4 h-4 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
