const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  langid: { type: String, required: true }, 
  name: { type: String, required: true },
  topics: [
    {
      title: String,
      description: String,
      duration: String
    }
  ]
}, { timestamps: true });

const Topic = mongoose.model("Topic", topicSchema, "langtopics");

module.exports = Topic;
