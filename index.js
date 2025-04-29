import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import geminiRoutes from "./routes/gemini.js"
import cors from 'cors'

const app = express();
app.use(express.json()); //middleware to parse json
app.use(cors());

console.log('Environment variables loaded: Index.JS', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    AI_KEY: process.env.GEMINI_API_KEY
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/gemini", geminiRoutes);

export default app;
