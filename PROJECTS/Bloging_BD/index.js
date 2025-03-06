const express = require("express");
const app = express();
require('dotenv').config()
const PORT=process.env.PORT || 3000

app.use(express.json());

const blogRoute=require("./routes/blog_route");

app.use("/api/v1", blogRoute);

app.get("/",(req,res)=>{
    res.send('<h1>HOMEPAGE</h1>');
})

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT,(req,res)=>{
    console.log(`APPP IS STARTED AT ${PORT}`)
})