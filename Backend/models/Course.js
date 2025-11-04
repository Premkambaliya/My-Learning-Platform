// // models/Course.js
// const mongoose = require("mongoose");

// const courseSchema = new mongoose.Schema({
//   id: { type: String, required: true },   // same as langid in Topic
//   title: { type: String, required: true },
//   description: String,
//   image: String,
//   overview: String,
//   playlistId: String,
//   langtopics: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Topic"   // name of Topic model
//   }
// }, { timestamps: true });

// const Course = mongoose.model("Course", courseSchema, "Language_Info");

// module.exports = Course;


// models/Course.js
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true }, // unique course id
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String }, // image URL
    overview: { type: String },
    playlistId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema, "Language_Info");
