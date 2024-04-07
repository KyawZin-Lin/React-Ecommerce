import { ActionTypes } from "../../actions/action-types";

const initialState = {
  products: [],
  addToCartItems: [],
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        addToCartItems: [...state.addToCartItems, payload],
      };
    case ActionTypes.REMOVE_CART_ITEM:
      console.log(state);
      return {
        ...state,
        addToCartItems:[...state.addToCartItems.filter((item)=>item.id!= payload.id)]
      }
   
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
