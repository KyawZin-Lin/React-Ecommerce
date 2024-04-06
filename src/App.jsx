import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "flowbite-react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
