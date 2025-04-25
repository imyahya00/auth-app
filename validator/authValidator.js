import {body} from 'express-validator'

const signupValidator = [
    body("username")
    .trim()
    .notEmpty().withMessage("Username is required")
    .isLength({min: 3}).withMessage("Username must be at least 3 characters long")
    .isLength({max: 20}).withMessage("Username must be less than 20 characters long"),

    body("email")
    .trim()
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(),

    body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({min: 8}).withMessage("Password must be at least 8 characters long")
    .isLength({max: 20}).withMessage("Password must be less than 20 characters long"),


    body("name")
    .trim()
    .notEmpty().withMessage("Name is required")
    .isLength({min: 3}).withMessage("Name must be at least 3 characters long")
    .isLength({max: 20}).withMessage("Name must be less than 20 characters long"),


]

export default signupValidator