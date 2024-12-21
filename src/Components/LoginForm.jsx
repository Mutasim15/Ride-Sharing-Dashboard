import React, { useState } from "react";
import { Button, Input, Card } from "antd";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/bg.jpg";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // For simplicity, assuming admin@example.com/admin123 is Admin
    // and driver@example.com/driver123 is Driver
    if (email === "admin@example.com" && password === "admin123") {
      onLogin({ role: "admin", email });
      navigate("/admin");
    } else if (email === "driver@example.com" && password === "driver123") {
      onLogin({ role: "driver", email });
      navigate("/driver");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `
          linear-gradient(
            rgba(0, 0, 0, 0.5), 
            rgba(0, 0, 0, 0.5)
          ), 
          url(${backgroundImage}) no-repeat center/cover`,
        backgroundSize: "cover",
      }}
    >
      <Card style={{ width: 300, padding: 20 }}>
        <h2>Login</h2>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Button type="primary" block onClick={handleSubmit}>
          Login
        </Button>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          Don't have an account?{" "}
          <a onClick={() => navigate("/register")}>Register</a>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
