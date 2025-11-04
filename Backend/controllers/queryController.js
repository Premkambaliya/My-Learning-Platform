const axios = require("axios");

const solveQuery = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ message: "Query is required" });
    }

    console.log(`Received query: ${query}`);

    const grokResponse = await axios.post(
      "https://api.x.ai/v1/chat/completions",
      {
        model: "grok-beta",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant providing accurate, concise, and technical answers for programming-related questions.",
          },
          {
            role: "user",
            content: query,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.XAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const answer = grokResponse.data.choices[0]?.message?.content || "No answer received from AI.";
    console.log(`Grok response: ${answer}`);

    res.status(200).json({ answer });
  } catch (error) {
    console.error("Error solving query:", error.message);
    if (error.response) {
      const { status, data } = error.response;
      if (status === 400) {
        return res.status(400).json({
          message: "Invalid request to xAI API",
          error: data.message || "Check request format (e.g., model, parameters).",
        });
      }
      if (status === 401) {
        return res.status(401).json({ message: "Invalid API key. Please check your xAI API key." });
      }
      if (status === 429) {
        return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
      }
      if (status >= 500) {
        return res.status(500).json({ message: "xAI server error. Please try again later." });
      }
    }
    res.status(500).json({
      message: "Server error while solving query",
      error: error.message,
    });
  }
};

module.exports = { solveQuery };