import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Login successful!");
        // आप यहाँ redirect या token store भी कर सकते हो
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      setMessage("⚠️ Server error. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email">Email / Username:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="अपना ईमेल डालें"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="अपना पासवर्ड डालें"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
        Login
      </button>

      {message && (
        <p style={{ marginTop: "15px", textAlign: "center", color: "blue" }}>{message}</p>
      )}
    </form>
  );
};

export default Login;
