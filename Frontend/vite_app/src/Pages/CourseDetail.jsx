import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const toggleTopic = (index) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading course details...
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        {error || "Course not found!"}
      </div>
    );
  }

  const topics = course.langtopics?.topics || [];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Back Link */}
      <div className="p-4">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>

      {/* Course Header */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full md:w-1/3 rounded-lg shadow-md"
          />
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {course.title}
            </h1>
            <p className="text-lg mb-4 text-gray-700">{course.description}</p>
            <p className="text-gray-600">{course.overview}</p>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Course Topics
          </h2>
          {topics.length > 0 ? (
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div
                  key={topic._id || index}
                  className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition-colors"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleTopic(index)}
                  >
                    <h3 className="text-lg font-medium text-blue-600">
                      {topic.name}
                    </h3>
                    <span className="text-gray-600">
                      {expandedTopics[index] ? "▲" : "▼"}
                    </span>
                  </div>

                  {expandedTopics[index] && (
                    <div className="mt-4 text-gray-700">
                      <p>
                        <strong>Definition:</strong> {topic.definition}
                      </p>
                      <p className="mt-2">
                        <strong>Details:</strong> {topic.details}
                      </p>
                      <p className="mt-2">
                        <strong>Example:</strong>
                      </p>
                      <pre className="bg-gray-100 p-4 rounded-md mt-2 text-sm overflow-x-auto border border-gray-300">
                        {topic.example}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No topics available for this course.</p>
          )}
        </div>

        {/* Videos Section */}
        {course.playlistId && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Course Videos
            </h2>
            <div className="bg-white p-4 rounded-lg shadow max-w-3xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-md border-2 border-blue-500"
                src={`https://www.youtube.com/embed/videoseries?list=${course.playlistId}`}
                title={`${course.title} YouTube Playlist`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetail;
