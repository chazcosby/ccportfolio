import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Header() {
  return (
    <div id="header" className="header">
      <Navbar fixed="top" className="navbg navbar">
        <Container className="navbar justify-content-end">
          <Nav className="navbar">
            <Nav.Link href="#header">Home</Nav.Link>
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