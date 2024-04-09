import { ActionTypes } from "../../actions/action-types";

const initialState = {
  authToken: localStorage.getItem("authToken") || "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_AUTH_TOKEN:
      localStorage.setItem("authToken", payload);
      return {
        ...state,
        authToken: payload,
      };
    default:
      return state;
  }
};
