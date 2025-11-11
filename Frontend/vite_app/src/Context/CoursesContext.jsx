// import { createContext, useContext, useState, useEffect } from "react";

// const CourseContext = createContext();

// export function CourseProvider({ children }) {
//   const [joinedCourses, setJoinedCourses] = useState(() => {
//     // Load from local storage on initial render
//     const saved = localStorage.getItem("joinedCourses");
//     return saved ? JSON.parse(saved) : [];
//   });

//   // Save to local storage whenever joinedCourses changes
//   useEffect(() => {
//     localStorage.setItem("joinedCourses", JSON.stringify(joinedCourses));
//   }, [joinedCourses]);

//   const handleJoinCourse = (courseId) => {
//     if (!joinedCourses.includes(courseId)) {
//       setJoinedCourses([...joinedCourses, courseId]);
//       return true; // Success
//     }
//     return false; // Already joined
//   };

//   const handleRemoveCourse = (courseId) => {
//     if (joinedCourses.includes(courseId)) {
//       setJoinedCourses(joinedCourses.filter((id) => id !== courseId));
//       return true; // Success
//     }
//     return false; // Not joined
//   };

//   return (
//     <CourseContext.Provider value={{ joinedCourses, handleJoinCourse, handleRemoveCourse }}>
//       {children}
//     </CourseContext.Provider>
//   );
// }

// export function useCourseContext() {
//   const context = useContext(CourseContext);
//   if (!context) {
//     throw new Error("useCourseContext must be used within a CourseProvider");
//   }
//   return context;
// }



import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [joinedCourses, setJoinedCourses] = useState(() => {
    const saved = localStorage.getItem("joinedCourses");
    return saved ? JSON.parse(saved) : [];
  });
  // Full course objects for rendering Joined Courses page
  const [joinedCoursesData, setJoinedCoursesData] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchJoinedCourses = async () => {
      if (user) {
        try {
          const token = localStorage.getItem("token");
          const res = await fetch("http://localhost:5000/api/courses/user/joined", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.status === 401) {
            // Session invalid/expired
            localStorage.removeItem('token');
            logout?.();
            return;
          }

          if (res.ok) {
            const data = await res.json();
            const details = Array.isArray(data) ? data : [];
            setJoinedCoursesData(details);
            setJoinedCourses(details.map(course => course._id));
          }
        } catch (error) {
          console.error("Error fetching joined courses:", error);
        }
      } else {
        setJoinedCourses([]);
        setJoinedCoursesData([]);
      }
    };

    fetchJoinedCourses();
  }, [user]);

  // Save to local storage whenever joinedCourses changes
  useEffect(() => {
    localStorage.setItem("joinedCourses", JSON.stringify(joinedCourses));
  }, [joinedCourses]);

  const handleJoinCourse = async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Please log in to join this course");
    }

    try {
      const response = await fetch(`http://localhost:5000/api/courses/join/${courseId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          logout?.();
          throw new Error("Your session has expired. Please log in again.");
        }
        throw new Error(data.message || "Failed to join course");
      }

      // Refresh from server to keep IDs and details in sync
      await (async () => {
        try {
          const refetch = await fetch("http://localhost:5000/api/courses/user/joined", {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          if (refetch.ok) {
            const list = await refetch.json();
            setJoinedCoursesData(list);
            setJoinedCourses(list.map(c => c._id));
          }
        } catch {}
      })();
      return data;
    } catch (error) {
      console.error("Error joining course:", error);
      throw error;
    }
  };

  // ✅ Remove joined course (optional API sync)
  const handleRemoveCourse = async (courseId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Please login to remove this course");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/courses/leave/${courseId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        // Refresh from server to sync IDs and details
        try {
          const refetch = await fetch("http://localhost:5000/api/courses/user/joined", {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          });
          if (refetch.ok) {
            const list = await refetch.json();
            setJoinedCoursesData(list);
            setJoinedCourses(list.map(c => c._id));
          }
        } catch {}
        return true;
      } else {
        throw new Error(data.message || "Failed to leave course");
      }
    } catch (error) {
      console.error("Error leaving course:", error);
      throw error;
    }
  };

  return (
    <CourseContext.Provider value={{
      // IDs, useful for quick checks
      joinedCourses,
      // Full course objects for Joined Courses page
      joinedCoursesData,
      handleJoinCourse,
      handleRemoveCourse
    }}>
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