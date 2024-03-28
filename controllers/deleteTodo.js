const Todo = require("../models/todo");

exports.deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      data: todo,
      message: "Item deleted successfully",
    });
  } catch (err) {
    res.stauts(500).json({
      success: false,
      Error: err.message,
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const todo = await Todo.deleteMany();

    res.status(200).json({
      success: true,
      data: todo,
      message: "Item deleted successfully",
    });
  } catch (err) {
    res.stauts(500).json({
      success: false,
      Error: err.message,
    });
  }
};
