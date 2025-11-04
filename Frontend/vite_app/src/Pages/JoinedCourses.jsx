import { useCourseContext } from "../Context/CoursesContext.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Dummy data with stable image URLs
const courses = [
  {
    id: 1,
    title: "Python Programming",
    description: "Learn Python with free videos and quizzes.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: 2,
    title: "Java Programming",
    description: "Master Java with hands-on tutorials.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Build dynamic websites with JavaScript.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    title: "CSS Styling",
    description: "Create stunning layouts with CSS.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 5,
    title: "C++ Programming",
    description: "Dive into C++ for high-performance applications.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    id: 6,
    title: "C Programming",
    description: "Learn the fundamentals of C programming.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    id: 7,
    title: "HTML Basics",
    description: "Build web pages with HTML from scratch.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 8,
    title: "Node.js Development",
    description: "Create scalable backend apps with Node.js.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 9,
    title: "MongoDB Database",
    description: "Master NoSQL databases with MongoDB.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 10,
    title: "Redis for Caching",
    description: "Boost app performance with Redis caching.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    id: 11,
    title: "Redux State Management",
    description: "Manage complex app states with Redux.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 12,
    title: "React Framework",
    description: "Build modern UIs with React.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 13,
    title: "Angular Framework",
    description: "Develop robust apps with Angular.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    id: 14,
    title: "TypeScript Programming",
    description: "Enhance JavaScript with TypeScript’s type safety.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 15,
    title: "Tailwind CSS Styling",
    description: "Style apps efficiently with Tailwind CSS.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
];

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