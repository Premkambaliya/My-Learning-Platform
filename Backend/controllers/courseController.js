const Course = require("../models/Course");
const Topic = require("../models/Topics");

// GET all courses with topics
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    // Attach matching topics dynamically
    const coursesWithTopics = await Promise.all(
      courses.map(async (course) => {
        const topic = await Topic.findOne({ langid: course.id }); // match by langid
        return { ...course.toObject(), langtopics: topic || null };
      })
    );

    res.status(200).json(coursesWithTopics);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch courses", error: err.message });
  }
};

// GET single course with topics
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({ id: req.params.id });
    if (!course) return res.status(404).json({ message: "Course not found" });

    const topic = await Topic.findOne({ langid: course.id });
    res.status(200).json({ ...course.toObject(), langtopics: topic || null });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch course", error: err.message });
  }
};

module.exports = {
  getCourses,
  getCourseById
};
