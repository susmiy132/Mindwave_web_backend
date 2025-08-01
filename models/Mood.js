// // const mongoose = require('mongoose');

// // const moodSchema = new mongoose.Schema({
// //   userId: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: 'User',
// //     required: true,
// //   },
// //   mood: {
// //     type: String,
// //     required: true,
// //   },
// //   date: {
// //     type: Date,
// //     default: Date.now,
// //   },
// // });

// // module.exports = mongoose.model('Mood', moodSchema);


// const mongoose = require("mongoose");

// const moodSchema = new mongoose.Schema({
//   mood: {
//     type: String,
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User", // Assuming authentication
//     required: false,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("Mood", moodSchema);
