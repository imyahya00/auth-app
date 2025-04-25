import express from "express";
import User from "../models/User.js";
import { verifyToken } from "../utils/jwtMiddleware.js";

const router = express.Router();


router.get('/getAllUsers', verifyToken, async(req, res) => {

    try {
        const users = await User.find({}, '-password');
        res.status(200).json({
            statusCode: 200,
            message: "Users fetched successfully",
            data: users
        })
    } catch (err) {
        res.status(500).json({
            statusCode: 500,
            message: `Error getting all users ${err}`
        })
    }
})
export default router;
