import React, { useState } from "react";
import { Table, Tag, Space, Button, Modal, Input } from "antd";

const DriverManagement = () => {
  // Mock data for drivers
  const [drivers, setDrivers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      status: "Pending",
      performance: "Good",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      status: "Approved",
      performance: "Excellent",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      status: "Rejected",
      performance: "N/A",
    },
  ]);

  // State for modal visibility and selected driver
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  // Approve driver
  const handleApprove = (id) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, status: "Approved" } : driver
      )
    );
  };

  // Reject driver
  const handleReject = (id) => {
    setDrivers((prevDrivers) =>
      prevDrivers.map((driver) =>
        driver.id === id ? { ...driver, status: "Rejected" } : driver
      )
    );
  };

  // View driver details
  const handleView = (driver) => {
    setSelectedDriver(driver);
    setIsModalVisible(true);
  };

  // Close modal
  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedDriver(null);
  };

  // Table columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "gray";
        if (status === "Approved") color = "green";
        else if (status === "Pending") color = "orange";
        else if (status === "Rejected") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Performance",
      dataIndex: "performance",
      key: "performance",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, driver) => (
        <Space>
          <Button
            type="link"
            onClick={() => handleApprove(driver.id)}
            disabled={driver.status !== "Pending"}
          >
            Approve
          </Button>
          <Button
            type="link"
            danger
            onClick={() => handleReject(driver.id)}
            disabled={driver.status !== "Pending"}
          >
            Reject
          </Button>
          <Button type="link" onClick={() => handleView(driver)}>
            View
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>Driver Management</h2>
      <Table columns={columns} dataSource={drivers} rowKey="id" />

      {/* Modal for viewing driver details */}
      <Modal
        title="Driver Details"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="close" onClick={handleModalClose}>
            Close
          </Button>,
        ]}
      >
        {selectedDriver && (
          <div>
            <p>
              <strong>Name:</strong> {selectedDriver.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedDriver.email}
            </p>
            <p>
              <strong>Status:</strong> {selectedDriver.status}
            </p>
            <p>
              <strong>Performance:</strong> {selectedDriver.performance}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default DriverManagement;
