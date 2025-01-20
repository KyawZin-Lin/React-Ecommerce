import { ActionTypes } from "../../actions/action-types";

const initialState = {
  products: [],
  addToCartItems: [],
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      const { product, variant } = payload;

      // Generate a unique key for the cart item
      const cartItemKey = variant
        ? `${product.id}-${variant.id}` // Product with variant
        : `${product.id}`; // Product without variant

      // Check if the item already exists in the cart
      const existingItem = state.addToCartItems.find(
        (item) => item.cartItemKey === cartItemKey
      );

      if (existingItem) {
        // If the item exists, increment its quantity
        return {
          ...state,
          addToCartItems: state.addToCartItems.map((item) =>
            item.cartItemKey === cartItemKey
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item doesn't exist, add it to the cart
        const newCartItem = {
          cartItemKey, // Unique key for the cart item
          name: variant
            ? `${product.name} - ${variant.variant} (${variant.variant_options})` // Product with variant
            : product.name, // Product without variant
          quantity: 1,
          price: variant ? variant.selling_price : product.selling_price,
          image: variant ? variant.image : product.image,
          product_id: product.id,
          variant_id: variant ? variant.id : null,
        };
        console.log(newCartItem);
        return {
          ...state,
          addToCartItems: [...state.addToCartItems, newCartItem],
        };
      }
    }

    case ActionTypes.REMOVE_CART_ITEM:
      console.log(state);
      return {
        ...state,
        addToCartItems: [
          ...state.addToCartItems.filter((item) => item.id != payload.id),
        ],
      };

    default:
      return state;
  }
};

// export const removeCartItemReducer = (
//   state = initialState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case ActionTypes.REMOVE_CART_ITEM:
//       return {
//         ...state,
//         addToCartItems: [...state.addToCartItems, payload],
//       };
//     default:
//       return state;
//   }
// };
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
