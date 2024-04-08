import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  let cartItems = [];
  cartItems = useSelector((state) => state.addToCart.addToCartItems);
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
          <Dropdown.Item><Link to={'/login'}>Login</Link></Dropdown.Item>
          <Dropdown.Item><Link to={'/register'}>Register</Link></Dropdown.Item>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Log out</Dropdown.Item>
        </Dropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
