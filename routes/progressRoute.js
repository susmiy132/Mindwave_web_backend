// const express = require('express');
// const router = express.Router();
// const { addProgress, getProgress } = require('../controllers/progressController');
// const authMiddleware = require('../middlewares/authmiddleware');

// router.post('/', authMiddleware, addProgress);
// router.get('/', authMiddleware, getProgress);

// module.exports = router;


const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authmiddleware");
const { addProgress, getProgress } = require("../controllers/progressController");

router.post("/", authMiddleware, addProgress);
router.get("/", authMiddleware, getProgress);

module.exports = router;
