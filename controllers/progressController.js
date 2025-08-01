// // const Progress = require('../models/progressBar');

// // exports.addProgress = async (req, res) => {
// //   try {
// //     const {
// //       percentage, calories, heartRate, steps, kcalBurn, habits
// //     } = req.body;

// //     const progress = new Progress({
// //       userId: req.user._id,
// //       percentage,
// //       calories,
// //       heartRate,
// //       steps,
// //       kcalBurn,
// //       habits,
// //     });

// //     const saved = await progress.save();
// //     res.status(201).json(saved);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };

// // exports.getProgress = async (req, res) => {
// //   try {
// //     const entries = await Progress.find({ userId: req.user._id }).sort({ date: -1 });
// //     res.json(entries);
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // };


// const Progress = require('../models/progressBar');
// const Journal = require("../models/journal");
// const Meditation = require('../models/Meditation');
// const Mood = require('../models/Mood');

// // ADD new progress entry
// exports.addProgress = async (req, res) => {
//   try {
//     const {
//       percentage,
//       calories,
//       heartRate,
//       steps,
//       kcalBurn,
//       habits,
//     } = req.body;

//     const progress = new Progress({
//       userId: req.user._id,
//       percentage,
//       calories,
//       heartRate,
//       steps,
//       kcalBurn,
//       habits,
//     });

//     const saved = await progress.save();
//     res.status(201).json(saved);
//   } catch (err) {
//   //   res.status(500).json({ message: err.message });
//   // }

//   if (err.name === "ValidationError") {
//       return res.status(400).json({ message: err.message });
//     }
//     res.status(500).json({ message: err.message });
//   }
// };

// // GET progress with Journals, Meditations, and Moods
// exports.getProgress = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     // Optional: Handle date range filtering
//     const { startDate, endDate } = req.query;
//     const dateFilter = {};

//     if (startDate && endDate) {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       dateFilter.createdAt = { $gte: start, $lte: end };
//     }

//     const [progress, journals, meditations, moods] = await Promise.all([
//       Progress.find({ userId }).sort({ createdAt: -1 }),
//       Journal.find({ userId, ...dateFilter }).sort({ createdAt: -1 }),
//       Meditation.find({ userId, ...dateFilter }).sort({ createdAt: -1 }),
//       Mood.find({ userId, ...dateFilter }).sort({ createdAt: -1 }),
//     ]);

//     res.json({
//       progress,
//       journals,
//       meditations,
//       moods,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

const Progress = require("../models/progressBar");
const Journal = require("../models/Journal");
const Meditation = require("../models/Meditation");
const Mood = require("../models/Mood");

// Add a new progress entry
exports.addProgress = async (req, res) => {
  try {
    const { percentage, calories, heartRate, steps, kcalBurn, habits } = req.body;

    const progress = new Progress({
      userId: req.user._id,
      percentage,
      calories,
      heartRate,
      steps,
      kcalBurn,
      habits,
    });

    const saved = await progress.save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: err.message });
  }
};

// // Get progress along with Journals, Meditations, and Moods
// exports.getProgress = async (req, res) => {
//   try {
//     const userId = req.user._id;

//     // Optional date range filter
//     const { startDate, endDate } = req.query;
//     const dateFilter = {};

//     if (startDate && endDate) {
//       const start = new Date(startDate);
//       const end = new Date(endDate);
//       dateFilter.createdAt = { $gte: start, $lte: end };
//     }

//     const [progress, journals, meditations, moods] = await Promise.all([
//       Progress.find({ userId }).sort({ createdAt: -1 }),
//       Journal.find({ userId, ...dateFilter }).sort({ createdAt: -1 }),
//       Meditation.find({ userId, ...dateFilter }).sort({ createdAt: -1 }),
//       Mood.find({ userId, ...dateFilter }).sort({ createdAt: -1 }),
//     ]);

//     res.json({ progress, journals, meditations, moods });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
