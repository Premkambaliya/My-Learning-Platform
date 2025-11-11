// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  // origin: 'http://localhost:5174', // or your frontend URL
  // credentials: true
}));
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Learning API 🚀");
});

// Mount routes with proper prefixes to avoid conflicts
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes); // Mount quiz routes at /api/quizzes
app.use("/api/courses", courseRoutes); // Mount course routes at /api/courses

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
