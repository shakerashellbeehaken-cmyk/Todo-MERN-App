import Todo from "../models/Todo.js";

// GET all todo
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

// CREATE todo
export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      userId: req.userId,
    });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

// UPDATE todo (title / completed)
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Failed to update/mark todo" });
  }
};

// DELETE todo
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    res.json({ message: " Task Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
