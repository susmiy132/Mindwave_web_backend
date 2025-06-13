const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5050;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.send('Welcome to the MindWave backend API!');
// });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
