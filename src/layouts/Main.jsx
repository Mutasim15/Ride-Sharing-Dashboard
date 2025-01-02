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
// import Header from '../Pages/Shared/Header/Header';
// import Footer from '../Pages/Shared/Footer/Footer';
// import Sidebar from '../Components/Sidebar';
import backgroundImage from '../assets/bg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Main.css';
import Navbars from '../Components/Home Container/Navbar/Navbars';
import MainSection from '../Components/Home Container/Main Section/MainSection';
import Footer from '../Components/Home Container/Footer/Footer';

const Main = () => {
    return (
        <div className="main-container">
            <Navbars></Navbars>
            <MainSection></MainSection>
            <Footer></Footer>
            
            {/* <Header />
            <div className="admin-layout">
              
               
             
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
            <Footer /> */}
        </div>
    );
};

export default Main;
