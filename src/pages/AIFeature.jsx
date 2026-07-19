import { useEffect, useRef, useState } from "react";
import { Sparkles, Send, Bot, User } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Spinner } from "../components/ui";
import { askAI } from "../api/reviewService";

const SUGGESTED_PROMPTS = [
  "Draft a polite apology to John who complained about the Wi-Fi.",
  "Summarize this week's negative reviews for Hilltop Mist Homestay.",
  "Write a thank-you note for a 5-star review.",
  "What is the most common complaint this month?",
];

function ChatBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
          isUser
            ? "bg-green-600 text-white"
            : "bg-forest-700 dark:bg-green-600 text-white"
        }`}
      >
        {isUser ? (
          <User className="w-5 h-5" />
        ) : (
          <Bot className="w-5 h-5" />
        )}
      </span>

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 whitespace-pre-wrap shadow ${
          isUser
            ? "bg-green-600 text-white"
            : "bg-white text-gray-900 border border-gray-200 dark:bg-[#17352A] dark:border-gray-700 dark:text-white"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default function AIFeature() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am your AI Guest Review Assistant. Ask me to summarize reviews, draft replies, or analyze guest feedback.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function sendMessage(promptText) {
    const prompt = (promptText || input).trim();

    if (!prompt || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: prompt,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await askAI(prompt);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Unable to contact AI service at the moment. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream dark:bg-[#0F1F19]">

      <Navbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-10">

        <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <Sparkles className="text-green-500" />
          AI Guest Review Assistant
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ask AI to summarize reviews, detect trends or generate guest replies.
        </p>

        <div className="bg-white dark:bg-[#10261D] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-[650px]">

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-5"
          >
            {messages.map((message, index) => (
              <ChatBubble
                key={index}
                role={message.role}
                content={message.content}
              />
            ))}

            {loading && (
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Spinner size="sm" />
                <span>AI is thinking...</span>
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-6 pb-4 flex flex-wrap gap-3">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="
                    px-4
                    py-2
                    rounded-xl
                    text-sm
                    font-medium
                    bg-green-100
                    text-green-900
                    hover:bg-green-200
                    dark:bg-green-800
                    dark:text-white
                    dark:hover:bg-green-700
                    transition-all
                  "
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 dark:border-gray-700 p-4 flex gap-3"
          >
            <input
              className="
                flex-1
                rounded-xl
                border
                border-gray-300
                dark:border-gray-600
                bg-white
                dark:bg-[#17352A]
                text-gray-900
                dark:text-white
                placeholder:text-gray-500
                dark:placeholder:text-gray-400
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-green-500
              "
              placeholder="Ask anything about your guest reviews..."
              value={input}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="
                bg-green-600
                hover:bg-green-700
                disabled:bg-gray-400
                text-white
                rounded-xl
                px-5
                flex
                items-center
                justify-center
                transition-all
              "
            >
              <Send size={18} />
            </button>
          </form>

        </div>

      </main>

      <Footer />

    </div>
  );
}