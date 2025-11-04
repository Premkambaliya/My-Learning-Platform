import { useParams, Link } from "react-router-dom";
import { courseData } from "./CourseDetail"; // Import courseData

function TopicDetail() {
  const { id, topicId } = useParams();
  const course = courseData[id];
  const topic = course?.topics[parseInt(topicId)];

  if (!course || !topic) {
    return <div className="container mx-auto p-4 text-center text-red-500">Topic not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{topic.name}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Definition</h2>
        <p className="text-gray-700 mb-4">{topic.definition}</p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Details</h2>
        <p className="text-gray-700 mb-4">{topic.details}</p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Example</h2>
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
          <code>{topic.example}</code>
        </pre>
      </div>
      <Link
        to={`/course/${id}`}
        className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Back to Course
      </Link>
    </div>
  );
}

export default TopicDetail;