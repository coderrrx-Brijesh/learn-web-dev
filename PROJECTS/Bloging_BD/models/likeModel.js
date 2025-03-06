const mongoose = require("mongoose")

const likeSchema= new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
})

module.exports= mongoose.model("like",likeSchema);