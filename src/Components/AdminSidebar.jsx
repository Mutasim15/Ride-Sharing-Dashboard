import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";
import Dashboard from "./Admin Dashboard/Dasboard";
import DriverManagement from "./Admin Dashboard/DriverMangement";
import Feedback from "./Admin Dashboard/Feedback";
import Contact from "./Admin Dashboard/Contact";

const AdminSidebar = ({ user, onLogout }) => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const navigate = useNavigate();

  // Define menu items
  const menuItems = [
    { key: "dashboard", label: "Dashboard" },
    { key: "drivers", label: "Drivers" },
    { key: "feedback", label: "Feedback" },
    { key: "contacts", label: "Contacts" },
  ];

  // Handle menu clicks
  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
    setIsDrawerVisible(false); // Close drawer on mobile when a menu item is selected
  };

  // Handle Logout button click
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate("/");
  };

  // Render main content based on the selected menu item
  const renderContent = () => {
    switch (selectedKey) {
      case "dashboard":
        return <div>Dashboard Content 
            <> <Dashboard></Dashboard>  </>
        </div>;
      case "drivers":
        return <div>
               <><DriverManagement></DriverManagement> </>
        </div>;
      case "feedback":
        return <div><Feedback></Feedback></div>;
      case "contacts":
        return <div><Contact></Contact></div>;
      default:
        return <div>Welcome to the Admin Panel</div>;
    }
  };

  return (
    <div className="admin-layout">
      {/* Mobile Menu Toggle */}
      <div className="mobile-header">
        <MenuOutlined onClick={() => setIsDrawerVisible(true)} />
      </div>

      {/* Sidebar for Web */}
      <div className="admin-sidebar">
        <div className="sidebar-header">Admin Dashboard</div>
        <Menu
          theme="dark"
          mode="vertical"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={handleMenuClick}
        />
        <div className="logout-container">
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Admin Dashboard"
        placement="left"
        closable={true}
        onClose={() => setIsDrawerVisible(false)}
        visible={isDrawerVisible}
      >
        <Menu
          theme="light"
          mode="vertical"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={handleMenuClick}
        />
        <div className="logout-container">
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Drawer>

      {/* Main Content */}
      <div className="admin-content">{renderContent()}</div>
    </div>
  );
};

export default AdminSidebar;
