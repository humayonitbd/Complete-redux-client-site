import {ActionType} from "../contants/actionsTypes";
export const setProducts = (products) =>{
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) =>{
    return{
        type:ActionType.SELECTED_PRODUCTS,
        payload: product,
    }
}
export const odersProduct = (orders) =>{
    return{
        type:ActionType.ORDERS_PRODUCTS,
        payload: orders,
    }
}