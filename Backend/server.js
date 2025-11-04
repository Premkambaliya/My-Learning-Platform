const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes"); // 👈 ADD THIS LINE
const courseRoutes = require("./routes/courseRoutes"); // 👈 ADD THIS LINE

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Quiz API");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", quizRoutes); // 👈 ADD THIS LINE
app.use("/api", courseRoutes); // 👈 ADD THIS LINE

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
