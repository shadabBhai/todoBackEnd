const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteById, deleteAll } = require("../controllers/deleteTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/delete/:id", deleteById);
router.delete("/deleteAll", deleteAll);

module.exports = router;
