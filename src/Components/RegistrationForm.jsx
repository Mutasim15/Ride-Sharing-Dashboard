import React, { useState } from "react";
import { Button, Input, Select, Card } from "antd";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/bg.jpg"; // Adjust the path as per your project structure

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  // Provide a default function if onRegister is not passed
  const handleRegister = onRegister || ((userData) => console.log("User registered:", userData));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ name, email, password, role });

    // Conditional navigation based on role
    if (role === "admin") {
        <div>Successfully Registered</div>
      navigate("/");
    } else if (role === "driver") {
      navigate("/");
    } else {
      alert("Please select a role");
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
         <label htmlFor="name" className="block mb-1">Name</label>
        <Input className="space-y-4"
          id="name"
          type="text"
        //   placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: 10 }}
          required
        />
          <label htmlFor="name" className="block mb-1">Email</label>
        <Input
          id="email"
          type="email"
        //   placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 10 }}
          required
        />
        <label htmlFor="name" className="block mb-1">Password</label>
        <Input.Password
        //   placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 10 }}
          required
        />
          <label htmlFor="name" className="block mb-1">Action</label>
        <Select
          placeholder="Select Role"
          value={role}
          onChange={(value) => setRole(value)}
          style={{ width: "100%", marginBottom: 10 }}
        >
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="driver">Driver</Select.Option>
        </Select>
        <Button type="primary" block onClick={handleSubmit}>
          Register
        </Button>
      </Card>
    </div>
  );
};

export default RegistrationForm;
