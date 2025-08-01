const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authmiddleware");
const upload = require("../middlewares/uploadmiddleware");

const {
  createJournal,
  getAllJournals,
  getJournalById,
  updateJournal,
  deleteJournal,
} = require("../controllers/journalingController");

// Create journal (auth required, optional image upload)
router.post("/", auth, upload.single("image"), createJournal);

// Get all journals (public)
router.get("/", auth, getAllJournals);

// Get journal by id (public)
router.get("/:id", getJournalById);

// Update journal (auth required, optional image upload)
router.put("/:id", auth, upload.single("image"), updateJournal);

// Delete journal (auth required)
router.delete("/:id", auth, deleteJournal);

module.exports = router;
