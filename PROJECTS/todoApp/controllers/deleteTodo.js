const Todo_model = require('../models/Todo_model');

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo_model.findById(id);
        if (!todo) {
            return res.status(404).json({
                success: false,
                data: "No such Data Available",
                message: `Todo with id ${id} not found`,
            });
        }
        await Todo_model.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with id ${id} deleted successfully`,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message,
        });
    }
}