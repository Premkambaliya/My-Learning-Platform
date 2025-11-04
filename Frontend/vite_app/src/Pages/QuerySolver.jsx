import { useState, useEffect } from "react";

function QuerySolver() {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Read API key from Vite environment variable
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
    <div className="container mx-auto p-16 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">
        Query Solver
      </h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Ask your question (e.g., How many datatypes in C?)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className={`flex-1 bg-teal-500 text-white p-3 rounded-lg ${
              loading || !query.trim()
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-teal-600"
            }`}
          >
            {loading ? "Processing..." : "Submit Query"}
          </button>

          <button
            type="button"
            onClick={handleClearChat}
            className="flex-1 bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
          >
            Clear Chat
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

      <div className="space-y-4">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-6 bg-gray-50"
          >
            <h2 className="text-lg font-semibold text-teal-600">Question:</h2>
            <p className="mb-2">{chat.query}</p>

            <h2 className="text-lg font-semibold text-green-600">Answer:</h2>
            <p className="whitespace-pre-wrap">{chat.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuerySolver;
