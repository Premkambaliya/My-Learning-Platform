// models/Course.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true },   // same as langid in Topic
  title: { type: String, required: true },
  description: String,
  image: String,
  overview: String,
  playlistId: String,
  langtopics: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic"   // name of Topic model
  }
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema, "Language_Info");

module.exports = Course;
