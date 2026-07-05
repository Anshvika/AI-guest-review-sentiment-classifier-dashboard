import { useState } from 'react'
import { Home, BellRing, Save } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Input, Button, Modal } from '../components/ui'
import { useToast } from '../context/ToastContext.jsx'

const HOMESTAYS = [
  "Trishul Homestay",
  "Hill View Cottage",
  "Lake View Retreat",
];

export default function Settings() {
  const { showToast } = useToast()

  const [propertyName, setPropertyName] = useState(HOMESTAYS[0])
  const [contactEmail, setContactEmail] = useState('manager@riversidebamboo.com')
  const [alertThreshold, setAlertThreshold] = useState(3)
  const [negativeStreak, setNegativeStreak] = useState(2)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [saving, setSaving] = useState(false)

  function handleSaveClick(e) {
    e.preventDefault()
    setConfirmOpen(true)
  }

  function confirmSave() {
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setConfirmOpen(false)
      showToast({ message: 'Settings saved successfully', variant: 'success' })
    }, 900)
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-forest-950 dark:text-cream">
            Settings
          </h1>
          <p className="mt-1 text-forest-600 dark:text-forest-400">
            Manage your homestay details and how you're alerted to bad reviews.
          </p>
        </div>

        <form onSubmit={handleSaveClick} className="flex flex-col gap-6">
          <section className="p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft">
            <h2 className="font-display font-semibold text-forest-950 dark:text-cream mb-5 flex items-center gap-2">
              <Home className="w-4.5 h-4.5 text-forest-500" />
              Homestay details
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-forest-800 dark:text-forest-100">
                  Property
                </label>
                <select
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  className="rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3.5 py-2.5 text-sm text-forest-950 dark:text-cream focus:outline-none focus:ring-2 focus:ring-forest-500"
                >
                  {HOMESTAYS.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                label="Contact email"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                hint="Alerts and AI-drafted responses will be sent here."
              />
            </div>
          </section>

          <section className="p-6 rounded-2xl bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 shadow-soft">
            <h2 className="font-display font-semibold text-forest-950 dark:text-cream mb-5 flex items-center gap-2">
              <BellRing className="w-4.5 h-4.5 text-clay-500" />
              Alert thresholds
            </h2>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-forest-800 dark:text-forest-100">
                    Notify when rating drops below
                  </label>
                  <span className="text-sm font-semibold text-forest-700 dark:text-forest-300">
                    {alertThreshold} stars
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={alertThreshold}
                  onChange={(e) => setAlertThreshold(Number(e.target.value))}
                  className="w-full accent-forest-600 dark:accent-forest-400"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-forest-800 dark:text-forest-100">
                    Negative review streak alert
                  </label>
                  <span className="text-sm font-semibold text-forest-700 dark:text-forest-300">
                    {negativeStreak} in a row
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={negativeStreak}
                  onChange={(e) => setNegativeStreak(Number(e.target.value))}
                  className="w-full accent-forest-600 dark:accent-forest-400"
                />
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-forest-800 dark:text-forest-100">
                  Email alerts
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={emailAlerts}
                  onClick={() => setEmailAlerts((v) => !v)}
                  className={`relative w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 ${
                    emailAlerts ? 'bg-forest-600 dark:bg-forest-400' : 'bg-forest-200 dark:bg-forest-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      emailAlerts ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-forest-800 dark:text-forest-100">
                  SMS alerts
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={smsAlerts}
                  onClick={() => setSmsAlerts((v) => !v)}
                  className={`relative w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 ${
                    smsAlerts ? 'bg-forest-600 dark:bg-forest-400' : 'bg-forest-200 dark:bg-forest-700'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                      smsAlerts ? 'translate-x-5' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          <Button type="submit" size="lg" icon={Save} className="self-start">
            Save changes
          </Button>
        </form>
      </main>
      <Footer />

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Confirm changes"
        size="sm"
      >
        <p className="text-sm text-forest-600 dark:text-forest-400 mb-6">
          Save these alert thresholds and contact details for {propertyName}?
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => setConfirmOpen(false)}>
            Cancel
          </Button>
          <Button onClick={confirmSave} loading={saving}>
            Confirm
          </Button>
        </div>
      </Modal>
    </div>
  )
}
