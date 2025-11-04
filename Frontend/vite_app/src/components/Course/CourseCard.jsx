import { Link } from "react-router-dom";

function CourseCard({ id, title, description, image, isJoined, handleJoinCourse }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

      <div className="flex flex-col sm:flex-row gap-2">
        {/* Join / Joined Button */}
        <button
          onClick={() => handleJoinCourse(id)}
          className={`flex-1 py-2 rounded-md ${
            isJoined ? "bg-green-500" : "bg-blue-500"
          } text-white transition-colors`}
        >
          {isJoined ? "Joined" : "Join Course"}
        </button>

        {/* View Details Button */}
        <Link
          to={`/course/${id}`}
          className="flex-1 py-2 rounded-md bg-gray-700 text-white text-center hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;
