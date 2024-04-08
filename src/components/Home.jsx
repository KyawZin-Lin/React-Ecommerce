import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Carousel from "./MyCarousel";
import { useDispatch } from "react-redux";
import axios from "axios";
import { api } from "../api/index";
import { fetchSliders } from "../redux/actions/silders";
import Product from "./ProductCard";
import { fetchProducts } from "../redux/actions/products";
import Products from "./Products";
const Home = () => {
  const dispatch = useDispatch();
  const getSliders = async () => {
    try {
      const res = await api.get("/get/sliderImages",);
      dispatch(fetchSliders(res.data.data)) // Assuming this dispatches an action
    } catch (error) {
      console.error("Error fetching sliders:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };
  const getProducts = async () => {
    try {
      const res = await api.get("/get/products");
      dispatch(fetchProducts(res.data.data)) // Assuming this dispatches an action
    } catch (error) {
      console.error("Error fetching sliders:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    getSliders();
    getProducts();
  }, []);
  return (
    <div className="px-3">
      
      <Carousel />
      <br />
      <Products/>
    </div>
  );
};

export default Home;
