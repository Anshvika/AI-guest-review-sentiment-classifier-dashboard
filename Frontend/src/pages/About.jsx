import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Stat = ({ value, label }) => (
  <div className="text-center">
    <p className="font-display text-4xl font-bold text-forest-700">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{label}</p>
  </div>
);

const TeamCard = ({ initial, name, role }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-3 text-center">
    <span className="flex items-center justify-center w-14 h-14 rounded-full bg-leaf-gradient font-display text-white text-2xl font-bold">
      {initial}
    </span>
    <div>
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-xs text-forest-600 mt-0.5">{role}</p>
    </div>
  </div>
);

export default function About({ navigate, currentPage }) {
  return (
    <div className="flex flex-col min-h-screen bg-stone">
      <Navbar navigate={navigate} currentPage={currentPage} />

      <main className="flex-1 pt-16">

        {/* ── About hero ── */}
        <section className="bg-leaf-gradient py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest-300">
              Our story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-5">
              About Trishul Eco-Homestays
            </h1>
            <p className="text-forest-200 text-base sm:text-lg leading-relaxed">
              Nestled in the foothills of the Kumaon Himalayas, Trishul Eco-Homestays has welcomed mindful travellers for over a decade — offering immersive nature stays, local cuisine, and a genuine commitment to low-impact living.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-white border-y border-gray-100 py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            <Stat value="10+"  label="Years of operation" />
            <Stat value="3"    label="Property locations" />
            <Stat value="4.8★" label="Average guest rating" />
            <Stat value="500+" label="Repeat guests" />
          </div>
        </section>

        {/* ── About the tool ── */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-forest-600">
                Why we built this
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
                From spreadsheets to sentiment intelligence
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                It reads every guest review manually — copying them into a spreadsheet, colour-coding them by hand, and writing response. As review volume grew across five platforms, this became unsustainable.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Trishul Analytics is our answer: an AI-powered classifier that reads, categorises, and surfaces insights from every review within minutes of it being posted — so our hosts spend less time on admin and more time with their guests.
              </p>
            </div>
            <div className="bg-forest-50 rounded-2xl border border-forest-200 p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-forest-900">Technology stack</h3>
              {[
                ["Frontend",    "React 18 · Tailwind CSS"],
                ["AI backbone", "Anthropic Claude (LLM)"],
                ["Data layer",  "REST API · JSON pipeline"],
                ["Hosting",     "Vercel (frontend) "],
              ].map(([tech, detail]) => (
                <div key={tech} className="flex justify-between items-start gap-4 text-sm border-b border-forest-100 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium text-forest-800 whitespace-nowrap">{tech}</span>
                  <span className="text-forest-600 text-right">{detail}</span>
                </div>
              ))}
            </div>
          </div>
         {/* Project Core Architecture Section */}
<div className="py-12 bg-stone">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-serif text-center text-forest-900 mb-10 font-bold">
      Project Architecture & Core Pillars
    </h2>

    {}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      
      {/* Pillar 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-mist flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center font-bold text-xl mb-4">
          AI
        </div>
        <h3 className="text-xl font-bold text-forest-900 mb-1">Review Classifier</h3>
        <p className="text-sm text-forest-600 font-medium mb-3">Core Engine</p>
        <p className="text-sm text-gray-600">
          Automatically processes, parses, and categorizes incoming guest feedback using advanced text analysis.
        </p>
      </div>

      {/* Pillar 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-mist flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center font-bold text-xl mb-4">
          RT
        </div>
        <h3 className="text-xl font-bold text-forest-900 mb-1">Real-Time Pipeline</h3>
        <p className="text-sm text-forest-600 font-medium mb-3">Data Infrastructure</p>
        <p className="text-sm text-gray-600">
          Surfaces critical, actionable operational insights to hosts within minutes of being posted online.
        </p>
      </div>

      {/* Pillar 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-mist flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center font-bold text-xl mb-4">
          UI
        </div>
        <h3 className="text-xl font-bold text-forest-900 mb-1">Forest UI Tokens</h3>
        <p className="text-sm text-forest-600 font-medium mb-3">Design System</p>
        <p className="text-sm text-gray-600">
          Built completely with a central semantic design token config (`tailwind.config.js`) for seamless branding adjustments.
        </p>
      </div>

      {/* Pillar 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-mist flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center font-bold text-xl mb-4">
          0R
        </div>
        <h3 className="text-xl font-bold text-forest-900 mb-1">Zero Router</h3>
        <p className="text-sm text-forest-600 font-medium mb-3">Navigation Architecture</p>
        <p className="text-sm text-gray-600">
          Lightweight navigation state controlled directly via standard React props in `App.jsx` for ease of testing.
        </p>
      </div>

    </div>

    {}
    <div className="border-2 border-dashed border-forest-200 bg-forest-50/50 rounded-2xl p-6 text-center max-w-4xl mx-auto">
      <span className="text-2xl mb-2 block">🌿</span>
      <h4 className="text-md font-bold text-forest-800 mb-1">Future Development Roadmap</h4>
      <p className="text-sm text-forest-700">
        This platform will expand to include automated sentiment charting, historical performance datasets, and automated AI reply generation templates.
      </p>
    </div>
  </div>
</div>
        </section>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
