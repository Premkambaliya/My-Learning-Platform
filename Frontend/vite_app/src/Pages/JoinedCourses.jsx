import { useCourseContext } from "../Context/CoursesContext.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



function JoinedCourses() {
  const [error, setError] = useState(null);
  const [removingCourseId, setRemovingCourseId] = useState(null);

  let joinedCourses, handleRemoveCourse;
  try {
    ({ joinedCourses, handleRemoveCourse } = useCourseContext());
  } catch (err) {
    setError("Failed to load joined courses. Please try again.");
    return <div className="text-center text-red-500 py-12">{error}</div>;
  }

  // Handle course removal with animation
  const onRemoveCourse = (courseId, courseTitle) => {
    setRemovingCourseId(courseId); // Trigger fade-out animation
    setTimeout(() => {
      const success = handleRemoveCourse(courseId);
      if (success) {
        alert(`You have removed ${courseTitle} from your joined courses.`);
      }
      setRemovingCourseId(null); // Reset after animation
    }, 300); // Match with animation duration
  };

  // Filter courses to show only joined ones
  const joinedCoursesData = courses.filter((course) => joinedCourses.includes(course.id));

  return (
    <div className="container mx-auto p-20 animate-fade-in mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Joined Courses</h1>
      {error ? (
        <div className="text-center text-red-500 py-12">{error}</div>
      ) : joinedCoursesData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {joinedCoursesData.map((course) => (
            <div
              key={course.id}
              className={`border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow animate-slide-up ${
                removingCourseId === course.id ? "animate-fade-out" : ""
              }`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded mb-4"
                onError={(e) => (e.target.src = "https://picsum.photos/150")} // Fallback image
              />
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/course/${course.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>
                <button
                  onClick={() => onRemoveCourse(course.id, course.title)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                  disabled={removingCourseId === course.id}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p className="text-lg">You haven't joined any courses yet.</p>
          <Link
            to="/courses"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Explore Courses
          </Link>
        </div>
      )}
    </div>
  );
}

export default JoinedCourses;