import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const name = "<EHT/>";
    // const downloadCV = () => {
    //     window.location.href = "https://google.com";
    // }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><span className='text-danger fw-bold fs-2'>{name}</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{ color: 'white' }}>
                        <Nav className="me-auto header">

                        </Nav>
                        <Nav className='text-uppercase'>
                            <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
                            <Nav.Link href="#projects" style={{ color: 'white' }}>Projects</Nav.Link>
                            <Nav.Link href="contact" style={{ color: 'white' }}>Contact</Nav.Link>
                            {/* <button onClick={downloadCV} className='button m-0 ms-2 p-1' type='button'>Download CV</button> */}
                            <a target="_blank" href="https://drive.google.com/file/d/1IR4qHkmumvAhJ7B9PpX2uBxV2THJfrcW/view?usp=sharing"><button className='button m-0 ms-2 p-1' type='button'>Download CV</button></a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;