// // // const mongoose = require('mongoose');

// // // const progressSchema = new mongoose.Schema({
// // //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// // //   percentage: { type: Number, default: 0 },
// // //   calories: { type: String },
// // //   heartRate: { type: String },
// // //   steps: { type: String },
// // //   kcalBurn: { type: String },
// // //   habits: [String],
// // //   date: { type: Date, default: Date.now },
// // // });

// // // module.exports = mongoose.model('Progress', progressSchema);

// // const mongoose = require('mongoose');

// // const progressSchema = new mongoose.Schema({
// //   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// //   percentage: { type: Number, required: true },
// //   calories: { type: Number, required: true },
// //   heartRate: { type: Number, required: true },
// //   steps: { type: Number, required: true },
// //   kcalBurn: { type: Number, required: true },
// //   habits: { type: [String], default: [] },
// //   createdAt: { type: Date, default: Date.now }
// // });

// // module.exports = mongoose.model('Progress', progressSchema);

// const mongoose = require("mongoose");

// const progressSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   percentage: { type: Number, required: true },
//   calories: { type: Number, required: true },
//   heartRate: { type: Number, required: true },
//   steps: { type: Number, required: true },
//   kcalBurn: { type: Number, required: true },
//   habits: { type: [String], default: [] },
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Progress", progressSchema);
