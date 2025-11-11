
// import { useState, useEffect } from "react";
// import CourseCard from "../components/Course/CourseCard";
// import { useCourseContext } from "../Context/CoursesContext";

// function Courses() {
//   const { joinedCourses, handleJoinCourse } = useCourseContext();
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/courses");
//         if (!res.ok) throw new Error("Failed to load courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (err) {
//         console.error(err);
//         setError("Could not fetch courses. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-20">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-[#6366F1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-[#6B7280] text-lg font-medium">Loading courses...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-20">
//         <div className="text-center bg-white p-8 rounded-xl shadow-lg">
//           <div className="w-16 h-16 bg-[#EF4444]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <p className="text-[#EF4444] text-xl font-semibold">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] pt-20">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Explore Our Courses
//           </h1>
//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
//             Master new skills with our comprehensive course library
//           </p>
//         </div>
//       </div>

//       {/* Search & Courses Section */}
//       <div className="container mx-auto px-4 py-8 md:py-12">
//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto mb-12">
//           <div className="relative">
//             <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search for courses..."
//               className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition-colors text-[#111827] placeholder-[#9CA3AF] shadow-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           {searchTerm && (
//             <p className="mt-3 text-[#6B7280] text-sm">
//               Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} matching "{searchTerm}"
//             </p>
//           )}
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course) => (
//               <CourseCard
//                 key={course._id}
//                 id={course.id}
//                 title={course.title}
//                 description={course.description}
//                 image={course.image}
//                 isJoined={joinedCourses.includes(course.id)}
//                 handleJoinCourse={handleJoinCourse}
//               />
//             ))
//           ) : (
//             <div className="col-span-full">
//               <div className="bg-white rounded-xl shadow-md p-12 text-center">
//                 <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg className="w-10 h-10 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <p className="text-[#6B7280] text-xl mb-2">No courses found</p>
//                 <p className="text-[#9CA3AF]">Try adjusting your search terms</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Courses;






import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for redirect
import CourseCard from "../components/Course/CourseCard";
import { useCourseContext } from "../Context/CoursesContext";

function Courses() {
  const navigate = useNavigate();
  const { joinedCourses, handleJoinCourse } = useCourseContext();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Check if user is logged in via JWT token
  const token = localStorage.getItem("token");

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

  // In the component, update the handleProtectedJoin function:
  const handleProtectedJoin = async (courseId) => {
    if (!token) {
      alert("Please login to join this course");
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    try {
      const success = await handleJoinCourse(courseId);
      if (success) {
        toast.success("Successfully joined the course!");
      }
    } catch (error) {
      toast.error(error.message || "Failed to join course");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#6366F1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#6B7280] text-lg font-medium">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] pt-20">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-[#EF4444]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-[#EF4444] text-xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Master new skills with our comprehensive course library
          </p>
        </div>
      </div>

      {/* Search & Courses Section */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9CA3AF]"
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
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#6366F1] transition-colors text-[#111827] placeholder-[#9CA3AF] shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {searchTerm && (
            <p className="mt-3 text-[#6B7280] text-sm">
              Found {filteredCourses.length} course
              {filteredCourses.length !== 1 ? "s" : ""} matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard
                key={course._id}
                id={course._id}
                title={course.title}
                description={course.description}
                image={course.image}
                isJoined={joinedCourses.includes(course._id)}
                handleJoinCourse={handleProtectedJoin}
              />
            ))
          ) : (
            <div className="col-span-full">
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="w-20 h-20 bg-[#F3F4F6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#6B7280] text-xl mb-2">No courses found</p>
                <p className="text-[#9CA3AF]">Try adjusting your search terms</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
