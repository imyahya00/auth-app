import dotenv from 'dotenv'
dotenv.config();

console.log('Environment variables loaded Server.JS:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    AI_KEY: process.env.GEMINI_API_KEY
});

import app from './index.js'
import connectDB from './config/db.js'

connectDB()

//SERVER create
const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0' ,() => {
    console.log("server has started")
})