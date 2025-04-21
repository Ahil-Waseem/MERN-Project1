import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#">ORDER FOODS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
           
            {/* <Nav.Link href="#" disabled> */}
              {/* Link
            </Nav.Link> */}
          </Nav>
        
            <Button variant="outline-success">Search</Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;