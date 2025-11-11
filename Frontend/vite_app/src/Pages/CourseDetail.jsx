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
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#6366F1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6B7280] text-lg font-medium">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-[#EF4444]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-[#EF4444] text-xl font-semibold">{error || "Course not found!"}</p>
        </div>
      </div>
    );
  }

  const topics = course.langtopics?.topics || [];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/courses"
            className="inline-flex items-center text-[#6366F1] hover:text-[#4F46E5] transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
            <div className="md:w-3/5 p-6 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#6366F1]/10 text-[#6366F1] rounded-full text-sm font-semibold">
                  Course
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#111827]">
                {course.title}
              </h1>
              <p className="text-lg mb-4 text-[#6B7280] leading-relaxed">{course.description}</p>
              <p className="text-[#6B7280] leading-relaxed">{course.overview}</p>
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="mt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#111827] mb-2">Course Topics</h2>
            <p className="text-[#6B7280]">Explore the comprehensive curriculum</p>
          </div>
          
          {topics.length > 0 ? (
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div
                  key={topic._id || index}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#6366F1]/30"
                >
                  <div
                    className="flex justify-between items-center p-6 cursor-pointer group"
                    onClick={() => toggleTopic(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#6366F1]/10 rounded-lg flex items-center justify-center">
                        <span className="text-[#6366F1] font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#111827] group-hover:text-[#6366F1] transition-colors">
                        {topic.name}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg bg-[#F3F4F6] transition-all duration-300 ${expandedTopics[index] ? 'rotate-180 bg-[#6366F1]/10' : ''}`}>
                      <svg className={`w-5 h-5 ${expandedTopics[index] ? 'text-[#6366F1]' : 'text-[#6B7280]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {expandedTopics[index] && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-[#F9FAFB]/50">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-[#6366F1] mb-2">DEFINITION</p>
                          <p className="text-[#111827] leading-relaxed">{topic.definition}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#10B981] mb-2">DETAILS</p>
                          <p className="text-[#111827] leading-relaxed">{topic.details}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#F59E0B] mb-2">EXAMPLE</p>
                          <pre className="bg-[#111827] text-[#E5E7EB] p-4 rounded-lg text-sm overflow-x-auto border border-gray-700 font-mono leading-relaxed">
                            {topic.example}
                          </pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-[#6B7280] text-lg">No topics available for this course.</p>
            </div>
          )}
        </div>

        {/* Videos Section */}
        {course.playlistId && (
          <div className="mt-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#111827] mb-2">Course Videos</h2>
              <p className="text-[#6B7280]">Watch and learn at your own pace</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-5xl mx-auto">
              <iframe
                className="w-full aspect-video rounded-xl border-4 border-[#6366F1]/20"
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