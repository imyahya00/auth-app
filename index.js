import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cors from 'cors'

const app = express();
app.use(express.json()); //middleware to parse json
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
