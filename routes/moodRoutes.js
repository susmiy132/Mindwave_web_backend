// const express = require('express');
// const router = express.Router();

// const { recordMood, getMoods } = require('../controllers/moodController');
// const authMiddleware = require('../middlewares/authmiddleware'); // ✅ Correct import

// // Routes
// router.post('/', authMiddleware, recordMood);
// router.get('/', authMiddleware, getMoods);

// module.exports = router;


const express = require("express");
const router = express.Router();
const { createMood, getMoods } = require("../controllers/moodController");
// const authMiddleware = require("../middlewares/authmiddleware"); // Optional if user auth is needed

// router.post("/", /*authMiddleware,*/ createMood);
// router.get("/", /*authMiddleware,*/ getMoods);

module.exports = router;
