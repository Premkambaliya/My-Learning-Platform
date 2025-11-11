import axios from "axios";

const API_URL = "https://my-learning-platform-0eju.onrender.com/api";

export const getQuizzes = async (language) => {
  try {
    // Add timeout and retry logic
    const response = await axios.get(`${API_URL}/quizzes/${language}`, {
      timeout: 5000,
      retries: 3,
    });
    return response.data;
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      throw new Error("Server is not running. Please start the backend server.");
    }
    throw new Error(error.message || "Failed to fetch quizzes");
  }
};