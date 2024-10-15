import React from "react";
import { Row, Carousel } from "react-bootstrap";

const CarouselItem = (props) => {
  return (
    <Row>
      <Carousel style={{ margin: "20px 0" }} interval={3000} pause="hover" fade>
        <Carousel.Item>
          <img
            src={props.pizza[0]}
            alt="First slide"
            className="d-block w-100" // Chiều rộng 100%
            style={{ maxHeight: "400px", objectFit: "cover" }} // Điều chỉnh chiều cao và kiểu
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={props.pizza[1]}
            alt="Second slide"
            className="d-block w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={props.pizza[2]}
            alt="Third slide"
            className="d-block w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Row>
  );
};

export default CarouselItem;
