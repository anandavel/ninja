import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
    return (
      <footer>
        <Container>
            <Row>
                <Col md={12}>
                <p>&copy; 2023 My Website</p>
                </Col>
            </Row>
        </Container>
      </footer>
    );
  }

export default Footer;