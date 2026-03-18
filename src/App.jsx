
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Products from "./pages/products";
import { Register } from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/account/Profile";
import Order from "./pages/account/Order";
import Changepassword from "./pages/account/Changepassword";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="account/profile" element={<Profile/>} />
      <Route path="account/order" element={<Order/>} />
      <Route path="account/changepassword" element={<Changepassword/>} />

    </Routes>

    </>
  );
}

export default App;
