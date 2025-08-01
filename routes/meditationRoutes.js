const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authmiddleware");
const upload = require("../middlewares/uploadmiddleware");

const {
  createMeditation,
  getAllMeditations,
  getMeditationById,
  updateMeditation,
  deleteMeditation,
} = require("../controllers/meditationController");

// Create meditation (auth required, single image upload)
// router.post("/add", authMiddleware, upload.single("image"), createMeditation);
router.post("/", authMiddleware, upload.single("image"), createMeditation);

// Get all meditations (public)
router.get("/", getAllMeditations);

// // Get meditation by id (public)
// router.get("/:id", getMeditationById);

// // Update meditation (auth required, single image upload)
// router.put("/:id", authMiddleware, upload.single("image"), updateMeditation);

// // Delete meditation (auth required)
// router.delete("/:id", authMiddleware, deleteMeditation);

module.exports = router;
