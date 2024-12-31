import React from "react";
import { Layout, List, Avatar, Typography } from "antd";
import { UserOutlined, CarOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    role: "Passenger",
    message: "The ride was smooth and on time. Great service!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Driver",
    message: "Some passengers cancel at the last moment, causing inconvenience.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Passenger",
    message: "The car was clean, but the driver was late by 10 minutes.",
  },
  {
    id: 4,
    name: "Mark Wilson",
    role: "Driver",
    message: "It would be great to have better communication during maintenance issues.",
  },
];

const Feedback = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#001529", color: "#fff", textAlign: "center", fontSize: "24px" }}>
        Feedback Dashboard
      </Header>
      <Content style={{ padding: "20px" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Aggregated Feedback
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={feedbackData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    icon={item.role === "Passenger" ? <UserOutlined /> : <CarOutlined />}
                  />
                }
                title={`${item.name} (${item.role})`}
                description={item.message}
              />
            </List.Item>
          )}
        />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Feedback Dashboard ©2024 Created with Ant Design
      </Footer>
    </Layout>
  );
};

export default Feedback;
