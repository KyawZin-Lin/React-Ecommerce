import { ActionTypes } from "../../actions/action-types";

const initialState = {
  products: [],
  addToCartItems: [],
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...initialState,
        addToCartItems: [
          ...state.addToCartItems,payload
        ],
      };
    default:
      return state;
  }
};
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...initialState, products: payload };
    default:
      return state;
  }
};
