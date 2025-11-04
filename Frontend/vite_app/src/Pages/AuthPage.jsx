
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        navigate("/profile");
      } else {
        await signup(formData.name, formData.email, formData.password);
        navigate("/profile");
      }
    } catch (err) {
      setError(err.message || "Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6366F1] to-[#818CF8] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] px-8 py-10 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className="text-white/80">
              {isLogin ? "Sign in to continue learning" : "Join our learning community"}
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex p-2 m-6 bg-[#F3F4F6] rounded-xl">
            <button
              onClick={() => {
                setIsLogin(true);
                setError("");
              }}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isLogin
                  ? "bg-white text-[#6366F1] shadow-md"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setError("");
              }}
              className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isLogin
                  ? "bg-white text-[#6366F1] shadow-md"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8">
            {!isLogin && (
              <div className="mb-5">
                <label className="block text-[#111827] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition-colors text-[#111827] placeholder-[#9CA3AF]"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div className="mb-5">
              <label className="block text-[#111827] font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition-colors text-[#111827] placeholder-[#9CA3AF]"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#111827] font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition-colors text-[#111827] placeholder-[#9CA3AF]"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="mb-5 p-4 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-xl">
                <p className="text-[#EF4444] text-sm text-center font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white py-4 rounded-xl font-semibold hover:from-[#4F46E5] hover:to-[#6366F1] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
              )}
            </button>

            {isLogin && (
              <div className="mt-4 text-center">
                <a href="#" className="text-[#6366F1] hover:text-[#4F46E5] text-sm font-medium transition-colors">
                  Forgot your password?
                </a>
              </div>
            )}
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-white/80 text-sm mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default AuthPage;