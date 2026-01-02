import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

const API_URL = "http://localhost:5003/api/todos";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Fetch todos
  const fetchTodos = async () => {
    const res = await axios.get(API_URL, { headers });
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add/update todo
  const handleSubmit = async () => {
    if (!title.trim()) return;

    if (editId) {
      await axios.put(
        `${API_URL}/${editId}`,
        { title },
        { headers }
      );
      setEditId(null);
    } else {
      await axios.post(
        API_URL,
        { title },
        { headers }
      );
    }

    setTitle("");
    fetchTodos();
  };

  //Edit todo
  const handleEdit = (todo) => {
    if (todo.completed) return;
    setEditId(todo._id);
    setTitle(todo.title);
  };

  //Delete todo
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`, { headers });
    fetchTodos();
  };

  //Toggle completed
  const toggleComplete = async (todo) => {
    await axios.put(
      `${API_URL}/${todo._id}`,
      { completed: !todo.completed },
      { headers }
    );
    fetchTodos();
  };

  //Logout
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="page-wrapper">
      {/* HEADER */}
      <header className="app-header">
        <div className="app-title">📑 My Todo App</div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </header>

      {/*main*/}
      <main className="app-container todo-content">
        {/*add/edit crad*/}
        <div className="card">
          <div className="card-header">
            <div className="card-icon blue">🖋</div>
            <div className="card-title">
              {editId ? "Edit Task" : "Add New Task"}
            </div>
          </div>

          <div className="add-input-row">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                editId
                  ? "Modify your task and click ✔"
                  : "Type a new task and press +"
              }
            />
            <button className="add-button" onClick={handleSubmit}>
              {editId ? "✔" : "+"}
            </button>
          </div>
        </div>

        {/*todo list*/}
        <div className="card todo-list">
          <div className="card-header">
            <div className="card-icon orange">📌</div>
            <div className="card-title">Your Tasks</div>
          </div>

          {todos.length === 0 && (
            <p className="empty-text">
              No tasks yet. Add one above ⬆️
            </p>
          )}

          {todos
            .sort((a, b) => a.completed - b.completed)
            .map((todo) => (
              <div className="todo-item" key={todo._id}>
                <div className="todo-left">
                  <div
                    className={`check-circle ${
                      todo.completed ? "done" : ""
                    }`}
                    onClick={() => toggleComplete(todo)}
                    title="Mark as completed"
                  >
                    {todo.completed ? "✅️" : "🔳"}
                  </div>

                  <span
                    className={`todo-text ${
                      todo.completed ? "completed" : ""
                    }`}
                  >
                    {todo.title}
                  </span>
                </div>

                <div className="todo-actions">
                  <button
                    className="edit"
                    disabled={todo.completed}
                    onClick={() => handleEdit(todo)}
                    title={
                      todo.completed
                        ? "Completed tasks cannot be edited"
                        : "Edit task"
                    }
                  >
                    ✍️
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(todo._id)}
                    title="Delete task"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
