const mongoose = require("mongoose");

const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
})

module.exports = mongoose.model("comment", commentSchema);