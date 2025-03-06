const bcrypt = require("bcrypt");
const signModel = require("../models/signModel");
const jwt = require("jsonwebtoken");
require("dotenv")

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const existingUser = await signModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10); 
            const newUser = new signModel({
                username,
                email,
                password: hashedPassword,
                role
            });

            const savedUser = await newUser.save(); // Await the save operation

            return res.status(201).json({
                success: true,
                message: "User created successfully",
                user: savedUser // Optionally return the saved user data
            });
        } catch (error) {
            return res.status(400).json({
                message: "Not able to hash"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};



exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please enter both email and password"
            });
        }

        // Look for the user by email
        let existingUser = await signModel.findOne({ email }); // Corrected to use the object syntax
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // Verify password and generate JWT token
        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordMatch) {
            return res.status(403).json({
                success: false,
                message: "Incorrect password"
            });
        }

        // Create the payload for JWT
        const payload = {
            email: existingUser.email,
            id: existingUser._id,
            role: existingUser.role
        };

        // Generate JWT token
        const token = jwt.sign(payload, "Brijesh Singh", { expiresIn: "2h" });

        existingUser=existingUser.toObject()
        existingUser.token = token; // This line may not be necessary if you don't want to save the token in the user document
        existingUser.password=undefined;
        // Set up cookies
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        };

        // Send response
        res.cookie("BrijeshCookie", token, options).status(200).json({
            success: true,
            existingUser,
            message: "User logged in successfully"
        });
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

