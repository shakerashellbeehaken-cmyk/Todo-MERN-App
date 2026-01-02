import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("❌MongoDB connection error:", err.message);
    process.exit(1);
  });


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
