import { Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router";

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
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/service">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
