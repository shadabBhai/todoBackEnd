const Todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(500).json({
      success: true,
      data: todo,
      messaage: "Item updated successfully",
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      error: err.message,
    });
  }
};
