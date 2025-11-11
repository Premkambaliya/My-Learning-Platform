import { useState, useEffect } from "react";

/**
 * 💬 QuerySolver – Professional AI Chat Interface
 * Supports both Gemini (primary) and OpenAI (fallback)
 * Features:
 * - Elegant glassmorphic chat design
 * - Persistent chat history (sessionStorage)
 * - Clear error feedback & smooth animations
 */
function QuerySolver() {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const GEMINI_API_KEY = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  // Load history
  useEffect(() => {
    const saved = sessionStorage.getItem("chatSession");
    if (saved) setChatHistory(JSON.parse(saved));
  }, []);

  // Save history
  useEffect(() => {
    sessionStorage.setItem("chatSession", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // --- Gemini ---
  const callGemini = async (q) => {
    const modelName = "models/gemini-2.5-pro";
    const url = `https://generativelanguage.googleapis.com/v1/${modelName}:generateContent?key=${GEMINI_API_KEY}`;
    const payload = { contents: [{ role: "user", parts: [{ text: q }] }] };
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Gemini API error: ${resp.status}`);
    }
    const data = await resp.json();
    return data.candidates?.[0]?.content?.parts?.map(p => p.text).filter(Boolean).join("\n") || null;
  };

  // --- OpenAI ---
  const callOpenAI = async (q) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const payload = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: q }],
    };
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });
    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      throw new Error(errData.error?.message || `OpenAI API error: ${resp.status}`);
    }
    const data = await resp.json();
    return data.choices?.[0]?.message?.content || null;
  };

  // --- Submit ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return setError("Please enter a question.");
    if (!GEMINI_API_KEY && !OPENAI_API_KEY)
      return setError("Missing API keys. Configure .env file.");

    setLoading(true);
    setError(null);
    try {
      let answer = null;
      if (GEMINI_API_KEY) {
        try {
          answer = await callGemini(query);
        } catch (gemErr) {
          console.warn("Gemini failed, fallback to OpenAI:", gemErr);
        }
      }
      if (!answer && OPENAI_API_KEY) answer = await callOpenAI(query);
      if (!answer) throw new Error("No answer from both APIs.");
      setChatHistory((prev) => [...prev, { query, answer }]);
      setQuery("");
    } catch (err) {
      setError(err.message || "Unable to fetch answer. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setChatHistory([]);
    sessionStorage.removeItem("chatSession");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] via-[#F3F4F6] to-[#E5E7EB] flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white py-16 shadow-lg">
        <div className="container mx-auto text-center px-6">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-md">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Query Solver AI
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Smart Programming Q&A powered by Gemini & OpenAI
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto max-w-5xl px-4 py-10 space-y-10">
        {/* Input box */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              placeholder="💬 Ask your programming question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows="3"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] transition-colors text-gray-800 placeholder-gray-400 resize-none"
            />
            {error && (
              <div className="text-sm bg-red-100 border border-red-300 text-red-600 p-3 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex flex-wrap gap-3 justify-end">
              <button
                type="button"
                onClick={handleClearChat}
                disabled={chatHistory.length === 0}
                className={`px-6 py-3 rounded-xl font-semibold border-2 transition-all ${
                  chatHistory.length === 0
                    ? "text-gray-400 border-gray-200 cursor-not-allowed"
                    : "text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444] hover:text-white"
                }`}
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={loading || !query.trim()}
                className={`px-8 py-3 rounded-xl font-semibold text-white transition-all shadow-md flex items-center justify-center gap-2 ${
                  loading || !query.trim()
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:scale-[1.02]"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                    Ask AI
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Chat messages */}
        <div className="space-y-6">
          {chatHistory.length === 0 ? (
            <div className="text-center bg-white/70 border border-gray-100 rounded-2xl shadow-inner py-16">
              <p className="text-gray-500 text-lg">
                🚀 Start your first conversation by asking a programming question!
              </p>
            </div>
          ) : (
            chatHistory.map((chat, i) => (
              <div
                key={i}
                className="bg-white/90 border border-gray-100 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Question */}
                <div className="px-6 py-4 bg-gradient-to-r from-[#F59E0B]/10 to-[#D97706]/10 border-b border-gray-100">
                  <h3 className="text-[#F59E0B] font-semibold text-sm mb-1">
                    YOUR QUESTION
                  </h3>
                  <p className="text-gray-800 whitespace-pre-wrap">{chat.query}</p>
                </div>

                {/* Answer */}
                <div className="px-6 py-6">
                  <h3 className="text-[#10B981] font-semibold text-sm mb-2">
                    AI ANSWER
                  </h3>
                  <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                    {chat.answer}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200 bg-white/70">
        Powered by <span className="text-[#F59E0B] font-semibold">Gemini</span> +{" "}
        <span className="text-[#2563EB] font-semibold">OpenAI</span> • Query Solver ©{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default QuerySolver;
