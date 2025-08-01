const mongoose = require("mongoose");

const meditationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number }, // minutes
  image: { type: String }, // filename or URL
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, // reference to admin who created it
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Meditation", meditationSchema);
