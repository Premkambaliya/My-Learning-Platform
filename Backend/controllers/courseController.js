// const Course = require("../models/Course");
// const Topic = require("../models/Topics");

// // GET all courses with topics
// const getCourses = async (req, res) => {
//   try {
//     const courses = await Course.find();

//     // Attach matching topics dynamically
//     const coursesWithTopics = await Promise.all(
//       courses.map(async (course) => {
//         const topic = await Topic.findOne({ langid: course.id }); // match by langid
//         return { ...course.toObject(), langtopics: topic || null };
//       })
//     );

//     res.status(200).json(coursesWithTopics);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch courses", error: err.message });
//   }
// };

// // GET single course with topics
// const getCourseById = async (req, res) => {
//   try {
//     const course = await Course.findOne({ id: req.params.id });
//     if (!course) return res.status(404).json({ message: "Course not found" });

//     const topic = await Topic.findOne({ langid: course.id });
//     res.status(200).json({ ...course.toObject(), langtopics: topic || null });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch course", error: err.message });
//   }
// };

// module.exports = {
//   getCourses,
//   getCourseById
// };



// controllers/courseController.js
const Course = require("../models/Course");
const Topic = require("../models/Topics");
const User = require("../models/User");

// GET all courses with topics
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    const coursesWithTopics = await Promise.all(
      courses.map(async (course) => {
        const topic = await Topic.findOne({ langid: course.id });
        return { ...course.toObject(), langtopics: topic || null };
      })
    );

    res.status(200).json(coursesWithTopics);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch courses", error: err.message });
  }
};

// GET single course with topics
exports.getCourseById = async (req, res) => {
  try {
    let course;

    // Try to find by MongoDB _id first (frontend sends _id in links)
    try {
      course = await Course.findById(req.params.id);
    } catch (err) {
      // ignore cast errors and fallback to custom id field
      course = null;
    }

    // If not found by _id, try custom `id` field
    if (!course) {
      course = await Course.findOne({ id: req.params.id });
    }

    if (!course) return res.status(404).json({ message: "Course not found" });

    const topic = await Topic.findOne({ langid: course.id });
    res.status(200).json({ ...course.toObject(), langtopics: topic || null });
  } catch (err) {
    console.error("Error fetching course:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch course", error: err.message });
  }
};
// Join a course
exports.joinCourse = async (req, res) => {
  console.log('Join course request received. User ID:', req.user?.id);
  
  try {
    if (!req.user?.id) {
      console.error('No user ID in request');
      return res.status(401).json({ 
        success: false,
        message: 'Authentication required' 
      });
    }

    // Try to find course by ID first
    let course;
    try {
      // First try to find by MongoDB _id
      course = await Course.findById(req.params.id);
      
      // If not found by _id, try finding by the custom id field
      if (!course) {
        console.log('Course not found by _id, trying with custom id field');
        course = await Course.findOne({ id: req.params.id });
      }
    } catch (error) {
      console.error('Error finding course:', error);
      // If it's an ObjectId cast error, try finding by id field
      if (error.name === 'CastError') {
        console.log('Cast error, trying with custom id field');
        course = await Course.findOne({ id: req.params.id });
      } else {
        throw error;
      }
    }
    
    if (!course) {
      console.error('Course not found with ID:', req.params.id);
      return res.status(404).json({ 
        success: false,
        message: "Course not found" 
      });
    }

    console.log('Found course:', course._id);
    
    // Find user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      console.error('User not found with ID:', req.user.id);
      return res.status(404).json({ 
        success: false,
        message: "User not found. Please log in again." 
      });
    }
    
    // Check if already joined
    const isAlreadyJoined = user.joinedCourses.some(courseId => 
      courseId.toString() === course._id.toString()
    );
    
    if (isAlreadyJoined) {
      return res.status(400).json({ 
        success: false,
        message: "Already joined this course" 
      });
    }

    // Add course to user's joinedCourses
    user.joinedCourses.push(course._id);
    await user.save();

    res.status(200).json({ 
      success: true,
      message: "Successfully joined the course",
      courseId: course._id 
    });
  } catch (error) {
    console.error("Error joining course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Leave a course
exports.leaveCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const user = await User.findById(req.user.id);
    
    // Check if course is in joinedCourses
    const courseIndex = user.joinedCourses.indexOf(course._id);
    if (courseIndex === -1) {
      return res.status(400).json({ message: "Not joined this course" });
    }

    // Remove course from user's joinedCourses
    user.joinedCourses.splice(courseIndex, 1);
    await user.save();

    res.status(200).json({ 
      message: "Successfully left the course",
      courseId: course._id 
    });
  } catch (error) {
    console.error("Error leaving course:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get user's joined courses
exports.getJoinedCourses = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate({
        path: 'joinedCourses',
        // Include the fields actually present on Course documents: image and playlistId
        select: 'id title description image playlistId'
      });
      
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.status(200).json(user.joinedCourses || []);
  } catch (error) {
    console.error("Error fetching joined courses:", error);
    res.status(500).json({ 
      success: false,
      message: "Failed to fetch joined courses",
      error: error.message 
    });
  }
};
// All functions are exported directly using exports.functionName
