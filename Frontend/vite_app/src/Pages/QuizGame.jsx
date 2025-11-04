import { useState, useEffect } from "react";
import { getQuizzes } from "../api/quizApi";

function QuizGame() {
  const [selectedLanguage, setSelectedLanguage] = useState("Mongodb");
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const data = await getQuizzes(selectedLanguage);
        if (!data.length) {
          setError(`No questions available for ${selectedLanguage}.`);
        } else {
          setQuestions(data);
          setCurrentQuestionIndex(0);
          setScore(0);
          setSelectedOption(null);
          setShowResult(false);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [selectedLanguage]);

  const currentQuestion = questions[currentQuestionIndex];

  const getOptionsArray = (options) => {
    return options ? [options.A, options.B, options.C, options.D] : [];
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const optionsArray = getOptionsArray(currentQuestion.options);
    const correctOption = currentQuestion.options[currentQuestion.correctAnswer];
    if (selectedOption === correctOption) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  return (
    <div className="container mx-auto mt-20 p-16">
      <h1 className="text-3xl font-bold mb-6">Quiz Game</h1>

      <div className="mb-6">
        <label className="text-lg font-semibold mr-2">Select Language:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="Mongodb">MongoDB</option>
          <option value="Cpp">C++</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Javascript">JavaScript</option>
          <option value="Css">CSS</option>
          <option value="C">C</option>
          <option value="Html">HTML</option>
          <option value="Nodejs">Node.js</option>
          <option value="Redis">Redis</option>
          <option value="Redux">Redux</option>
          <option value="Angular">Angular</option>
          <option value="Typescript">TypeScript</option>
          <option value="Tailwindcss">Tailwind CSS</option>
        </select>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading questions...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : showResult ? (
        <div className="border rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">
            Your Score: {score} / {questions.length}
          </p>
          <button
            onClick={handleRestart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="border rounded-lg shadow-md p-6">
          {questions.length === 0 ? (
            <p className="text-gray-600">No questions available for this language.</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h2>
              <p className="text-lg mb-4">{currentQuestion?.question || "Loading..."}</p>
              <div className="space-y-2 mb-6">
                {getOptionsArray(currentQuestion?.options).map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className={`w-full p-3 text-left border rounded ${
                      selectedOption === option
                        ? "bg-blue-100 border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className={`bg-blue-500 text-white px-4 py-2 rounded ${
                  !selectedOption ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                }`}
              >
                Submit Answer
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizGame;