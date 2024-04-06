import { combineReducers } from "redux";
import { sliderReducer } from "./slider";
import { addToCartReducer, productsReducer } from './product/index';

export const reducers = combineReducers({
  sliders: sliderReducer,
  products :productsReducer,
  addToCart :addToCartReducer,
});
