import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const CardItem = (props) => {
  const items = [
    { id: 1, name: "Menu 1", image: props.menu[0] },
    { id: 2, name: "Menu 2", image: props.menu[1] },
    { id: 3, name: "Menu 3", image: props.menu[2] },
    { id: 4, name: "Menu 4", image: props.menu[3] },
  ];

  return (
    <Row>
      {items.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" onClick={() => props.addToCart(item)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardItem;
