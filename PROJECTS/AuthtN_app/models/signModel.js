const mongoose= require("mongoose")

const signModel= mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Admin","Student","Visitor"]
    }

});

module.exports =mongoose.model("signModel", signModel);