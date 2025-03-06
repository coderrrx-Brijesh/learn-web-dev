const express = require("express")
const router = express.Router()

const {createUser,signin} =require("../controller/signController");
const {authenticate, isStudent, isAdmin}=require("../middlewares/auth");
const signModel = require("../models/signModel");


router.post("/sign/create", createUser);
router.get("/sign/signin",signin);

// protected routes
router.get("/student/",authenticate, isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for students"
    })
});
router.get("/admin/",authenticate, isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin"
    })
});

router.get("/getDetails/", authenticate, async (req, res) => {
    try {
      const id = req.user.id; // Use `id` from JWT payload
      const details = await signModel.findById(id); // Await the database query
  
      if (!details) {
        return res.status(404).json({
          success: false,
          message: "User details not found",
        });
      }
  
      console.log(details);
  
      return res.status(200).json({
        success: true,
        message: details,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Something went wrong",
        success: false,
      });
    }
  });
  


module.exports=router