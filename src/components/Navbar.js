import { Link } from 'react-router-dom';
import { Nav, Navbar as BSNavbar, NavDropdown, Container } from 'react-bootstrap';
import React from 'react';


function Navbar() {
  return (
    <BSNavbar bg="light" expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand as={Link} to="/">Eye of Light</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Therapies">
              <NavDropdown.Item href="/therapies#reiki">Reiki</NavDropdown.Item>
              <NavDropdown.Item href="/therapies#aurareading">Aura Reading</NavDropdown.Item>
              <NavDropdown.Item href="/therapies#regression">Regression</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Learn">
              <NavDropdown.Item href="/learn#workshops">Workshops</NavDropdown.Item>
              <NavDropdown.Item href="/learn#mentorships">Mentorships</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/meditations">Meditations</Nav.Link>
            <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
