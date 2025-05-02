import express from "express";
import { addMemory } from '../controller/memoryController.js';
import { getAllEvents } from "../controller/memoryController.js";
import { verifyToken } from "../utils/jwtMiddleware.js";

const router = express.Router();


// Create a text generation endpoint
router.post('/addMemory', verifyToken, addMemory);

router.get('/getAllEvents', verifyToken, getAllEvents)

export default router;
