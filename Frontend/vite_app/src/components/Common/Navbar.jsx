import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Joinedcourses from '../../Pages/JoinedCourses';

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          LearnHub
        </Link>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 transition-colors ${isActive ? "underline font-semibold text-cyan-400" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 transition-colors ${isActive ? "underline font-semibold text-cyan-400" : ""}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/joinedcourses"
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 transition-colors ${isActive ? "underline font-semibold text-cyan-400" : ""}`
              }
            >
              Joined Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 transition-colors ${isActive ? "underline font-semibold text-cyan-400" : ""}`
              }
            >
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/query"
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 transition-colors ${isActive ? "underline font-semibold text-cyan-400" : ""}`
              }
            >
              Query Solver
            </NavLink>
          </li>
          <li>
            <NavLink
              to={user ? "/profile" : "/auth"}
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 transition-colors ${isActive ? "underline font-semibold text-cyan-400" : ""}`
              }
            >
              {user ? "Profile" : "Login / Signup"}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;