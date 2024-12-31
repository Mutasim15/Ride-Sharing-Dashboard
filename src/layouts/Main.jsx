// import React from 'react';
// import Header from '../Pages/Shared/Header/Header';
// import Footer from '../Pages/Shared/Footer/Footer';
// import { Menu, Space } from 'antd';
// import Sidebar from '../Components/Sidebar';
// import backgroundImage from '../assets/bg.jpg'
// import './Main.css'
// const Main = () => {
//     return (
//         <div >
//            <div className="leftsidebar">
//            <Header></Header>

//            <div className="admin-layout">
//             <div className="adminsidebar">
                
//             <Sidebar className='sidebarAndpagebar' ></Sidebar>
//             </div>
//            <div 
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100vh",
//                     background: `
//                       linear-gradient(
//                         rgba(0, 0, 0, 0.5), 
//                         rgba(0, 0, 0, 0.5)
//                       ), 
//                       url(${backgroundImage}) no-repeat center/cover`,
//                   }}>
    
//            </div>
//            </div>

//             <Footer></Footer>
//            </div>
//         </div>
//     );
// };

// export default Main;


import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Sidebar from '../Components/Sidebar';
import backgroundImage from '../assets/bg.jpg';
import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <Header />
            <div className="admin-layout">
                {/* Sidebar Section */}
               
                {/* Content Section */}
                <div
                    className="content-section"
                    style={{
                        background: `linear-gradient(
                            rgba(0, 0, 0, .9), 
                            rgba(0, 0, 0, .9)
                          ), 
                          url(${backgroundImage}) no-repeat center/cover`,
                    }}
                >

                <div className="adminsidebar">
                    <Sidebar className="sidebar" />
                </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
