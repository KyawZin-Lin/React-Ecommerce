import { Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl text-green-400 font-semibold dark:text-white">
          Paing Soe
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link  active>
          <Link to="/home">Home</Link>
          
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/service">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping me-2"></i>Cart
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
