import { Dropdown, Navbar } from "flowbite-react";
import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { api } from "../api";

const NavBar = () => {
  let cartItems = [];
  cartItems = useSelector((state) => state.addToCart.addToCartItems);
  const navigate = useNavigate();
  const getAuthTokenFromLocalStorage = () => {
    return localStorage.getItem("authToken");
  };
  const logout = async () => {
    const authToken = getAuthTokenFromLocalStorage();

    const res = await api.post("/logout",{}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    localStorage.removeItem("authToken");
    console.log(authToken,res);
    navigate('/home')

  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl text-green-400 font-semibold dark:text-white">
          Paing Soe
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/home">Home</Link>

        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/service">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>

        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping me-2"></i>Cart{" "}
          {cartItems.length}
        </Link>
        <Dropdown label="Dropdown button" inline dismissOnClick={true}>
          <Dropdown.Item>
            <Link to={"/login"}>Login</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to={"/register"}>Register</Link>
          </Dropdown.Item>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              logout();
              console.log("u are making logout");
            }}
          >
            Log out
          </Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
