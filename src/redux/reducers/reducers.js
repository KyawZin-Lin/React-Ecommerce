import { combineReducers } from "redux";
import { sliderReducer } from "./slider";
import { addToCartReducer, productsReducer, } from './product/index';
import { authReducer } from './auth/index';
import { townshipReducer } from "./township";


export const reducers = combineReducers({
  sliders: sliderReducer,
  products :productsReducer,
  addToCart :addToCartReducer,
  getToken : authReducer,
  townships :townshipReducer
  // removeCartItemReducer : removeCartItemReducer,
});
