

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/meditations", require("./routes/meditationRoutes"));
app.use("/api/journals", require("./routes/journalingRoutes"));
app.use("/api/mood", require("./routes/moodRoutes")); // ✅ FIXED: was missing leading slash
app.use("/api/progress", require("./routes/progressRoute"));
app.use("/api/notices", require("./routes/noticeRoutes"));


app.get("/", (req, res) => {
  res.send("Welcome to the MindWave backend API!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export app for testing (don't start server here)
module.exports = app;

// Start server only if running this file directly
if (require.main === module) {
  connectDB()
    .then(() => {
      const PORT = process.env.PORT || 5050;
      app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
      });
    })
    .catch((err) => {
      console.error("Failed to connect to DB", err);
      process.exit(1);
    });
}