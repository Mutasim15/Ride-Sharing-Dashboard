// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import logo from '../../assets/logo.png';
// import './Navbar.css'

// const Navbars = () =>{
//     return (
//        <>
//         <Navbar expand="lg" className="custom-navbar">
//         <Container>
//           {/* Logo on the left */}
//           <Navbar.Brand href="/">
//             <img
//               src={logo} 
//               alt="Logo"
//               width="60" 
//               height="30"
//               className="d-inline-block align-top"
//             />
//           </Navbar.Brand>
  
    
//         </Container>
//       </Navbar>
 
//        </>
//       );
// };

// export default Navbars;


import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { MailIcon, BellIcon } from '@heroicons/react/outline'; // Import icons
import logo from '../../../assets/logo.png';
import './Navbar.css';

const Navbars = () => {
    return (
        <>
            <Navbar expand="lg" className="custom-navbar">
                <Container className="d-flex justify-content-between align-items-center">
                    {/* Logo on the left */}
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            alt="Logo"
                            width="70"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    {/* Website name in the center */}
                    <div className="navbar-center">
                        <h4 className="website-name">Ride Sharing Dashboard</h4>
                    </div>

                    {/* Icons on the right */}
                    <Nav className="d-flex align-items-center">
                        <Nav.Link href="/messages">
                            <MailIcon className="icon" />
                        </Nav.Link>
                        <Nav.Link href="/notifications">
                            <BellIcon className="icon" />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navbars;
