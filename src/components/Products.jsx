import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  let products = [];
  products = useSelector((state) => state.products.products);
  return (
    <div className="grid grid-cols-4 gap-4">
        {
            products.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>

  )
};

export default Products;
