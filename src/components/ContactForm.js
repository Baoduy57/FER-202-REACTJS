import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import RatingComponent from "./RatingComponent"; // Import the RatingComponent

const ContactForm = () => {
  return (
    <div style={{ backgroundColor: "#23272b", padding: "30px", color: "#fff" }}>
      <h2>Book Your Table</h2>
      <Form>
        <Row>
          <Col md={4}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Your name *" required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Your email *" required />
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
        <Form.Group controlId="formComment">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Please write your comment"
          />
        </Form.Group>
        <Button variant="warning" type="submit" style={{ marginTop: "10px" }}>
          Send Message
        </Button>
      </Form>

      {/* Thêm phần đánh giá */}
      <RatingComponent />
    </div>
  );
};

export default ContactForm;
