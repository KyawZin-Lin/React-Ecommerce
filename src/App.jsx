import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "flowbite-react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
