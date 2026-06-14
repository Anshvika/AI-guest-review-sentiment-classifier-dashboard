import React, { useState, useEffect } from "react";
const NAV_LINKS = [
  { label: "Home",     page: "home"      },
  { label: "Dashboard", page: "dashboard" },
  { label: "About",     page: "about"     },
  { label: "Login",     page: "login"     },
];

export default function Navbar({ navigate, currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-forest-950/95 backdrop-blur-md shadow-lg"
          : "bg-forest-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2.5 group focus:outline-none min-w-0 flex-1 md:flex-initial text-left"
            aria-label="Go to Home"
          >
            {}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-forest-600 group-hover:bg-forest-500 transition-colors flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-4 5-3 5-3C17 1 11 1 9.5 5.5A11.56 11.56 0 0 0 17 8Z"/>
              </svg>
            </span>
            
            {}
            <span className="font-display text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-tight leading-tight transition-all truncate sm:whitespace-normal">
              AI Guest Review Sentiment Classifier Dashboard <span className="text-emerald-400">(Trishul Analytics)</span>
            </span>
          </button>

          {}
          <nav className="hidden md:flex items-center gap-1 flex-shrink-0" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                onClick={() => handleNav(page)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 ${
                  currentPage === page
                    ? "bg-forest-600 text-white"
                    : "text-forest-200 hover:bg-forest-800 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-forest-200 hover:text-white hover:bg-forest-800 transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
          
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
            
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {}
      {menuOpen && (
        <div className="md:hidden bg-forest-950 border-t border-forest-800 px-4 pb-4 pt-2 space-y-1">
          {NAV_LINKS.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`block w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 ${
                currentPage === page
                  ? "bg-forest-600 text-white"
                  : "text-forest-200 hover:bg-forest-800 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}