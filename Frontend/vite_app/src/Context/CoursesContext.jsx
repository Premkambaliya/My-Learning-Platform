import { createContext, useContext, useState, useEffect } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [joinedCourses, setJoinedCourses] = useState(() => {
    // Load from local storage on initial render
    const saved = localStorage.getItem("joinedCourses");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to local storage whenever joinedCourses changes
  useEffect(() => {
    localStorage.setItem("joinedCourses", JSON.stringify(joinedCourses));
  }, [joinedCourses]);

  const handleJoinCourse = (courseId) => {
    if (!joinedCourses.includes(courseId)) {
      setJoinedCourses([...joinedCourses, courseId]);
      return true; // Success
    }
    return false; // Already joined
  };

  const handleRemoveCourse = (courseId) => {
    if (joinedCourses.includes(courseId)) {
      setJoinedCourses(joinedCourses.filter((id) => id !== courseId));
      return true; // Success
    }
    return false; // Not joined
  };

  return (
    <CourseContext.Provider value={{ joinedCourses, handleJoinCourse, handleRemoveCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourseContext() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourseContext must be used within a CourseProvider");
  }
  return context;
}