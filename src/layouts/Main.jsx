import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Space } from 'antd';
import Sidebar from '../Components/Sidebar';
const Main = () => {
    return (
        <div>
            <Header></Header>
             <Space className='sidebarAndpagebar'>
                <Sidebar></Sidebar>
                
             </Space>
            <Footer></Footer>
        </div>
    );
};

export default Main;