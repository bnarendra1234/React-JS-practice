import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  // Inline CSS styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    marginTop: "100px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="button" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;