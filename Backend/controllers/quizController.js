const getQuizModel = require("../models/Quiz");

const getQuizzesByLanguage = async (req, res) => {
  try {
    const { language } = req.params;
    console.log(`Step 1: Language received from req.params: ${language}`);

    // Validate language
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
    if (!validLanguages.includes(language)) {
      console.log(`Step 2: Invalid language requested: ${language}`);
      return res.status(400).json({ message: "Invalid language. Must be one of Mongodb, Cpp, React, Python, Java, Javascript, Css, C, Html, Nodejs, Redis, Redux, Angular, Typescript, or Tailwindcss" });
    }
    console.log(`Step 2: Language validated successfully: ${language}`);

    // Get model for the specific collection
    const Quiz = getQuizModel(language);
    console.log(`Step 3: Model created for collection: ${Quiz.collection.name}`);
    console.log(`Step 3.1: Database name: ${Quiz.db.name}`);

    // Fetch quizzes
    const quizzes = await Quiz.find({ language }).lean();
    console.log(`Step 4: Query executed: Quiz.find({ language: "${language}" })`);
    console.log(`Step 5: Quizzes found:`, quizzes);

    if (!quizzes.length) {
      console.log(`Step 6: No quizzes found in ${language} collection`);
      return res.status(404).json({ message: `No quizzes found for language: ${language} in prem app` });
    }

    console.log(`Step 6: Fetched ${quizzes.length} quizzes from ${language} collection`);
    res.status(200).json(quizzes);
  } catch (error) {
    console.error(`Error fetching quizzes for ${req.params.language}:`, error.message);
    res.status(500).json({ message: "Server error while fetching quizzes", error: error.message });
  }
};

const addQuiz = async (req, res) => {
  try {
    const { language } = req.body;
    if (!["Mongodb", "Cpp", "React", "Python", "Java", "Javascript", "Css", "C", "Html", "Nodejs", "Redis", "Redux", "Angular", "Typescript", "Tailwindcss"].includes(language)) {
      console.log(`Invalid language for addQuiz: ${language}`);
      return res.status(400).json({ message: "Invalid language. Must be one of Mongodb, Cpp, React, Python, Java, Javascript, Css, C, Html, Nodejs, Redis, Redux, Angular, Typescript, or Tailwindcss" });
    }

    const Quiz = getQuizModel(language);
    const quiz = new Quiz(req.body);
    await quiz.save();
    console.log(`Added new quiz to ${language}: ${quiz.question}`);
    res.status(201).json(quiz);
  } catch (error) {
    console.error("Error adding quiz:", error.message);
    res.status(400).json({ message: "Invalid quiz data", error: error.message });
  }
};

module.exports = { getQuizzesByLanguage, addQuiz };