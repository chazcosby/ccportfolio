import React from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';

function Header() {
  return (
    <div id="home">
    
      <Navbar fixed="top" className="navbg">
        <Container className="justify-content-end">
          <Nav className="navbar">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header