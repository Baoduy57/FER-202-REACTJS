import axios from "axios";

export const getData = () => {
  return axios.get("https://api-demo-4gqb.onrender.com/products");
};

export const loginUser = async (username, password) => {
  const response = await axios.post(
    "https://api-demo-4gqb.onrender.com/users/login",
    {
      username,
      password,
    }
  );
  return response.data; // Trả về thông tin người dùng
};
