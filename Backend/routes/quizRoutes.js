const express = require("express");
const router = express.Router();
const { getQuizzesByLanguage, addQuiz } = require("../controllers/quizController");
const { solveQuery } = require("../controllers/queryController");

router.get("/quizzes/:language", getQuizzesByLanguage);
router.post("/quizzes", addQuiz);
router.post("/query", solveQuery);

module.exports = router;