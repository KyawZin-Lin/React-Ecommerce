import { ActionTypes } from "../action-types";

export const fetchTownships = (townships) => {
    return{
        type: ActionTypes.FETCH_TOWNSHIPS,
        payload: townships
    }
};
