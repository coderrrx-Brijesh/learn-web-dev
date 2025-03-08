const express = require("express")
const router = express.Router()

// import controller
const {createComment} = require("../controllers/commentController");
const {createPost, getPosts, getPostById} = require("../controllers/postController");
const {createLike,unLike} = require("../controllers/likeController");


// mapping routes with controller
router.post("/comment/create",createComment);
router.post("/like/create",createLike);
router.delete("/like/unLike/:postId/:likeId",unLike);
router.post("/post/create",createPost);
router.get("/post/getPost",getPosts);
router.get("/post/getPost/:postId",getPostById);

module.exports= router