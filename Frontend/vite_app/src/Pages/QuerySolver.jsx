
import { useState, useEffect } from "react";

function QuerySolver() {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_XAI_API_KEY;

  useEffect(() => {
    const savedHistory = localStorage.getItem("chatHistory");
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a question.");
      return;
    }

    if (!API_KEY) {
      setError("Missing API key. Please check your .env configuration.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "grok-beta",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant providing accurate, concise, and technical answers for programming-related questions.",
            },
            { role: "user", content: query },
          ],
          max_tokens: 500,
          temperature: 0.7,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 400) {
          throw new Error(
            `Invalid request to xAI API: ${errorData.message || "Check model or parameters."}`
          );
        }
        if (response.status === 401) {
          throw new Error("Invalid API key. Please check your xAI API key.");
        }
        if (response.status === 429) {
          throw new Error("Rate limit exceeded. Please try again later.");
        }
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const answer = data.choices[0]?.message?.content || "No answer received from AI.";
      setChatHistory([...chatHistory, { query, answer }]);
      setQuery("");
    } catch (err) {
      setError(err.message || "Unable to fetch answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setChatHistory([]);
    localStorage.removeItem("chatHistory");
    setQuery("");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Query Solver</h1>
          <p className="text-lg md:text-xl text-white/90">Ask your programming questions and get AI-powered answers</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        {/* Query Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 sticky top-20 z-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                placeholder="Ask your question (e.g., How many datatypes in C?)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                rows="3"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#F59E0B] transition-colors text-[#111827] placeholder-[#9CA3AF] resize-none"
              />
              <div className="absolute bottom-3 right-3 text-sm text-[#9CA3AF]">
                {query.length} characters
              </div>
            </div>

            {error && (
              <div className="bg-[#EF4444]/10 border-2 border-[#EF4444]/20 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#EF4444]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[#EF4444] font-medium">{error}</p>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading || !query.trim()
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white hover:from-[#D97706] hover:to-[#B45309] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Submit Query
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClearChat}
                disabled={chatHistory.length === 0}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  chatHistory.length === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white border-2 border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Chat History */}
        <div className="space-y-6">
          {chatHistory.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-[#6B7280] text-lg">No questions yet. Ask your first programming question!</p>
            </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-[#F59E0B]/30 transition-colors"
              >
                {/* Question */}
                <div className="bg-gradient-to-r from-[#F59E0B]/10 to-[#D97706]/10 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-[#F59E0B] mb-1">YOUR QUESTION</h3>
                      <p className="text-[#111827] leading-relaxed">{chat.query}</p>
                    </div>
                  </div>
                </div>

                {/* Answer */}
                <div className="px-6 py-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-[#10B981] mb-2">AI ANSWER</h3>
                      <p className="text-[#111827] leading-relaxed whitespace-pre-wrap">{chat.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default QuerySolver;

