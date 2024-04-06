import { ActionTypes } from "../../actions/action-types";

const initialState = {
  sliders: [],
};

export const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_SLIDERS:
      return { ...initialState, sliders: payload };
    default:
      return state;
  }
};
