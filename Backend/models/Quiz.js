const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Question is required"],
    trim: true,
  },
  options: {
    A: { type: String, required: [true, "Option A is required"], trim: true },
    B: { type: String, required: [true, "Option B is required"], trim: true },
    C: { type: String, required: [true, "Option C is required"], trim: true },
    D: { type: String, required: [true, "Option D is required"], trim: true },
  },
  correctAnswer: {
    type: String,
    required: [true, "Correct answer is required"],
    enum: {
      values: ["A", "B", "C", "D"],
      message: "Correct answer must be A, B, C, or D",
    },
  },
  topic: {
    type: String,
    required: [true, "Topic is required"],
    trim: true,
  },
  language: {
    type: String,
    required: [true, "Language is required"],
    enum: {
      values: [
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
      ],
      message: "Language must be one of Mongodb, Cpp, React, Python, Java, Javascript, Css, C, Html, Nodejs, Redis, Redux, Angular, Typescript, or Tailwindcss",
    },
  },
});

const getQuizModel = (collectionName) => {
  if (mongoose.models.Quiz) {
    delete mongoose.models.Quiz;
  }
  return mongoose.model("Quiz", quizSchema, collectionName);
};

module.exports = getQuizModel;