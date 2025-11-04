import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#F9FAFB] mt-16">
      {/* Enhanced Call to Action Section with Premium Design */}
<section className="relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] text-white py-24 md:py-32 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-[#818CF8] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#4F46E5] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

  {/* Content Container */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-[#6366F1]/20 border border-[#6366F1]/30 rounded-full mb-6 backdrop-blur-sm">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
        </span>
        <span className="text-sm font-medium text-white/90">Join 10,000+ Active Learners</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        Ready to Start Your
        <span className="block mt-2 bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#4F46E5] bg-clip-text text-transparent">
          Coding Journey?
        </span>
      </h2>

      {/* Subheading */}
      <p className="text-lg md:text-xl mb-10 text-white/70 max-w-2xl mx-auto leading-relaxed">
        Join thousands of learners and dive into coding with our free resources. 
        Start learning today and build the future you want.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Primary Button */}
        <Link
          to="/signup"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#6366F1] rounded-xl overflow-hidden shadow-2xl hover:shadow-[#6366F1]/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#818CF8] to-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center">
            Sign Up Now - It's Free
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>

        {/* Secondary Button */}
        <Link
          to="/courses"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
        >
          Browse Courses
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-white/60">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>100% Free Forever</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>No Credit Card Required</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Start Learning Instantly</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Add these animations to your global CSS (index.css or App.css) */}
<style>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#111827]">
            Why Choose LearnCode?
          </h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            Everything you need to become a successful developer, all in one place
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Courses */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-[#818CF8]/30">
              <div className="w-16 h-16 bg-[#6366F1]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#111827]">Free Courses</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Access high-quality video tutorials for 15+ programming languages and technologies like Python, Java, React, and more.
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center text-[#6366F1] hover:text-[#4F46E5] font-semibold transition-colors"
              >
                Explore Courses
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Feature 2: Quizzes */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-[#10B981]/30">
              <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#111827]">Interactive Quizzes</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Test your knowledge with fun and challenging quizzes tailored for each language.
              </p>
              <Link
                to="/quiz"
                className="inline-flex items-center text-[#10B981] hover:text-[#059669] font-semibold transition-colors"
              >
                Take a Quiz
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Feature 3: Query Solver */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-[#F59E0B]/30">
              <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#111827]">Query Solver</h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Stuck on a coding problem? Post your doubts and get answers from our community.
              </p>
              <Link
                to="/query"
                className="inline-flex items-center text-[#F59E0B] hover:text-[#D97706] font-semibold transition-colors"
              >
                Ask a Question
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;