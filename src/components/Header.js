import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Header() {
  return (
    <header>
        <Container>
            <Row>
                <Col md={6}>
                <h1>My Website</h1>
                </Col>
                <Col md={6}>
                    <nav>
                        <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>  
                        </ul>
                    </nav>  
                </Col>
            </Row>
        </Container>
    </header>
  );
}

export default Header;