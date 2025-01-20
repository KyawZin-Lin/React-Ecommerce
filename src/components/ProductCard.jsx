import { Card } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/products";
import ProductVariantCard from "./ProductVariantCard";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartAction = (product, variant = null) => {
    dispatch(addToCart(product, variant));
  };

  return (
    <Card
      className="max-w-sm m-3"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={product.image}
    >
      <Link to={`product/${product.id}`}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}
        </h5>
      </Link>
      <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
        {product.price}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>

      <div className="flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Buy Now
        </button>

        <button
          onClick={() => addToCartAction(product)} // Add product without variant
          className="bg-blue-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full"
        >
          <i className="fa-solid fa-cart-shopping me-2"></i>
          <span> Add to Cart</span>
        </button>
      </div>

      <ProductVariantCard
        variants={product.variants}
        addToCartAction={addToCartAction}
        product={product}
      />
    </Card>
  );
};
export default ProductCard;
