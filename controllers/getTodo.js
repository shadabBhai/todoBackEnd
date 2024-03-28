const Todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    const Todos = await Todo.find({});
    res.status(200).json({
      success: true,
      data: Todos,
      messsage: "All entries are  feteched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      sucess: false,
      error: err.messsage,
      data: "issue",
      message: "Internal Issue",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    res.status(200).json({
      success: true,
      data: todo,
      message: "Item found ",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "server Problem ",
    });
  }
};
