// const express = require("express");
// const router = express.Router();
// const { getCourses, getCourseById } = require("../controllers/courseController");

// // GET all courses
// router.get("/course", getCourses);

// // GET single course by id
// router.get("/course/:id", getCourseById);

// module.exports = router;


// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const { 
  getCourses, 
  getCourseById,
  joinCourse,
  leaveCourse,
  getJoinedCourses
} = require("../controllers/courseController");
const auth = require("../middleware/auth");

// Public routes
router.get("/", getCourses);

// Protected routes (apply auth per-route)
router.get("/user/joined", auth, getJoinedCourses);
router.post("/join/:id", auth, joinCourse);
router.delete("/leave/:id", auth, leaveCourse);

// Keep this LAST to avoid catching '/user/joined'
router.get("/:id", getCourseById);

module.exports = router;