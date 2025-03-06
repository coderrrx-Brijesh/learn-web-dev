const express=require("express")
const mongoose= require("mongoose")
const zod = require("zod")
const app=express()
mongoose.connect("mongodb+srv://coderrrx:Passit%401234@learningserver.mu9jzil.mongodb.net/Learning_MongoBD")
app.use(express.json())
const User=mongoose.model('Users',{name:String,email:String,password:String})
app.post("/signup", async function(req,res){
    const username=req.body.username;
    const user_email=req.body.user_email;
    const password=req.body.password;
    const userexist=await User.findOne({email:user_email})
    if(userexist){
        return res.status(400).send("User already exist")
    }
    const user_1=new User({
        name:"anonymous",
        email:"anonymous@gmail.com",
        password:"12345"
    })
    
    user_1.save()
    res.json({
        "msg":"User created Successfully"
    })
})

app.listen(3000)
