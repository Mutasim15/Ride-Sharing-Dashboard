import Typography from 'antd/es/typography/Typography';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <Typography.Link href="contact:+8801521788566"  >Contact:+8801521788566</Typography.Link>
            <Typography.Link href="https://www.google.com/" target={"_blank"} >Privacy Policy</Typography.Link>
            <Typography.Link href="contact" target={"_blank"} >Terms of Use</Typography.Link>
        </div>
    );
};

export default Footer;