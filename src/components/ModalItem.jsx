import { Button, Modal, ListGroup, Image, Row, Col } from "react-bootstrap";
import React from "react";

const ModalItem = (props) => {
  const visibleCartItems = props.cartItems.filter((item) => item.quantity > 0);

  return (
    <Modal show={props.show} onHide={props.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {visibleCartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            visibleCartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col xs={3}>
                    <Image
                      src={item.image}
                      rounded
                      fluid
                      alt={item.name}
                      style={{ maxHeight: "50px", objectFit: "cover" }}
                    />
                  </Col>
                  <Col xs={6} className="d-flex align-items-center">
                    <div style={{ color: "#4CAF50", fontWeight: "bold" }}>
                      {item.name} - {item.quantity}
                    </div>
                  </Col>
                  <Col
                    xs={3}
                    className="d-flex align-items-center justify-content-end"
                  >
                    <Button
                      variant="outline-secondary"
                      onClick={() => props.removeFromCart(item)}
                      className="mx-2"
                    >
                      -
                    </Button>
                    <Button
                      variant="outline-secondary"
                      onClick={() => props.addToCart(item)}
                    >
                      +
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalItem;
