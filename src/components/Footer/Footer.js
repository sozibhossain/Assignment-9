import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer d-flex">
                <div className="col-lg-3">
                    <h4>ABOUT EDUTECH</h4>
                    <p>EDUTECH Mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the sys- tem, and expound the actual teachings of the great explorer</p>
                </div>
                <div className="col-lg-3">
                    <h4>CONTACT US</h4>
                </div>
                <div className="col-lg-3">
                    <h4>QUICK LINK</h4>
                    <div>
                        <Nav>
                                <Nav.Link style={{color: "#000"}} as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link style={{color: "#000"}} as={Link} to={"/courses"}>Courses</Nav.Link>
                                <Nav.Link style={{color: "#000"}} as={Link} to={"/serveses"}>Serveses</Nav.Link>
                                <Nav.Link style={{color: "#000"}} as={Link} to={"/about"}>About Us</Nav.Link>
                                <Nav.Link style={{color: "#000"}} as={Link} to={"/blog"}>Blog</Nav.Link>
                                <Nav.Link style={{color: "#000"}} as={Link} to={"/contact"}>Contact Us</Nav.Link>
                        </Nav>
                    </div>
                            
                        
                </div>
                <div className="col-lg-3">
                    <h4>LATEST EVENTS</h4>
                </div>
            </div>
            <div className="footer-bottom">
                <p><small>Copyright 2021 © TheMazine | Designed by Mahfuz Riad</small></p>
            </div>
        </div>
    );
};

export default Footer;