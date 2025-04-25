import express from "express";
import User from "../models/User.js";
import { validationResult } from "express-validator";
import signupValidator from "../validator/authValidator.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../utils/jwt.js";

const router = express.Router();

router.post("/signup", signupValidator, async (req, res) => {

  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    return res.status(400).json({
      statusCode: 400,
      message: errors.array()[0].msg,
    });
  }

  const { name, email, password, username } = req.body;
  
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    return res.status(400).json({
      statusCode: 400,
      message: "Email or Username already in use",
    });
  }


  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password: hashedPassword, username });
    console.log(hashedPassword)
    await newUser.save();

    const token = generateToken(user._id);

    res.status(201).json({
        statusCode: 200,
        message: "User registered successfully",
        user: newUser,
        token: token
      });
  } catch (err) {
    res.status(500).send(`Error registering user ${err}`);
  }
});

//login logic 
router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return res
        .status(400)
        .json({ statusCode: 400, message: "User not found" });
    }

    const matchedPass = await bcrypt.compare(password, user.password)
    if (!matchedPass) {
      return res
        .status(400)
        .json({ statusCode: 400, message: "Invalid password" });
    }
    const token = generateToken(user._id);

    res.status(200).json({
      statusCode: 200,
      message: "User logged in successfully",
      user: user,
      token: token
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: `Error logging in ${err}`
    });
  }
});

export default router;
