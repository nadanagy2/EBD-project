import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [parentPhone, setParentPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !age || !parentPhone) {
      alert("Please fill all fields");
      return;
    }

    const newUser = {
      username,
      password,
      age: Number(age),
      Parent_phone: Number(parentPhone),
    };

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) throw new Error("Failed to register");

      alert("User registered successfully");
      navigate("/login"); // go to login page
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="Parent Phone"
          type="number"
          value={parentPhone}
          onChange={(e) => setParentPhone(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
