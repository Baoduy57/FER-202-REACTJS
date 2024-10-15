import React from "react";
import { Badge, Container, Form, Nav, Navbar, Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <div className="container-fluid bg-dark text-white">
      <Navbar expand="lg">
        <Container fluid>
          {/* Đặt màu chữ trắng cho tiêu đề */}
          <Navbar.Brand href="#" className="text-white">
            Pizza House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" navbarScroll>
              {/* Màu trắng cho các liên kết Nav */}
              <Nav.Link href="#action1" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button variant="primary" onClick={props.handleShow}>
              Cart <Badge bg="secondary">{props.totalItems}</Badge>
            </Button>
            <Button variant="success" onClick={props.handleShowLogin}>
              Login <Badge bg="secondary"></Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
