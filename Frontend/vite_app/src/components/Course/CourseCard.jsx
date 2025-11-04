import { Link } from "react-router-dom";
import { useCourseContext } from "../../Context/CoursesContext";

function CourseCard({ id, title, image, description }) {
  const { joinedCourses, handleJoinCourse } = useCourseContext();
  const isJoined = joinedCourses.includes(id);

  const handleJoin = () => {
    if (!isJoined) {
      const success = handleJoinCourse(id);
      if (success) {
        alert(`You have joined ${title}!`);
      }
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow bg-white animate-slide-up">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={handleJoin}
          className={`px-4 py-2 rounded text-white ${
            isJoined
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 transition-colors"
          }`}
          disabled={isJoined}
        >
          {isJoined ? "Joined" : "Join"}
        </button>
        <Link
          to={`/course/${id}`}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;