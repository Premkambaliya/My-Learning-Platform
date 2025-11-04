// // export default Courses;
// import { useState } from "react";
// import CourseCard from "../components/CourseCard";
// import { useCourseContext } from "../Context/CoursesContext";

// // Dummy data (API se replace hoga)
// const courses = [
//   { id: 1, title: "Python Programming", description: "Learn Python with free videos and quizzes.", image: "https://via.placeholder.com/150?text=Python" },
//   { id: 2, title: "Java Programming", description: "Master Java with hands-on tutorials.", image: "https://via.placeholder.com/150?text=Java" },
//   { id: 3, title: "JavaScript Essentials", description: "Build dynamic websites with JavaScript.", image: "https://via.placeholder.com/150?text=JavaScript" },
//   { id: 4, title: "CSS Styling", description: "Create stunning layouts with CSS.", image: "https://via.placeholder.com/150?text=CSS" },
//   { id: 5, title: "C++ Programming", description: "Dive into C++ for high-performance applications.", image: "https://via.placeholder.com/150?text=C++" },
//   { id: 6, title: "C Programming", description: "Learn the fundamentals of C programming.", image: "https://via.placeholder.com/150?text=C" },
//   { id: 7, title: "HTML Basics", description: "Build web pages with HTML from scratch.", image: "https://via.placeholder.com/150?text=HTML" },
//   { id: 8, title: "Node.js Development", description: "Create scalable backend apps with Node.js.", image: "https://via.placeholder.com/150?text=Node.js" },
//   { id: 9, title: "MongoDB Database", description: "Master NoSQL databases with MongoDB.", image: "https://via.placeholder.com/150?text=MongoDB" },
//   { id: 10, title: "Redis for Caching", description: "Boost app performance with Redis caching.", image: "https://via.placeholder.com/150?text=Redis" },
//   { id: 11, title: "Redux State Management", description: "Manage complex app states with Redux.", image: "https://via.placeholder.com/150?text=Redux" },
//   { id: 12, title: "React Framework", description: "Build modern UIs with React.", image: "https://via.placeholder.com/150?text=React" },
//   { id: 13, title: "Angular Framework", description: "Develop robust apps with Angular.", image: "https://via.placeholder.com/150?text=Angular" },
//   { id: 14, title: "TypeScript Programming", description: "Enhance JavaScript with TypeScript’s type safety.", image: "https://via.placeholder.com/150?text=TypeScript" },
//   { id: 15, title: "Tailwind CSS Styling", description: "Style apps efficiently with Tailwind CSS.", image: "https://via.placeholder.com/150?text=TailwindCSS" },
// ];

// function Courses() {
//   const { joinedCourses, handleJoinCourse } = useCourseContext();
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-20 animate-fade-in mt-10">
//       <h1 className="text-3xl font-bold mb-4 text-center">Explore Our Courses</h1>
//       <input
//         type="text"
//         placeholder="Search courses..."
//         className="w-full p-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map((course) => (
//             <CourseCard
//               key={course.id}
//               id={course.id}
//               title={course.title}
//               description={course.description}
//               image={course.image}
//               isJoined={joinedCourses.includes(course.id)}
//               handleJoinCourse={handleJoinCourse}
//             />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No courses found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Courses;

import { useState } from "react";
import CourseCard from "../components/Course/CourseCard";
import { useCourseContext } from "../Context/CoursesContext";

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
    title: "React ",
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

function Courses() {
  const { joinedCourses, handleJoinCourse } = useCourseContext();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-20 animate-fade-in mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Explore Our Courses</h1>
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
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
              isJoined={joinedCourses.includes(course.id)}
              handleJoinCourse={handleJoinCourse}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No courses found</p>
        )}
      </div>
    </div>
  );
}

export default Courses;