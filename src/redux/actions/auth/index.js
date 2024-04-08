import { ActionTypes } from "../action-types";


export const getAuthToken=(token)=>{
    return{
        type: ActionTypes.GET_AUTH_TOKEN,
        payload: token
    }
}