
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

  const languages = [
    { value: "Mongodb", label: "MongoDB", icon: "🍃" },
    { value: "Cpp", label: "C++", icon: "⚡" },
    { value: "React", label: "React", icon: "⚛️" },
    { value: "Python", label: "Python", icon: "🐍" },
    { value: "Java", label: "Java", icon: "☕" },
    { value: "Javascript", label: "JavaScript", icon: "📜" },
    { value: "Css", label: "CSS", icon: "🎨" },
    { value: "C", label: "C", icon: "🔧" },
    { value: "Html", label: "HTML", icon: "🌐" },
    { value: "Nodejs", label: "Node.js", icon: "🟢" },
    { value: "Redis", label: "Redis", icon: "🔴" },
    { value: "Redux", label: "Redux", icon: "🔮" },
    { value: "Angular", label: "Angular", icon: "🅰️" },
    { value: "Typescript", label: "TypeScript", icon: "📘" },
    { value: "Tailwindcss", label: "Tailwind CSS", icon: "💨" },
  ];

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
    return options ? [
      { key: 'A', value: options.A },
      { key: 'B', value: options.B },
      { key: 'C', value: options.C },
      { key: 'D', value: options.D }
    ] : [];
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
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

  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getScoreMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return { text: "Outstanding! 🎉", color: "text-[#10B981]", bg: "bg-[#10B981]" };
    if (percentage >= 70) return { text: "Great Job! 👏", color: "text-[#6366F1]", bg: "bg-[#6366F1]" };
    if (percentage >= 50) return { text: "Good Effort! 💪", color: "text-[#F59E0B]", bg: "bg-[#F59E0B]" };
    return { text: "Keep Practicing! 📚", color: "text-[#EF4444]", bg: "bg-[#EF4444]" };
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiz Game</h1>
          <p className="text-lg md:text-xl text-white/90">Test your knowledge and track your progress</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        {/* Language Selector */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <label className="block text-lg font-semibold text-[#111827] mb-4">
            Select Programming Language:
          </label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#10B981] transition-colors text-[#111827] text-lg font-medium bg-white cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.icon} {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-16 h-16 border-4 border-[#10B981] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-[#6B7280] text-lg font-medium">Loading questions...</p>
          </div>
        ) : error ? (
          // Error State
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-[#EF4444]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[#EF4444] text-xl font-semibold">{error}</p>
          </div>
        ) : showResult ? (
          // Results Screen
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Results Header */}
            <div className={`${getScoreMessage().bg} text-white p-8 text-center`}>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-2xl font-bold">{getScoreMessage().text}</p>
            </div>

            {/* Score Details */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#F9FAFB] rounded-xl p-6 text-center">
                  <p className="text-[#6B7280] text-sm font-semibold mb-2">TOTAL SCORE</p>
                  <p className="text-4xl font-bold text-[#111827]">{score}/{questions.length}</p>
                </div>
                <div className="bg-[#F9FAFB] rounded-xl p-6 text-center">
                  <p className="text-[#6B7280] text-sm font-semibold mb-2">PERCENTAGE</p>
                  <p className="text-4xl font-bold text-[#111827]">{getScorePercentage()}%</p>
                </div>
                <div className="bg-[#F9FAFB] rounded-xl p-6 text-center">
                  <p className="text-[#6B7280] text-sm font-semibold mb-2">CORRECT</p>
                  <p className="text-4xl font-bold text-[#10B981]">{score}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-semibold text-[#6B7280] mb-2">
                  <span>Progress</span>
                  <span>{getScorePercentage()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-full ${getScoreMessage().bg} transition-all duration-1000 rounded-full`}
                    style={{ width: `${getScorePercentage()}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleRestart}
                  className="flex-1 bg-gradient-to-r from-[#10B981] to-[#059669] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#059669] hover:to-[#047857] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Restart Quiz
                </button>
                <button
                  onClick={() => setSelectedLanguage(selectedLanguage)}
                  className="flex-1 bg-white border-2 border-[#10B981] text-[#10B981] py-4 px-6 rounded-xl font-semibold hover:bg-[#10B981] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Quiz Question
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {questions.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-[#6B7280] text-lg">No questions available for this language.</p>
              </div>
            ) : (
              <>
                {/* Progress Header */}
                <div className="bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 px-6 py-4 border-b border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-[#10B981]">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-semibold text-[#6B7280]">
                      Score: {score}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#10B981] to-[#059669] transition-all duration-500"
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#111827] mb-8 leading-relaxed">
                    {currentQuestion?.question || "Loading..."}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {getOptionsArray(currentQuestion?.options).map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option.value)}
                        className={`w-full p-5 text-left rounded-xl border-2 transition-all duration-300 flex items-center gap-4 group ${
                          selectedOption === option.value
                            ? "bg-[#10B981]/10 border-[#10B981] shadow-md"
                            : "border-gray-200 hover:border-[#10B981]/50 hover:bg-[#F9FAFB]"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                          selectedOption === option.value
                            ? "bg-[#10B981] text-white"
                            : "bg-[#F3F4F6] text-[#6B7280] group-hover:bg-[#10B981]/10 group-hover:text-[#10B981]"
                        }`}>
                          {option.key}
                        </div>
                        <span className={`text-lg ${
                          selectedOption === option.value ? "text-[#111827] font-semibold" : "text-[#6B7280]"
                        }`}>
                          {option.value}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      !selectedOption
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#10B981] to-[#059669] text-white hover:from-[#059669] hover:to-[#047857] shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    {currentQuestionIndex === questions.length - 1 ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Finish Quiz
                      </>
                    ) : (
                      <>
                        Submit Answer
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizGame;