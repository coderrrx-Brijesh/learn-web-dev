const Todo_model = require("../models/Todo_model");

// Define route handler for getting all todos
exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo_model.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: "Todos fetched successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message
        });
    }
};

// Define route handler for getting todo by ID
exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;  // Destructure the id from the request parameters
        const todo = await Todo_model.findById(id);  // Use the id directly in findById
        if (!todo) {
            return res.status(404).json({
                success: false,
                data: "No such Data Available",
                message: `Todo with id ${id} not found`
            });
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with id ${id} fetched successfully`
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            data: "No such Data Available",
            message: error.message
        });
    }
};

