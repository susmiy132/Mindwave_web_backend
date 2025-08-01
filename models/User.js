// // models/User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   profileImage: {
//     type: String,
//     default: "", // ✅ prevents error if not provided
//   },
// });

// const User = mongoose.model("User", userSchema);
// module.exports = User;

