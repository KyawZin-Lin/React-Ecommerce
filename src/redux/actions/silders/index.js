import { ActionTypes } from "../action-types";


export const fetchSliders=(sliders)=>{
    return{
        type: ActionTypes.FETCH_SLIDERS,
        payload: sliders
    }
}