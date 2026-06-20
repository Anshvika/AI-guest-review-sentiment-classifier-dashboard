import { useEffect, useRef, useState } from 'react'
import { Sparkles, Send, Bot, User } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Spinner } from '../components/ui'

const SUGGESTED_PROMPTS = [
  'Draft a polite apology to John who complained about the Wi-Fi.',
  'Summarize this week\'s negative reviews for Hilltop Mist Homestay.',
  'Write a thank-you note for a 5-star review about our breakfast.',
  'What\'s the most common complaint across all properties this month?',
]

function generateAssistantReply(prompt) {
  const lower = prompt.toLowerCase()

  if (lower.includes('wifi') || lower.includes('wi-fi')) {
    return "Here's a draft apology:\n\nHi John,\n\nThank you for flagging the Wi-Fi trouble during your stay — I'm sorry it got in the way of your trip. We've had our technician inspect the router and upgrade the signal booster in that wing. As a small gesture, I'd like to offer 15% off your next visit.\n\nWarm regards,\nThe Team"
  }
  if (lower.includes('summar') || lower.includes('hilltop')) {
    return "Here's a summary of recent negative reviews for Hilltop Mist Homestay:\n\n• 9 mentions of unreliable Wi-Fi, the most common complaint\n• 2 mentions of slow check-in due to staff availability\n• Overall sentiment dipped to 58% positive this week, down from 71%\n\nRecommendation: prioritize the router upgrade — it accounts for most of the recent dissatisfaction."
  }
  if (lower.includes('thank') || lower.includes('breakfast') || lower.includes('5-star') || lower.includes('5 star')) {
    return "Here's a thank-you draft:\n\nDear Guest,\n\nThank you so much for the wonderful review! We're thrilled the breakfast spread stood out — our team puts a lot of love into sourcing everything locally. It would mean the world if you shared a photo with us next time you visit!\n\nWarmly,\nThe Team"
  }
  if (lower.includes('common complaint') || lower.includes('this month')) {
    return "Looking across all properties this month, the most common complaint by volume is Wi-Fi reliability (9 mentions), followed by pre-arrival room cleaning (4 mentions) and mosquito protection at the farmstay (5 mentions). Addressing connectivity first would likely have the biggest impact on overall sentiment."
  }
  return "Thanks for the prompt! Based on recent guest sentiment data, I'd recommend acknowledging the specific concern directly, offering a concrete fix or gesture, and keeping the tone warm and personal — guests respond well when responses feel handwritten rather than templated. Want me to draft something specific?"
}

function ChatBubble({ role, content, streaming }) {
  const isUser = role === 'user'
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <span
        className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${
          isUser
            ? 'bg-clay-500 text-cream'
            : 'bg-forest-700 dark:bg-forest-400 text-cream dark:text-forest-950'
        }`}
      >
        {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </span>
      <div
        className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-clay-500 text-cream rounded-tr-sm'
            : 'bg-white dark:bg-forest-900 border border-forest-100 dark:border-forest-800 text-forest-800 dark:text-forest-200 rounded-tl-sm'
        }`}
      >
        {content}
        {streaming && (
          <span className="inline-block w-1.5 h-4 bg-forest-500 ml-0.5 animate-pulse-soft align-middle" />
        )}
      </div>
    </div>
  )
}

export default function AIFeature() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm your Guest Review Assistant. Ask me to draft a reply, summarize feedback, or spot trends across your properties.",
    },
  ])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function sendMessage(promptText) {
    const text = (promptText ?? input).trim()
    if (!text || isStreaming) return

    setMessages((prev) => [...prev, { role: 'user', content: text }])
    setInput('')
    setIsStreaming(true)

    const fullReply = generateAssistantReply(text)
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

    let i = 0
    const interval = setInterval(() => {
      i += 2
      setMessages((prev) => {
        const next = [...prev]
        next[next.length - 1] = { role: 'assistant', content: fullReply.slice(0, i) }
        return next
      })
      if (i >= fullReply.length) {
        clearInterval(interval)
        setIsStreaming(false)
      }
    }, 12)
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage()
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-forest-950">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex flex-col">
        <div className="mb-6">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-forest-950 dark:text-cream flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-forest-500" />
            AI Guest Review Assistant
          </h1>
          <p className="mt-1 text-forest-600 dark:text-forest-400">
            Ask for response drafts, summaries, or sentiment trends in plain language.
          </p>
        </div>

        <div className="flex-1 flex flex-col rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 shadow-soft overflow-hidden">
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto scrollbar-thin px-4 sm:px-6 py-6 flex flex-col gap-5 max-h-[55vh] min-h-[320px]"
          >
            {messages.map((m, i) => (
              <ChatBubble
                key={i}
                role={m.role}
                content={m.content}
                streaming={isStreaming && i === messages.length - 1 && m.role === 'assistant'}
              />
            ))}
            {isStreaming && messages[messages.length - 1]?.content === '' && (
              <div className="flex items-center gap-2 ml-11 text-forest-400 dark:text-forest-500">
                <Spinner size="sm" />
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="px-4 sm:px-6 pb-4 flex flex-wrap gap-2">
              {SUGGESTED_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="text-xs text-left px-3 py-2 rounded-xl bg-forest-50 dark:bg-forest-800/60 text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-forest-100 dark:border-forest-800 p-3 sm:p-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the assistant anything about your reviews…"
              disabled={isStreaming}
              className="flex-1 rounded-xl border border-forest-200 dark:border-forest-700 bg-cream dark:bg-forest-950/60 px-4 py-2.5 text-sm text-forest-950 dark:text-cream placeholder:text-forest-400 dark:placeholder:text-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              aria-label="Send message"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-forest-600 dark:bg-forest-400 text-cream dark:text-forest-950 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-forest-700 dark:hover:bg-forest-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-forest-950 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
