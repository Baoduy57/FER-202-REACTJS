import { Button, Form, Modal } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../service/service";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const userData = await loginUser(userName, password);
      setUser(userData); // Lưu thông tin người dùng vào context
      localStorage.setItem("user", JSON.stringify(userData)); // Lưu thông tin người dùng vào local storage
      props.showClose(); // Đóng modal
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
      // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi)
    }
  };

  const handleLogout = () => {
    setUser(null); // Đặt lại trạng thái người dùng
    localStorage.removeItem("user"); // Xóa thông tin người dùng khỏi local storage
    // Reset form
    setUserName("");
    setPassword("");
  };

  return (
    <>
      <Modal show={props.showLogin} onHide={props.showClose}>
        <Modal.Header closeButton>
          <Modal.Title>{user ? "Chào mừng!" : "Đăng Nhập"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user ? ( // Kiểm tra xem người dùng đã đăng nhập hay chưa
            <>
              <p>Chào mừng, {user.username}!</p>
              <Button variant="primary" onClick={handleLogout}>
                Đăng Xuất
              </Button>
            </>
          ) : (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tên Đăng Nhập</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={userName} // Gán giá trị cho input
                  onChange={(e) => setUserName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mật Khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  value={password} // Gán giá trị cho input
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!user && ( // Hiện nút đăng nhập chỉ khi người dùng chưa đăng nhập
            <Button variant="primary" onClick={handleLogin}>
              Đăng Nhập
            </Button>
          )}
          <Button variant="secondary" onClick={props.showClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
