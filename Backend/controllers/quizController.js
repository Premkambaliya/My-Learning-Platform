// controllers/quizController.js
const getQuizModel = require("../models/Quiz");

const validLanguages = [
  "Mongodb",
  "Cpp",
  "React",
  "Python",
  "Java",
  "Javascript",
  "Css",
  "C",
  "Html",
  "Nodejs",
  "Redis",
  "Redux",
  "Angular",
  "Typescript",
  "Tailwindcss",
];

const getQuizzesByLanguage = async (req, res) => {
  try {
    const { language } = req.params;
    console.log(`Step 1: Language received: ${language}`);

    if (!validLanguages.includes(language)) {
      console.log(`❌ Invalid language requested: ${language}`);
      return res.status(400).json({
        message: `Invalid language. Must be one of: ${validLanguages.join(", ")}`,
      });
    }

    const Quiz = getQuizModel(language);
    console.log(`Step 2: Using collection: ${Quiz.collection.name}`);

    let quizzes = await Quiz.find({ language }).lean();
    console.log(`Step 3: Found ${quizzes.length} quizzes for ${language} in collection ${Quiz.collection.name}`);

    // Fallback: if per-language collection is empty, try a central 'quizzes' collection
    if (!quizzes.length) {
      console.log(`🔁 No quizzes in collection ${Quiz.collection.name}, trying central 'quizzes' collection as fallback`);
      const CentralQuiz = getQuizModel("quizzes");
      const fallback = await CentralQuiz.find({ language }).lean();
      console.log(`Step 4: Found ${fallback.length} quizzes in central 'quizzes' collection for ${language}`);
      if (fallback.length) {
        quizzes = fallback;
      }
    }

    if (!quizzes.length) {
      return res.status(404).json({ message: `No quizzes found for language: ${language}` });
    }

    res.status(200).json(quizzes);
  } catch (error) {
    console.error(`🔥 Error fetching quizzes for ${req.params.language}:`, error.message);
    res.status(500).json({
      message: "Server error while fetching quizzes",
      error: error.message,
    });
  }
};

const addQuiz = async (req, res) => {
  try {
    const { language } = req.body;

    if (!validLanguages.includes(language)) {
      return res.status(400).json({
        message: `Invalid language. Must be one of: ${validLanguages.join(", ")}`,
      });
    }

    const Quiz = getQuizModel(language);
    const quiz = new Quiz(req.body);
    await quiz.save();

    console.log(`✅ Added new quiz to ${language}: ${quiz.question}`);
    res.status(201).json(quiz);
  } catch (error) {
    console.error("🔥 Error adding quiz:", error.message);
    res.status(400).json({ message: "Invalid quiz data", error: error.message });
  }
};

module.exports = { getQuizzesByLanguage, addQuiz };
