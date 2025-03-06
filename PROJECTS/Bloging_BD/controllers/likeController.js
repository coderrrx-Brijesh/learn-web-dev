const likeModel = require("../models/likeModel");
const postModel= require("../models/postModel");

exports.createLike= async (req,res)=>{
    try{
        const{user, postId}=req.body;
        const newLike =new likeModel({
            user,
            postId
        })
        savedLike= await newLike.save();

        const updatesPost= await postModel.findByIdAndUpdate(postId,{
            $push:{likes:savedLike._id}
        })
        res.status(200).json({
            post:updatesPost
        });
    }
    catch(error){
        console.log(error);
        return res.status(404).json({
            error:"Error While liking the post"
        })
    }
}
exports.unLike= async (req,res)=>{
    try{
        const postId=req.params.postId;
        const likeId=req.params.likeId;
        const deletedLike=await likeModel.findOneAndDelete(likeId)
        const updatesPost= await postModel.findByIdAndUpdate(postId,{
            $pull:{likes:deletedLike._id}
        },{new:true})
        res.status(200).json({
            post:updatesPost
        });
    }
    catch(error){
        console.log(error);
        return res.status(404).json({
            error:"Error While unliking the post"
        })
    }
}