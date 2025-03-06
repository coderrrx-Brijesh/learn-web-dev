const mongoose =require("mongoose");
const nodemailer= require("nodemailer")


const fileSchema = new mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }

})
  
fileSchema.post("save", async function (doc){
    try{
        //SHIFT THIS TO CONFIG
        let transporter= nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })
        let info = await transporter.sendMail({
            from:`Brijesh Singh`,
            to:doc.email,
            subject:"New Uploaded by You",
            html:`<h2>Hello Jee>/h2> <p>File Uploaded View Here: <a href="${doc.url}"> ${doc.url} </p>`
        })
        console.log("INFO: ",info);
    }
    catch(error){
        console.log(error)
        res.status(403).json({
            message:"Email Not able be being Send"
        })
    }
})

const fileModel= mongoose.model("fileModel", fileSchema);  //need to  understand these line
 module.exports= fileModel;