import React, { useState } from 'react';
import './DriverSelfDashboard.css'; // Optional CSS file for styling
import profile from '../../assets/mutasim.jpg'
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const DriverSelfDashboard = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  // Sample data (can be replaced with API calls)
  const driverData = {
    name: 'Mr Builder',
    profilePicture: profile,
    rating: 4.8,
    completedTrips: 120,
    earnings: {
      daily: 50,
      weekly: 350,
      monthly: 1400,
    },
    notifications: [
      'New ride request from Jane',
      'Your weekly summary is ready!',
    ],
  };

  const handleStatusToggle = () => {
    setOnlineStatus(!onlineStatus);
  };

  return (
    <Layout style={{ minHeight: "100vh" }} >
     
           {/* Header */}
           <Header
        style={{
          backgroundColor: "#001529",
          color: "#fff",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        System Dashboard
      </Header>
   <div className="dashboard-container">
  {/* Profile Overview */}
  <div className="profile-overview">
    <img src={driverData.profilePicture} alt="Driver Profile" className="profile-picture" />
    <h2>{driverData.name}</h2>
    <p>Rating: {driverData.rating} ★</p>
    <p>Completed Trips: {driverData.completedTrips}</p>
  </div>

  <div className="dashboard-details">
     {/* Earnings Summary */}
  <div className="item earnings-summary">
    <h3>Earnings Summary</h3>
    <p>Daily: ${driverData.earnings.daily}</p>
    <p>Weekly: ${driverData.earnings.weekly}</p>
    <p>Monthly: ${driverData.earnings.monthly}</p>
  </div>

  {/* Ride Requests */}
  <div className="item ride-requests">
    <h3>Ride Requests</h3>
    <p>No active requests. Stay tuned!</p>
  </div>

  {/* Navigation and Location */}
  <div className="item navigation-location">
    <h3>Navigation</h3>
    <p>Live route updates will appear here.</p>
  </div>

  {/* Notifications */}
  <div className="item notifications">
    <h3>Notifications</h3>
    <ul>
      {driverData.notifications.map((notification, index) => (
        <li key={index}>{notification}</li>
      ))}
    </ul>
  </div>

  {/* Shift Management */}
  <div className="item shift-management">
    <h3>Shift Management</h3>
    <button onClick={handleStatusToggle} className={onlineStatus ? 'online' : 'offline'}>
      {onlineStatus ? 'Go Offline' : 'Go Online'}
    </button>
  </div>
  </div>

 
</div>
</Layout>
  );
};

export default DriverSelfDashboard;
