import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">LearnCode</h3>
            <p className="text-gray-400">
              A free platform to learn coding with courses, quizzes, and a community-driven query solver.
            </p>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/query" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Query Solver
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Twitter
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2025 LearnCode. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;