import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const PlaceholderPanel = ({ icon, label, description, height = "h-48" }) => (
  <div className={`rounded-2xl border-2 border-dashed border-forest-200 bg-forest-50/50 flex flex-col items-center justify-center gap-3 p-6 ${height} text-center`}>
    <span className="text-3xl" aria-hidden="true">{icon}</span>
    <p className="font-semibold text-forest-800 text-sm">{label}</p>
    <p className="text-forest-500 text-xs max-w-xs">{description}</p>
  </div>
);

export default function Dashboard({ navigate, currentPage }) {
  return (
    <div className="flex flex-col min-h-screen bg-stone">
      <Navbar navigate={navigate} currentPage={currentPage} />

      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* ── Page header ── */}
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-600">
              Live workspace
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              Sentiment Dashboard
            </h1>
            <p className="text-gray-500 mt-2 max-w-2xl text-sm sm:text-base">
              This is your central command centre for AI-classified guest reviews. Charts, filtering controls, the review input form, and LLM-generated response suggestions will all live here once the backend is connected.
            </p>
          </div>

          {/* --(placeholders) -- */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total reviews",     icon: "📋", value: "—" },
              { label: "Positive",          icon: "😊", value: "—" },
              { label: "Neutral",           icon: "😐", value: "—" },
              { label: "Negative",          icon: "😞", value: "—" },
            ].map(({ label, icon, value }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-1"
              >
                <span className="text-2xl">{icon}</span>
                <p className="font-display text-3xl font-bold text-gray-300">{value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Main content grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Chart area */}
            <div className="lg:col-span-2 space-y-6">
              <PlaceholderPanel
                icon="📊"
                label="Sentiment trend chart"
                description="A time-series line chart showing Positive / Neutral / Negative review volume per week will render here."
                height="h-64"
              />
              <PlaceholderPanel
                icon="🥧"
                label="Platform breakdown (pie / donut)"
                description="Distribution of reviews across Booking.com, Google, Airbnb, and TripAdvisor."
                height="h-48"
              />
            </div>

            {/* Right panel */}
            <div className="space-y-6">
              <PlaceholderPanel
                icon="✍️"
                label="Review input form"
                description="Paste or type a guest review here to classify it in real time using the LLM backend."
                height="h-44"
              />
              <PlaceholderPanel
                icon="🤖"
                label="AI response suggestion"
                description="The model-generated draft reply to a negative review will appear in this pane, ready to copy or edit."
                height="h-44"
              />
              <PlaceholderPanel
                icon="🏷️"
                label="Eco-focus tag cloud"
                description="Frequently mentioned nature, sustainability, and cleanliness tags, sized by frequency."
                height="h-36"
              />
            </div>
          </div>

          {}
          <div className="mt-8">
            <PlaceholderPanel
              icon="📝"
              label="Recent reviews table"
              description="A paginated, filterable table of the last 50 classified reviews — with source, score, category tags, and a link to the AI reply — will be rendered here."
              height="h-56"
            />
          </div>

        </div>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
