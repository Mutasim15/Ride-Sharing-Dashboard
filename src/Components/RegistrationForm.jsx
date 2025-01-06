import React, { useState } from "react";
import { Button, Input, Select, Card, message } from "antd";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/bg.jpg";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !role) {
      message.error("All fields are required!");
      return;
    }

    // Save the user data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    message.success("Registration successful!");
    navigate("/adminlogin");
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
        <h2>Register</h2>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: 10 }}
        />
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
        <Select
          placeholder="Select Role"
          value={role}
          onChange={(value) => setRole(value)}
          style={{ width: "100%", marginBottom: 10 }}
        >
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="driver">Driver</Select.Option>
        </Select>
        <Button   className="btnregister" type="primary" block onClick={handleSubmit}>
          Register
        </Button>
      </Card>
    </div>
  );
};

export default RegistrationForm;
