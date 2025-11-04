import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 mt-16">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-25">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Learn Coding for Free
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Master programming with our free courses, quizzes, and community-driven query solver.
          </p>
          <Link
            to="/courses"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Start Learning Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose LearnCode?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Courses */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Free Courses</h3>
              <p className="text-gray-600 mb-4">
                Access high-quality video tutorials for 15+ programming languages and technologies like Python, Java, React, and more.
              </p>
              <Link
                to="/courses"
                className="text-blue-500 hover:underline"
              >
                Explore Courses
              </Link>
            </div>
            {/* Feature 2: Quizzes */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Interactive Quizzes</h3>
              <p className="text-gray-600 mb-4">
                Test your knowledge with fun and challenging quizzes tailored for each language.
              </p>
              <Link
                to="/quiz"
                className="text-blue-500 hover:underline"
              >
                Take a Quiz
              </Link>
            </div>
            {/* Feature 3: Query Solver */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-3">Query Solver</h3>
              <p className="text-gray-600 mb-4">
                Stuck on a coding problem? Post your doubts and get answers from our community.
              </p>
              <Link
                to="/query"
                className="text-blue-500 hover:underline"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-lg mb-6">
            Join thousands of learners and dive into coding with our free resources.
          </p>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;