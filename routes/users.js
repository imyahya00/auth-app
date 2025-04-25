import express from "express";
import User from "../models/User.js";

const router = express.Router();


router.get('/getAllUsers', async(req, res) => {

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
