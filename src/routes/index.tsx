import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp"
import Login from "../pages/Login";
import Home from "../pages/Home";
import Titles from "../pages/Buy";
import Address from "../pages/Address";
import Cart from "../pages/Cart";

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="signup"
        element={<SignUp />} />
      <Route
        path="login"
        element={<Login />} />
      <Route
        index
        element={<Home />} />
      <Route
        path="titles"
        element={<Titles />} />
      <Route
        path="cart"
        element={<Cart />} />
        <Route
        path="address"
        element={<Address />} />
    </Route>,
  ),
);

export default routers