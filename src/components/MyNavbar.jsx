import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Order Foods</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Link to="/login">
            <Button variant="outline-success">Login</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
