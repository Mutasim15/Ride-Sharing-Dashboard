import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { FaMapPin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <Container>
        <Row>
            <div className='responsive-grid'>

            </div>
          {/* Logo and About Section */}
          <Col lg={4} md={6} sm={6} className="mb-4">
            <Link to="/" className="d-flex align-items-center mb-3">
              <img src={Logo} alt="logo" className="img-fluid" style={{ maxWidth: '180px' }} />
            </Link>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat corporis, rerum laborum optio laboriosam perferendis sit culpa doloribus, tempora aliquam repellendus reprehenderit, ullam alias.
            </p>
          </Col>

          {/* About Us Section */}
          <Col lg={2} md={6} sm={6} xs={6} className="mb-4">
            <h5 className="mb-3">About Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">Terms and Conditions</Link>
              </li>
            </ul>
          </Col>

          {/* Services Section */}
          <Col lg={2} md={6} sm={6} xs={6} className="mb-4">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">Safety Guarantee</Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">FAQ & Support</Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">Luxury Buses</Link>
              </li>
              <li>
                <Link to="#" className="text-secondary text-decoration-none hover-link">Enough Facilities</Link>
              </li>
            </ul>
          </Col>

          {/* Get in Touch Section */}
          <Col lg={4} md={6} sm={6} className="mb-4">
            <h5 className="mb-3">Get In Touch</h5>
            <div>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="d-flex mb-3 align-items-start">
                  {/* <FaMapPin className="me-3 text-secondary" style={{ fontSize: '1.5rem' }} /> */}
                  <div>
                    <p className="mb-1 text-secondary small">For Support & Reservations</p>
                    <p className="mb-0 text-dark"> Gulsan, Dhaka</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
