import { ActionTypes } from "../../actions/action-types";

const initialState = {
  townships: [],
};

export const townshipReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_TOWNSHIPS:
      return {
        ...state,
        townships: payload,
      };
    default:
      return state;
  }
};
