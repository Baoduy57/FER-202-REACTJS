import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BookingForm = () => {
  return (
    <Container
      style={{ backgroundColor: "#23272b", marginTop: "40px", color: "#fff" }}
    >
      <Row>
        <Col>
          <h2 className="text-center" style={{ color: "#fff" }}>
            Book Your Table
          </h2>
        </Col>
      </Row>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your name *" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Your email *" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formService">
              <Form.Control as="select">
                <option>Select a Service</option>
                <option>Dine-in</option>
                <option>Takeaway</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formComment">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please write your comment"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button variant="warning" type="submit">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default BookingForm;
