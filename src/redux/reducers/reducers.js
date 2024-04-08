import { combineReducers } from "redux";
import { sliderReducer } from "./slider";
import { addToCartReducer, productsReducer, } from './product/index';
import { authReducer } from './auth/index';


export const reducers = combineReducers({
  sliders: sliderReducer,
  products :productsReducer,
  addToCart :addToCartReducer,
  getToken : authReducer
  // removeCartItemReducer : removeCartItemReducer,
});
