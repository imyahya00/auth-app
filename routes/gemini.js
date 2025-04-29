import { GoogleGenAI } from "@google/genai";
import express from 'express';

const router = express.Router()

// Initialize Gemini
// const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//   });
  
const ai = new GoogleGenAI({
    apiKey: "AIzaSyCfVHW-OttAFm78u9HG3q7cXYW3NxSI3cU",
});  

// Create a text generation endpoint
router.post('/generate', async (req, res) => {
    try {
        const { prompt } = req.body

        if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required"
            })
        }


        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt});

        const text = response.text;

        res.status(200).json({
            success: true,
            response: text
        })

    } catch (error) {
        console.error('Gemini API Error:', error)
        res.status(500).json({
            success: false,
            message: "Error processing your request",
            error: error.message
        })
    }
})

export default router 