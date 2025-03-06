const express = require("express");

const router= express.Router();

const{imageUpload, videoUpload, imageReducedUpload, localFileUpload}=require("../controllers/uploadController")

router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload", videoUpload);

module.exports=router;
