const postModel = require("../models/postModel");
const commentModel = require("../models/commentModel"); // Correct import for comment model

exports.createComment = async (req, res) => {
    try {
        const { comment, user, postId } = req.body;

        // Create a new comment
        const newComment = new commentModel({
            comment, 
            user, 
            postId
        });
        
        // Save the comment to the database
        const savedComment = await newComment.save();

        // Update the post's comments array
        const updatedPost = await postModel.findByIdAndUpdate(
            postId, 
            { $push: { comments: savedComment._id } }, 
            { new: true }
        )
        .populate("comments") // Populating comments with actual comment details
        .exec();
        
        // Send success response
        res.status(200).json({
            post: updatedPost
        });

    } catch (error) {
        // Send error response
        return res.status(404).json({
            error: "Error While Creating Comment"
        });
    }
};
