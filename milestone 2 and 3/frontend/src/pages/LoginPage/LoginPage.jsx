import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/users");
      const users = await res.json();

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        alert("Wrong username or password");
        return;
      }

      alert("Login successful");
      navigate("/"); // home or dashboard
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;