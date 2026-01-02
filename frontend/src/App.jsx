import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/Todo";

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={token ? <Navigate to="/todos" /> : <Login />}
        />

        <Route
          path="/register"
          element={token ? <Navigate to="/todos" /> : <Register />}
        />

        <Route
          path="/todos"
          element={token ? <Todo /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
