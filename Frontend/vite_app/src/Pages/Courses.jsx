import { useState, useEffect } from "react";
import CourseCard from "../components/Course/CourseCard";
import { useCourseContext } from "../Context/CoursesContext";

function Courses() {
  const { joinedCourses, handleJoinCourse } = useCourseContext();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        if (!res.ok) throw new Error("Failed to load courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-20">Loading courses...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;

  return (
    <div className="container mx-auto p-20 animate-fade-in mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Explore Our Courses
      </h1>

      <input
        type="text"
        placeholder="Search courses..."
        className="w-full p-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course._id}
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              isJoined={joinedCourses.includes(course.id)}
              handleJoinCourse={handleJoinCourse}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No courses found
          </p>
        )}
      </div>
    </div>
  );
}

export default Courses;
