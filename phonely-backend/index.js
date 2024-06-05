const express = require("express");
const mongoose = require("mongoose");
const healthRoutes = require("./routes/healthRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Routes
app.use("/api/health", healthRoutes);

// Connect to MongoDB
connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
