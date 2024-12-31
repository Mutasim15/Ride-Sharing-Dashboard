import React, { useState } from "react";
import { Layout, Table, Modal, Form, Input, Button, Typography } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// Mock data for support inquiries
const inquiriesData = [
  {
    key: "1",
    name: "John Doe",
    role: "Passenger",
    inquiry: "I need help with my last trip. The driver overcharged me.",
  },
  {
    key: "2",
    name: "Jane Smith",
    role: "Driver",
    inquiry: "How can I update my bank details for payouts?",
  },
  {
    key: "3",
    name: "Alice Johnson",
    role: "Passenger",
    inquiry: "My account was locked. Can you assist?",
  },
  {
    key: "4",
    name: "Mark Wilson",
    role: "Driver",
    inquiry: "Is there a way to get more ride requests during peak hours?",
  },
];

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Inquiry",
      dataIndex: "inquiry",
      key: "inquiry",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => {
            setSelectedInquiry(record);
            setIsModalOpen(true);
          }}
        >
          Reply
        </Button>
      ),
    },
  ];

  const handleModalOk = () => {
    console.log("Reply sent:", form.getFieldValue("reply"));
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#001529", color: "#fff", textAlign: "center", fontSize: "24px" }}>
        Contact Management
      </Header>
      <Content style={{ padding: "20px" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Support Inquiries
        </Title>
        <Table columns={columns} dataSource={inquiriesData} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Contact Management ©2024 Created with Ant Design
      </Footer>

      {/* Reply Modal */}
      <Modal
        title="Reply to Inquiry"
        visible={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Send Reply"
      >
        <Form form={form} layout="vertical">
          <Form.Item label="User Inquiry">
            <Input.TextArea
              value={selectedInquiry?.inquiry}
              disabled
              rows={3}
            />
          </Form.Item>
          <Form.Item
            label="Your Reply"
            name="reply"
            rules={[{ required: true, message: "Please enter your reply." }]}
          >
            <Input.TextArea rows={3} placeholder="Type your reply here..." />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Contact;
