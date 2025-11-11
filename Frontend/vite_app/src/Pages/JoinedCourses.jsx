// Pages/JoinedCourses.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useCourseContext } from "../Context/CoursesContext";
import CourseCard from "../components/Course/CourseCard";

function JoinedCourses() {
  const { user } = useAuth();
  const { joinedCoursesData, handleRemoveCourse } = useCourseContext();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    if (joinedCoursesData && joinedCoursesData.length > 0) {
      setCourses(joinedCoursesData);
    } else {
      setCourses([]);
    }

    setLoading(false);
  }, [user, joinedCoursesData]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-20">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[#F59E0B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Authentication Required
          </h2>
          <p className="text-gray-600 mb-6">
            Please log in to view your joined courses.
          </p>
          <button
            onClick={() =>
              navigate("/login", { state: { from: "/joined-courses" } })
            }
            className="px-6 py-3 bg-[#6366F1] text-white rounded-lg font-medium hover:bg-[#4F46E5] transition-colors"
          >
            Log In
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#6366F1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6B7280] text-lg font-medium">
            Loading your courses...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning</h1>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                id={course._id}
                title={course.title}
                description={course.description}
                image={course.imageUrl || course.image}
                isJoined={true}
                onPrimaryAction={handleRemoveCourse}
                primaryActionLabel="Remove"
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-[#9CA3AF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              No courses yet
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              You haven't joined any courses yet. Explore our course catalog to
              get started!
            </p>
            <button
              onClick={() => navigate("/courses")}
              className="px-6 py-3 bg-[#6366F1] text-white rounded-lg font-medium hover:bg-[#4F46E5] transition-colors inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Browse Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JoinedCourses;
