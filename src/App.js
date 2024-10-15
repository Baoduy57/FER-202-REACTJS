import "./App.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import Header from "./components/Header";
import CardItem from "./components/CardItem";
import ModalItem from "./components/ModalItem";
import CarouselItem from "./components/CarouselItem";
import BookingForm from "./components/BookingForm";
import pizza1 from "./image/pizza1.jpg";
import pizza2 from "./image/pizza2.jpg";
import pizza3 from "./image/pizza3.jpg";
import menu1 from "./image/menu1.jpg";
import menu2 from "./image/menu2.jpg";
import menu3 from "./image/menu3.jpg";
import menu4 from "./image/menu4.jpg";
import Login from "./components/Login";

function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]); // Trạng thái cho giỏ hàng

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (item) => {
    setCart(
      (prevItems) =>
        prevItems
          .map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0) // Loại bỏ sản phẩm có số lượng về 0
    );
  };

  return (
    <div className="container-fluid bg-dark text-white">
      <Container>
        <Login showLogin={showLogin} showClose={handleCloseLogin}></Login>
        <Header
          handleShowLogin={handleShowLogin}
          handleShow={handleShow}
          totalItems={cart.reduce((acc, item) => acc + item.quantity, 0)}
        />
        <CarouselItem pizza={[pizza1, pizza2, pizza3]} />
        <Row>
          <h1 style={{ margin: "20px 0" }}>Our Menu</h1>
        </Row>
        <CardItem menu={[menu1, menu2, menu3, menu4]} addToCart={addToCart} />
        <ModalItem
          show={show}
          handleClose={handleClose}
          cartItems={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <BookingForm></BookingForm>
      </Container>
    </div>
  );
}

export default App;
