// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // POST /api/register
// router.post('/register', authController.register);

// // POST /api/login
// router.post('/login', authController.login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', authController.register);

// POST /api/auth/login
router.post('/login', authController.login);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const authController = require("../controllers/authController");
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Register
// router.post('/register', async (req, res) => {
//   console.log('Request body:', req.body);
//   const { fullName, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ fullName, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Register error:', err.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(404).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (err) {
//     console.error('Login error:', err.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;
