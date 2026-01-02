import axios from "axios";
import { useState } from "react";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5003/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      window.location.href = "/todos";
    } catch {
      alert("Wrong email or password");
    }
  };

  return (
      <div className="auth-container">
          
      <h2>Login</h2>
      <p>Please login to access your todo list</p>

      <input
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <div className="link" onClick={() => (window.location.href = "/register")}>
        New user? Create an account
      </div>
    </div>
  );
}
