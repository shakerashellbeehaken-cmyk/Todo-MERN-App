import axios from "axios";
import { useState } from "react";
import "../App.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5003/api/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successful. Please login.");
      window.location.href = "/login";
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <p>Fill the form below to register to todo app</p>

      <input
        placeholder="Your full name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Create a password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={register}>Register</button>

      <div className="link" onClick={() => (window.location.href = "/login")}>
        Already have an account? Login
      </div>
    </div>
  );
}
