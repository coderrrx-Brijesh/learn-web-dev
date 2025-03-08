const mongoose=require("mongoose")

const postSchema = mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        reqiured:true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "comment"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "like"
    }]

})

module.exports=mongoose.model("Post",postSchema);