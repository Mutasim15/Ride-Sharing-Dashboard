// import React from "react";
// import { Menu } from "antd";
// import { useNavigate } from "react-router-dom";

// const Sidebar = ({ user, onLogout }) => {
//   const navigate = useNavigate();

//   const menuItems =
//     user.role === "admin"
//       ? [
//           { key: "dashboard", label: "Dashboard" },
//           { key: "drivers", label: "Drivers" },
//           { key: "feedback", label: "Feedback" },
//           { key: "contacts", label: "Contacts" },
//         ]
//       : [
//           { key: "dashboard", label: "Dashboard" },
//           { key: "reviews", label: "Reviews" },
//         ];

//   return (
//     <div style={{ width: 200, background: "#001529", color: "#fff" }}>
//       <div style={{ padding: 20, fontSize: 18, color: "#fff" }}>
//         Ride Sharing
//       </div>
//       <Menu
//         theme="dark"
//         mode="vertical"
//         items={[
//           ...menuItems,
//           { key: "logout", label: "Logout", onClick: onLogout },
//         ]}
//         onClick={({ key }) => {
//           if (key === "logout") {
//             onLogout();
//             navigate("/login");
//           } else {
//             navigate(`/${user.role}/${key}`);
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default Sidebar;

import { CarOutlined, FormOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate =useNavigate();
    return (
        <div className='sidebar'>
            <Menu 
            onClick={(item)=>{
                //item.key
                navigate(item.key)
            }}
            items={[
                {
                    label:"Admin",
                    key:'/adminlogin',
                    icon:<UserOutlined></UserOutlined>

                },
                {
                    label:'Driver',
                    key:'/driverlogin',
                    icon:<CarOutlined></CarOutlined>
                },
                {
                    label:'Register',
                    key:'/registration',
                    icon:<FormOutlined></FormOutlined>
                }
            ]}>

            </Menu>
        </div>
    );
};

export default Sidebar;
