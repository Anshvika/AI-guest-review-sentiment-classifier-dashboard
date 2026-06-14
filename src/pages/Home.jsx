import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero   from "../components/Hero";
import Card   from "../components/Card";

const Icon = ({ path }) => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const FEATURE_CARDS = [
  {
    icon: <Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
    title: "Multi-platform ingestion",
    body: "Pull reviews automatically from Booking.com, Google, TripAdvisor, and Airbnb into one unified feed — no copy-paste.",
    badge: "Core",
    variant: "default",
  },
  {
    icon: <Icon path="M13 10V3L4 14h7v7l9-11h-7z" />,
    title: "LLM sentiment classification",
    body: "Each review is scored as Positive, Neutral, or Negative by a fine-tuned language model, with reasoning surfaced for every verdict.",
    badge: "AI",
    variant: "accent",
  },
  {
    icon: <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    title: "Actionable analytics",
    body: "See trend lines, category breakdowns, and week-over-week deltas on a live dashboard built for non-technical homestay managers.",
    variant: "default",
  },
  {
    icon: <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    title: "AI-drafted response suggestions",
    body: "It generates a courteous, on-brand reply for every negative review so your team always responds — fast and thoughtfully.",
    variant: "default",
  },
  {
    icon: <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
    title: "Staff-level access control",
    body: "Separate login roles for property managers and front-desk staff, with audit logs for every AI-assisted action taken.",
    variant: "accent",
  },
  {
    icon: <Icon path="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    title: "Eco-focus tagging",
    body: "Automatically flags mentions of sustainability, nature, cleanliness, and eco-practices — key differentiators for conscious travellers.",
    badge: "NEW",
    variant: "dark",
  },
];

const METRICS = [
  { metric: "94%",  metricSub: "Classification accuracy",  variant: "accent" },
  { metric: "3 min", metricSub: "Avg. time to insight",     variant: "accent" },
  { metric: "5K+",  metricSub: "Reviews analysed in pilot", variant: "accent" },
];

/* ─────────────────────────────────────────────────────────── */

export default function Home({ navigate, currentPage }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navigate={navigate} currentPage={currentPage} />

      <main className="flex-1 pt-16"> {/* pt-16 offsets fixed navbar */}

        {/* ── Hero ── */}
        <Hero navigate={navigate} />

        {/* ── Metrics strip ── */}
        <section className="bg-white border-y border-gray-100 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {METRICS.map((m) => (
              <Card key={m.metricSub} {...m} />
            ))}
          </div>
        </section>

        
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-600">
              Platform highlights
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Everything a homestay host needs
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              From raw review text to clear next actions — It covers the full pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURE_CARDS.map((card) => (
              <Card
                key={card.title}
                {...card}
                onClick={card.badge === "Core" || card.badge === "AI" ? () => navigate("dashboard") : undefined}
              />
            ))}
          </div>
        </section>

        {/* banner */}
        <section className="bg-leaf-gradient py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to understand your guests?
            </h2>
            <p className="text-forest-200 text-sm sm:text-base mb-8">
              Sign in with your Trishul HomeStay staff credentials to access the live dashboard.
            </p>
            <button
              onClick={() => navigate("login")}
              className="px-8 py-3.5 rounded-xl bg-white text-forest-800 font-semibold text-sm hover:bg-forest-50 transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-300"
            >
              Sign in to get started
            </button>
          </div>
        </section>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
