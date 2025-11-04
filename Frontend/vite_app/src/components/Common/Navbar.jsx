
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent hover:from-[#4F46E5] hover:to-[#6366F1] transition-all"
          >
            LearnHub
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-8 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[#6B7280] hover:text-[#6366F1] transition-colors font-medium relative ${
                    isActive ? "text-[#6366F1] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#6366F1]" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `text-[#6B7280] hover:text-[#6366F1] transition-colors font-medium relative ${
                    isActive ? "text-[#6366F1] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#6366F1]" : ""
                  }`
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/joinedcourses"
                className={({ isActive }) =>
                  `text-[#6B7280] hover:text-[#6366F1] transition-colors font-medium relative ${
                    isActive ? "text-[#6366F1] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#6366F1]" : ""
                  }`
                }
              >
                Joined Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) =>
                  `text-[#6B7280] hover:text-[#6366F1] transition-colors font-medium relative ${
                    isActive ? "text-[#6366F1] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#6366F1]" : ""
                  }`
                }
              >
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/query"
                className={({ isActive }) =>
                  `text-[#6B7280] hover:text-[#6366F1] transition-colors font-medium relative ${
                    isActive ? "text-[#6366F1] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#6366F1]" : ""
                  }`
                }
              >
                Query Solver
              </NavLink>
            </li>
            <li>
              <NavLink
                to={user ? "/profile" : "/auth"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#6366F1] text-white px-4 py-2 rounded-lg font-semibold"
                    : "bg-[#6366F1] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#4F46E5] transition-all duration-300 shadow-sm hover:shadow-md"
                }
              >
                {user ? "Profile" : "Login / Signup"}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;