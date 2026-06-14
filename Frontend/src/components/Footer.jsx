import React from "react";
const FOOTER_LINKS = [
  { label: "Home",       page: "home"      },
  { label: "Dashboard", page: "dashboard" },
  { label: "About",     page: "about"     },
  { label: "Login",     page: "login"     },
];

export default function Footer({ navigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-forest-300 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">

          {}
          <div className="md:col-span-6 flex flex-col justify-start">
            <div className="flex items-start gap-3 mb-3">
              {}
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-forest-600 mt-0.5 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" aria-hidden="true">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-4 5-3 5-3C17 1 11 1 9.5 5.5A11.56 11.56 0 0 0 17 8Z"/>
                </svg>
              </span>
              <span className="font-display text-white font-bold text-base lg:text-md tracking-tight leading-snug">
                AI Guest Review Sentiment Classifier Dashboard <span className="text-emerald-400">(Trishul Analytics)</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-forest-400 max-w-xl">
              AI-powered guest sentiment intelligence for Trishul Eco-Homestays — making every review count.
            </p>
          </div>

          {}
          <div className="md:col-span-3 md:pl-8 lg:pl-12">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
              Quick links
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map(({ label, page }) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-sm text-forest-400 hover:text-white transition-colors text-left focus:outline-none focus-visible:underline"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
              About the project
            </h3>
            <p className="text-sm text-forest-400 leading-relaxed">
              A capstone AI tool built to classify guest reviews by sentiment using large language models, surfacing actionable insights for eco-tourism hosts.
            </p>
          </div>

        </div>

        {}
        <div className="mt-12 pt-6 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-forest-500">
          <span>© {year} Trishul Eco-Homestays. All rights reserved.</span>
          <span>Built with React · Tailwind CSS · Anthropic AI</span>
        </div>
      </div>
    </footer>
  );
}