import { useState } from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'
import { Sprout, Sun, Moon, UserCircle, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { logoutUser } from '../api/reviewService.js'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/ai-insights', label: 'AI Insights' },
  { to: '/settings', label: 'Settings' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleLogout = async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.log(error)
    }

    logout()
    navigate('/login')
  }
  const linkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-150 px-3 py-2 rounded-lg ${
      isActive
        ? 'text-forest-700 dark:text-forest-200 bg-forest-100 dark:bg-forest-800'
        : 'text-forest-600/80 dark:text-forest-300/80 hover:text-forest-800 hover:bg-forest-50 dark:hover:text-forest-100 dark:hover:bg-forest-800/60'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 dark:border-forest-800 bg-cream/90 dark:bg-forest-950/90 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Container with Responsive Text Handling */}
        <NavLink to="/" className="flex items-center gap-2 min-w-0 shrink">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-forest-700 dark:bg-forest-400 shrink-0">
            <Sprout className="w-5 h-5 text-cream dark:text-forest-950" />
          </span>
          <span className="font-display font-semibold text-lg text-forest-950 dark:text-cream tracking-tight truncate">
            {/* Mobile (Up to 639px): Short clean name */}
            <span className="sm:hidden">Trishul Analytics</span>
            {/* Tablet (640px to 1023px): Medium name */}
            <span className="hidden sm:inline lg:hidden">Trishul Analytics Dashboard</span>
            {/* Desktop (1024px and wider): Full long title */}
            <span className="hidden lg:inline">AI Guest Review Sentiment Classifier Dashboard (Trishul Analytics)</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg text-forest-600 hover:bg-forest-100 dark:text-forest-300 dark:hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={handleLogout}
            aria-label="Logout"
            className="p-1 rounded-full text-forest-600 hover:bg-forest-100 dark:text-forest-300 dark:hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
          >
            <UserCircle className="w-7 h-7" />
          </button>
        </div>

        {/* Hamburger Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-forest-700 dark:text-forest-200 shrink-0"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Overlay Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-forest-100 dark:border-forest-800 px-4 py-3 flex flex-col gap-1 bg-cream dark:bg-forest-950">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClasses}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center justify-between pt-2 mt-2 border-t border-forest-100 dark:border-forest-800">
            <button
                onClick={() => {
                  handleLogout()
                  setMobileOpen(false)
                }}
                className="flex items-center gap-2 text-sm font-medium text-forest-700 dark:text-forest-200 px-3 py-2"
              >
                <UserCircle className="w-5 h-5" /> Logout
              </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-forest-600 hover:bg-forest-100 dark:text-forest-300 dark:hover:bg-forest-800"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}