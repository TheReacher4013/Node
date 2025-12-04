const express = require('express');
const { addTodo, getAllTodos, getTodo, updateTodo, deleteTodo  } = require('../controllers/todo.controller');
const router = express.Router();

router.post("/add-todo", addTodo);
router.get("/all-todos", getAllTodos);
router.get("/:id", getTodo);
router.put("/:id",updateTodo);
router.delete("/:id", deleteTodo);


module.exports = router;
