import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/auth");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">My Profile</h1>
          <p className="text-lg text-white/90">Manage your account settings</p>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-[#F3F4F6] to-[#E5E7EB] px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-[#111827]">Account Information</h2>
              </div>

              {/* Card Content */}
              <div className="p-8 space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] mb-2">
                    <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    FULL NAME
                  </label>
                  <div className="bg-[#F9FAFB] border-2 border-gray-200 rounded-xl px-4 py-3 group-hover:border-[#6366F1]/30 transition-colors">
                    <p className="text-lg font-medium text-[#111827]">{user.name}</p>
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-semibold text-[#6B7280] mb-2">
                    <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    EMAIL ADDRESS
                  </label>
                  <div className="bg-[#F9FAFB] border-2 border-gray-200 rounded-xl px-4 py-3 group-hover:border-[#6366F1]/30 transition-colors">
                    <p className="text-lg font-medium text-[#111827]">{user.email}</p>
                  </div>
                </div>

                {/* Account Status */}
                <div className="bg-[#10B981]/10 border-2 border-[#10B981]/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#10B981]">Account Active</p>
                      <p className="text-sm text-[#059669]">Your account is in good standing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-6">
            {/* Logout Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">Quick Actions</h3>
              <button
                onClick={handleLogout}
                className="w-full bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white py-3 px-4 rounded-xl font-semibold hover:from-[#DC2626] hover:to-[#B91C1C] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-[#111827] mb-4">Learning Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Courses Joined</span>
                  <span className="text-2xl font-bold text-[#6366F1]">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Quizzes Taken</span>
                  <span className="text-2xl font-bold text-[#10B981]">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6B7280]">Queries Solved</span>
                  <span className="text-2xl font-bold text-[#F59E0B]">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;