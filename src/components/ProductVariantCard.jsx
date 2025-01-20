import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/products";

const ProductVariantCard = ({ variants, addToCartAction, product }) => {
    return (
      <>
        <p>Product Variant Card </p>
  
        {variants.map((variant) => (
          <div key={variant.id}>
            <h3>{variant.variant}</h3>
            <p>{variant.variant_options}</p>
            <button
              onClick={() => addToCartAction(product, variant)} // Add product with variant
              className="bg-blue-500 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-full"
            >
              <i className="fa-solid fa-cart-shopping me-2"></i>
              <span> Add to Cart</span>
            </button>
          </div>
        ))}
      </>
    );
  };

export default ProductVariantCard;
