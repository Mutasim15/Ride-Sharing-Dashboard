import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./DriverSidebar.css";
import DriverSelfDashboard from "./Driver Dashboard/DriverselfDashboard";
import Reviews from "./Driver Dashboard/Reviews";

const DriverSidebar = ({ user, onLogout }) => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const navigate = useNavigate();

  // Define menu items for drivers
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "reviews", label: "Reviews" },
  ];

  // Handle logout functionality
  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Execute the sign-out logic
    }
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="driver-layout">
      {/* Mobile Header */}
      <div className="mobile-header">
        <MenuOutlined onClick={() => setIsDrawerVisible(true)} />
        <div className="header-title">Driver Panel</div>
      </div>

      {/* Sidebar for Desktop */}
      <div className="driver-sidebar">
        <div className="sidebar-header">Driver Panel</div>

         <div className="driver-sidebar-box">
         <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({ key }) => setSelectedKey(key)}
          />
         </div>
        
         <div className="logout-container">
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
         

      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Driver Panel"
        placement="left"
        closable
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
      >
        <Menu
          theme="light"
          mode="vertical"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={({ key }) => {
            setSelectedKey(key);
            setIsDrawerVisible(false); // Close the drawer after selection
          }}
        />
        <div className="logout-container">
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Drawer>

      {/* Main Content */}
      <div className="driver-content">
        {selectedKey === "dashboard" && <div> <DriverSelfDashboard></DriverSelfDashboard> </div>}
        {selectedKey === "reviews" && <div> <Reviews></Reviews> </div>}
      </div>
    </div>
  );
};

export default DriverSidebar;
