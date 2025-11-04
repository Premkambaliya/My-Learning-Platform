import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Home from "./Pages/Home.jsx";
import Courses from "./Pages/Courses.jsx";
import CourseDetail from "./Pages/CourseDetail.jsx";
import QuizGame from "./Pages/QuizGame.jsx";
import QuerySolver from "./Pages/QuerySolver.jsx";
import JoinedCourses from "./Pages/JoinedCourses.jsx";
// import Dashboard from "./Pages/Dashboard.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import Profile from "./Pages/Profile.jsx";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/auth" />;
};

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/joinedcourses" element={<JoinedCourses />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/quiz" element={<QuizGame />} />
      <Route path="/query" element={<QuerySolver />} />
      {/* <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } /> */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      {/* Redirect /login and /signup to /auth */}
      <Route path="/login" element={<Navigate to="/auth" replace />} />
      <Route path="/signup" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}

export default RoutesConfig;