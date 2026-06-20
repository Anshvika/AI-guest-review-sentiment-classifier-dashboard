import { NavLink } from 'react-router-dom'
import { Sprout, Instagram, Twitter, Linkedin } from 'lucide-react'

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'AI Insights', to: '/ai-insights' },
      { label: 'Settings', to: '/settings' },
    ],
  },
  {
    heading: 'Account',
    links: [
      { label: 'Sign in', to: '/login' },
      { label: 'Create account', to: '/login' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 dark:border-forest-800 bg-cream dark:bg-forest-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-1 sm:col-span-2 md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-forest-700 dark:bg-forest-400 shrink-0">
              <Sprout className="w-4.5 h-4.5 text-cream dark:text-forest-950" />
            </span>
            <span className="font-display font-semibold text-forest-950 dark:text-cream">
              Trishul Analytics
            </span>
          </div>
          <p className="text-sm text-forest-600 dark:text-forest-400 max-w-sm leading-relaxed">
            The <strong className="font-medium text-forest-800 dark:text-forest-200">AI Guest Review Sentiment Classifier Dashboard (Trishul Analytics)</strong> provides sentiment intelligence for homestay managers — read every guest review at a glance, and respond before small issues grow.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="p-2 rounded-lg text-forest-500 hover:bg-forest-100 hover:text-forest-700 dark:text-forest-400 dark:hover:bg-forest-800 dark:hover:text-forest-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.heading}>
            <h3 className="text-sm font-semibold text-forest-900 dark:text-cream mb-3">
              {group.heading}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-forest-600 dark:text-forest-400 hover:text-forest-800 dark:hover:text-forest-200 transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Copyright Footer */}
      <div className="border-t border-forest-100 dark:border-forest-800 py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-forest-500 dark:text-forest-500 text-center max-w-2xl mx-auto">
          © {new Date().getFullYear()} AI Guest Review Sentiment Classifier Dashboard (Trishul Analytics). 
          <br className="sm:hidden" /> All rights reserved.
        </p>
      </div>
    </footer>
  )
}