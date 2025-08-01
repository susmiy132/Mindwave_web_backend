// // const Mood = require('../models/Mood');

// // // POST /api/moods
// // exports.recordMood = async (req, res) => {
// //   const { mood } = req.body;
// //   if (!mood) return res.status(400).json({ message: 'Mood is required' });

// //   try {
// //     const newMood = await Mood.create({
// //       userId: req.user._id,
// //       mood,
// //     });

// //     res.status(201).json(newMood);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // // GET /api/moods
// // exports.getMoods = async (req, res) => {
// //   try {
// //     const moods = await Mood.find({ userId: req.user._id }).sort({ date: -1 });
// //     res.json(moods);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };


// const Mood = require("../models/Mood");

// exports.createMood = async (req, res) => {
//   try {
//     const { mood } = req.body;
//     const newMood = new Mood({
//       mood,
//       user: req.user ? req.user.id : null,
//     });
//     await newMood.save();
//     res.status(201).json(newMood);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to save mood" });
//   }
// };

// exports.getMoods = async (req, res) => {
//   try {
//     const moods = await Mood.find({ user: req.user ? req.user.id : undefined }).sort({ createdAt: -1 });
//     res.status(200).json(moods);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to get moods" });
//   }
// };

