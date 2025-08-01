// const Journal = require("../models/journal");
// const path = require("path");
// const fs = require("fs");

// // Create a new journal entry
// const createJournal = async (req, res) => {
//   try {
//     const { title, content, mood } = req.body;

//     let image = null;
//     if (req.file) {
//       image = req.file.filename;
//     }

//     const journal = new Journal({
//       title,
//       content,
//       mood,
//       image,
//       createdBy: req.user.id, // assuming auth middleware sets req.user
//     });

//     await journal.save();

//     res.status(201).json({ success: true, data: journal });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Get all journal entries
// const getAllJournals = async (req, res) => {
//   try {
//     const journals = await Journal.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: journals });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Get a single journal by ID
// const getJournalById = async (req, res) => {
//   try {
//     const journal = await Journal.findById(req.params.id);
//     if (!journal) {
//       return res.status(404).json({ success: false, message: "Journal not found" });
//     }
//     res.json({ success: true, data: journal });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Update a journal entry
// const updateJournal = async (req, res) => {
//   try {
//     const { title, content, mood } = req.body;
//     const journal = await Journal.findById(req.params.id);

//     if (!journal) {
//       return res.status(404).json({ success: false, message: "Journal not found" });
//     }

//     if (req.file) {
//       if (journal.image) {
//         const oldPath = path.join(__dirname, "../uploads/", journal.image);
//         if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
//       }
//       journal.image = req.file.filename;
//     }

//     journal.title = title || journal.title;
//     journal.content = content || journal.content;
//     journal.mood = mood || journal.mood;

//     await journal.save();

//     res.json({ success: true, data: journal });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // Delete a journal entry
// const deleteJournal = async (req, res) => {
//   try {
//     const journal = await Journal.findById(req.params.id);
//     if (!journal) {
//       return res.status(404).json({ success: false, message: "Journal not found" });
//     }

//     if (journal.image) {
//       const imagePath = path.join(__dirname, "../uploads/", journal.image);
//       if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
//     }

//     await journal.remove();

//     res.json({ success: true, message: "Journal deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// module.exports = {
//   createJournal,
//   getAllJournals,
//   getJournalById,
//   updateJournal,
//   deleteJournal,
// };


const Journal = require("../models/Journal");
const path = require("path");
const fs = require("fs");

// Create a new journal entry
const createJournal = async (req, res) => {
  try {
    const { title, content, mood } = req.body;

    let image = null;
    if (req.file) {
      image = req.file.filename;
    }

    const journal = new Journal({
      title,
      content,
      mood,
      image,
      createdBy: req.user.id, // assuming auth middleware sets req.user
    });

    await journal.save();

    res.status(201).json({ success: true, data: journal });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all journal entries
// const getAllJournals = async (req, res) => {
//   try {
//     const journals = await Journal.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: journals });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

const getAllJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ createdBy: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ journals });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch journals" });
  }
};

// Get a single journal by ID
const getJournalById = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) {
      return res.status(404).json({ success: false, message: "Journal not found" });
    }
    res.json({ success: true, data: journal });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update a journal entry
const updateJournal = async (req, res) => {
  try {
    const { title, content, mood } = req.body;
    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      return res.status(404).json({ success: false, message: "Journal not found" });
    }

    // if (req.file) {
    //   if (journal.image) {
    //     const oldPath = path.join(__dirname, "../uploads/", journal.image);
    //     if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    //   }
    //   journal.image = req.file.filename;
    // }

    journal.title = title || journal.title;
    journal.content = content || journal.content;
    journal.mood = mood || journal.mood;

    await journal.save();

    res.json({ success: true, data: journal });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// // Delete a journal entry
// const deleteJournal = async (req, res) => {
//   try {
//     const journal = await Journal.findById(req.params.id);
//     if (!journal) {
//       return res.status(404).json({ success: false, message: "Journal not found" });
//     }

//     // Delete the associated image if exists
//     if (journal.image) {
//       const imagePath = path.join(__dirname, "../uploads/", journal.image);
//       if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
//     }

//     // Use findByIdAndDelete instead of journal.remove()
//     await Journal.findByIdAndDelete(req.params.id);

//     res.json({ success: true, message: "Journal deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

module.exports = {
  createJournal,
  getAllJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
};

