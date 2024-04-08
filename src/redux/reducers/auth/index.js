import { ActionTypes } from "../../actions/action-types";

const initialState = {
    authToken :{}
};

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_AUTH_TOKEN:
            return {
               ...state,
                authToken: payload
            };
        default:
            return state;
    }
}