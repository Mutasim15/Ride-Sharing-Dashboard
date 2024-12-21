import { Badge, Image, Space, Typography } from 'antd';
import React from 'react';
import img from '../../../assets/logo.png'
import { BellFilled, MailOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div className='header'>   
            <Image
            width={60}
            src={img}
            ></Image>
            <Typography.Title style={{fontSize:25}}>Ride Sharing Dashboard</Typography.Title>
            <Space>
               <Badge count={10} dot>
               <MailOutlined style={{fontSize:20}}></MailOutlined>
               </Badge>
               <Badge count={5}>
               <BellFilled style={{fontSize:20}} ></BellFilled>
               </Badge>
            </Space>
        </div>
    );
};

export default Header;