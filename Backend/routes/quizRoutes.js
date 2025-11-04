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

router.get("/quizzes/:language", getQuizzesByLanguage);
router.post("/quizzes", addQuiz);
router.post("/query", solveQuery);

module.exports = router;
