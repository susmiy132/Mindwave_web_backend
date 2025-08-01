// const Meditation = require("../models/Meditation");
// const path = require("path");
// const fs = require("fs");

// // Create a new meditation
// const createMeditation = async (req, res) => {
//   try {
//     const { title, description, duration } = req.body;
//     let image = null;

//     if (req.file) {
//       image = req.file.filename;
//     }

//     const meditation = new Meditation({
//       title,
//       description,
//       duration,
//       image,
//       createdBy: req.user.id, // assuming auth middleware sets req.user
//     });

//     await meditation.save();

//     res.status(201).json({ success: true, data: meditation });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Get all meditations
// const getAllMeditations = async (req, res) => {
//   try {
//     const meditations = await Meditation.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: meditations });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Get meditation by ID
// const getMeditationById = async (req, res) => {
//   try {
//     const meditation = await Meditation.findById(req.params.id);
//     if (!meditation) {
//       return res.status(404).json({ success: false, message: "Meditation not found" });
//     }
//     res.json({ success: true, data: meditation });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Update meditation by ID
// const updateMeditation = async (req, res) => {
//   try {
//     const { title, description, duration } = req.body;
//     const meditation = await Meditation.findById(req.params.id);

//     if (!meditation) {
//       return res.status(404).json({ success: false, message: "Meditation not found" });
//     }

//     if (req.file) {
//       // Delete old image if exists
//       if (meditation.image) {
//         const oldImagePath = path.join(__dirname, "../uploads/", meditation.image);
//         if (fs.existsSync(oldImagePath)) {
//           fs.unlinkSync(oldImagePath);
//         }
//       }
//       meditation.image = req.file.filename;
//     }

//     meditation.title = title || meditation.title;
//     meditation.description = description || meditation.description;
//     meditation.duration = duration || meditation.duration;

//     await meditation.save();

//     res.json({ success: true, data: meditation });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Delete meditation by ID
// const deleteMeditation = async (req, res) => {
//   try {
//     const meditation = await Meditation.findById(req.params.id);
//     if (!meditation) {
//       return res.status(404).json({ success: false, message: "Meditation not found" });
//     }

//     if (meditation.image) {
//       const imagePath = path.join(__dirname, "../uploads/", meditation.image);
//       if (fs.existsSync(imagePath)) {
//         fs.unlinkSync(imagePath);
//       }
//     }

//     await meditation.remove();

//     res.json({ success: true, message: "Meditation deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// module.exports = {
//   createMeditation,
//   getAllMeditations,
//   getMeditationById,
//   updateMeditation,
//   deleteMeditation,
// };



const Meditation = require("../models/Meditation");
const path = require("path");
const fs = require("fs");

// Create a new meditation
const createMeditation = async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    let image = null;

    if (req.file) {
      image = req.file.filename;
    }

    const meditation = new Meditation({
      title,
      description,
      duration,
      image,
      createdBy: req.user.id,
    });

    await meditation.save();

    res.status(201).json({
      success: true,
      data: {
        ...meditation._doc,
        image: image ? `${req.protocol}://${req.get("host")}/uploads/${image}` : null,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all meditations
const getAllMeditations = async (req, res) => {
  try {
    const meditations = await Meditation.find().sort({ createdAt: -1 });

    const updatedMeditations = meditations.map((med) => ({
      ...med._doc,
      image: med.image ? `${req.protocol}://${req.get("host")}/uploads/${med.image}` : null,
    }));

    res.json({ success: true, data: updatedMeditations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// // Get meditation by ID
// const getMeditationById = async (req, res) => {
//   try {
//     const meditation = await Meditation.findById(req.params.id);
//     if (!meditation) {
//       return res.status(404).json({ success: false, message: "Meditation not found" });
//     }

//     res.json({
//       success: true,
//       data: {
//         ...meditation._doc,
//         image: meditation.image ? `${req.protocol}://${req.get("host")}/uploads/${meditation.image}` : null,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Update meditation by ID
// const updateMeditation = async (req, res) => {
//   try {
//     const { title, description, duration } = req.body;
//     const meditation = await Meditation.findById(req.params.id);

//     if (!meditation) {
//       return res.status(404).json({ success: false, message: "Meditation not found" });
//     }

//     if (req.file) {
//       if (meditation.image) {
//         const oldImagePath = path.join(__dirname, "../uploads/", meditation.image);
//         if (fs.existsSync(oldImagePath)) {
//           fs.unlinkSync(oldImagePath);
//         }
//       }
//       meditation.image = req.file.filename;
//     }

//     meditation.title = title || meditation.title;
//     meditation.description = description || meditation.description;
//     meditation.duration = duration || meditation.duration;

//     await meditation.save();

//     res.json({
//       success: true,
//       data: {
//         ...meditation._doc,
//         image: meditation.image ? `${req.protocol}://${req.get("host")}/uploads/${meditation.image}` : null,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// // Delete meditation by ID
// const deleteMeditation = async (req, res) => {
//   try {
//     const meditation = await Meditation.findById(req.params.id);
//     if (!meditation) {
//       return res.status(404).json({ success: false, message: "Meditation not found" });
//     }

//      // Optionally check if user owns this meditation before deleting
//     if (meditation.user.toString() !== req.user.id) {
//       return res.status(403).json({ success: false, message: "Not authorized" });
//     }


//     if (meditation.image) {
//       const imagePath = path.join(__dirname, "../uploads/", meditation.image);
//       if (fs.existsSync(imagePath)) {
//         fs.unlinkSync(imagePath);
//       }
//     }

//     await meditation.remove();

//     res.status(200).json({ success: true, message: "Meditation deleted successfully" });
//     // res.json({ success: true, message: "Meditation deleted successfully" });
//   } catch (error) {
//     res.status(200).json({ success: true, message: "Meditation deleted successfully" });
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// module.exports = {
//   createMeditation,
//   getAllMeditations,
//   getMeditationById,
//   updateMeditation,
//   deleteMeditation,
// };

