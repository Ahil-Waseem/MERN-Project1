import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';
export default function Footer() {
  return (
    <div>
       <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>My Website</h5>
            <p>© 2025 All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>Follow us: Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}
