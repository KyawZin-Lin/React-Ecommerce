import { ActionTypes } from "../action-types";


export const fetchProducts=(products)=>{
    return{
        type: ActionTypes.FETCH_PRODUCTS,
        payload: products
    }
}

export const addToCart=(addToCartItems)=>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload: addToCartItems
    }
}

export const removeCartItem =(item)=>{
    return {
        type:ActionTypes.REMOVE_CART_ITEM,
        payload:item
    }
}