const express= require("express");
 const app=express();

 require("dotenv").config()
 const PORT =process.env.PORT || 3000;

 app.use(express.json())

const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'  // Temporary directory to store uploaded files
}));


const dbConnect= require("./config/database");
dbConnect();

const {cloudinaryConnect}=require("./config/cloudnary")
cloudinaryConnect();

const upload= require("./routes/uploadRoutes")
app.use('/api/v1/', upload);

app.listen(PORT,()=>{
    console.log(`App is succcessfull running on ${PORT}`);
})