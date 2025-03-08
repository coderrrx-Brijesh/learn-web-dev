const { setErrorMap } = require("zod");
const postModel = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        const likes = [];
        const comments = [];
        const { user, title, content } = req.body;
        const newPost = new postModel({
            user, title, content,
            likes, comments
        });
        const savedPost = await newPost.save(); // Added 'await'
    
        res.status(200).json({
            post: savedPost
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

exports.getPosts = async (req, res) => { // Changed 'rew' to 'req'
    try {
        const posts = await postModel.find().populate("likes").populate("comments");
        res.status(200).json({
            message: posts
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.postId; // Correct usage of req.params
        const post = await postModel.findById(postId); // Pass only postId, not an object
        
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({
            message: post
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

