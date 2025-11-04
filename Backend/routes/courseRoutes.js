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
const { getCourses, getCourseById } = require("../controllers/courseController");

// GET all courses
router.get("/courses", getCourses);

// GET single course by ID
router.get("/courses/:id", getCourseById);

module.exports = router;
