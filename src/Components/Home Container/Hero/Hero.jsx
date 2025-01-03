import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import heroImage from "../../../assets/bg.jpg";
import './Hero.css'

const Hero = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleGetStarted = () => {
        navigate("/loginpage"); // Replace with your desired route
    };

    return (
        <div
            className="hero-section position-relative w-100 vh-100 d-flex align-items-center justify-content-center"
        >
            {/* Full-Size Background Image */}
            <img
                src={heroImage}
                alt="Background"
                className="hero-image position-absolute w-100 h-100"
            />

            {/* Hero Content */}
            <Container fluid className="position-relative z-3 text-center">
                <Row className="align-items-center justify-content-center">
                    <Col
                        lg={6}
                        md={8}
                    >
                        {/* Animated Section */}
                        <motion.div
                            className="w-100 h-auto rounded-md d-flex flex-column gap-4"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "linear", delay: 0.3 }}
                        >
                            {/* Title */}
                            <motion.h1
                                className="display-4 fw-bold text-white"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "linear", delay: 0.8 }}
                            >
                                Welcome to{" "}
                                <span className="text-success">Jaben Naki</span> <p>Dashboard</p>
                            </motion.h1>

                            {/* Button */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "linear", delay: 0.6 }}
                            >
                                <Button
                                    variant="success"
                                    className="hero-button text-white fw-medium px-4 py-2 rounded "
                
                                   
                                    onClick={handleGetStarted} // Add onClick handler
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;
