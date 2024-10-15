import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { getData } from "../service/service";

const CardItem = (props) => {
  const [menus, setMenus] = useState([]);
  const fetchData = async () => {
    const res = await getData();
    console.log("res", res);
    setMenus(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Row>
      {menus.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img variant="top" src={item.image} />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="text-decoration-line-through">
                {item.price}
              </Card.Text>
              <Card.Text>{item.salePrice}</Card.Text>
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
