const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authenticate = async (req, res, next) => {
  try {
    // Extract token from cookies, body, or header
    const token = req.cookies.token || req.body.token || (req.header("Authorization") && req.header("Authorization").replace("Bearer ", ""));

    if (!token) {
      return res.status(403).json({
        success: false,
        message: "Token missing",
      });
    }

    // Verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET); // Use secret from environment variables
      req.user = payload; // Attach user details to the request object for subsequent functions
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying the token",
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        message: "Only students are allowed here",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error while verifying student access",
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        message: "Only admins are allowed here",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error while verifying admin access",
    });
  }
};
