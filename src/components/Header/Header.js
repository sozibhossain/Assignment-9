import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href="/home">EDUCATION CENTER</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/serveses"}>Serveses</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                        <Nav.Link as={Link} to={"/blog"}>Blog</Nav.Link>
                        <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;