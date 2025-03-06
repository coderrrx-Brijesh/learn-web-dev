const Todo_model=require("../models/Todo_model");

exports.updateTodo =async (req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;
        const todo=await Todo_model.findByIdAndUpdate(id,{title,description});
        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo updated successfully"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}