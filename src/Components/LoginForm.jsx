import React, { useState } from "react";
import { Button, Input, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/bg.jpg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      if (user.role === "admin") {
        message.success("Welcome Admin!");
        navigate("/admindashboard");
      } else if (user.role === "driver") {
        message.success("Welcome Driver!");
        navigate("/driverdashboard");
      }
    } else {
      message.error("Invalid credentials. Please try again.");
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
      }}
    >
      <Card
        style={{
          width: 300,
          padding: 20,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
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
        <Button  className="btnregister" type="primary" block onClick={handleSubmit}>
          Login
        </Button>
        <div style={{ marginTop: 10, textAlign: "center" }}>
          Don't have an account?{" "}
          <Button  type="link"  className="register" onClick={() => navigate("/registration")}>
           Register
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginForm;
