// routes/quizRoutes.js
const express = require("express");
const router = express.Router();
const { getQuizzesByLanguage, addQuiz } = require("../controllers/quizController");
const { solveQuery } = require("../controllers/queryController");

// ✅ Log incoming requests (for debugging)
router.use((req, res, next) => {
  console.log(`📩 [QUIZ ROUTE] ${req.method} ${req.originalUrl}`);
  next();
});

// Now mounted at /api/quizzes in server.js, so use root-level paths here.
router.get("/:language", getQuizzesByLanguage);
router.post("/", addQuiz);
router.post("/query", solveQuery);

module.exports = router;
