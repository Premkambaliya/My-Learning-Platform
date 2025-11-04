import { Link } from "react-router-dom";

function CourseCard({ id, title, description, image, isJoined, handleJoinCourse }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:border-[#6366F1]/30 transition-all duration-300 hover:-translate-y-2">
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Joined Badge */}
        {isJoined && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-[#10B981] text-white rounded-full text-sm font-semibold shadow-lg">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Joined
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-[#111827] line-clamp-2 group-hover:text-[#6366F1] transition-colors">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-[#6B7280] mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Join / Joined Button */}
          <button
            onClick={() => handleJoinCourse(id)}
            disabled={isJoined}
            className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isJoined
                ? "bg-[#10B981]/10 text-[#10B981] border-2 border-[#10B981]/20 cursor-default"
                : "bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-md hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            {isJoined ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Enrolled
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Join Course
              </>
            )}
          </button>

          {/* View Details Button */}
          <Link
            to={`/course/${id}`}
            className="flex-1 py-3 px-4 rounded-xl bg-white border-2 border-[#6366F1] text-[#6366F1] font-semibold text-center hover:bg-[#6366F1] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/link"
          >
            View Details
            <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#4F46E5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}

export default CourseCard;