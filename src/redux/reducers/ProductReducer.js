
import { ActionType } from "../contants/actionsTypes";

const initialState = {
    products: [],
}
export const productsReducer =(state = initialState, {type, payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCTS:
            
           return {...state, products:payload};
    
        default:
            return state;
    }

}

export const selecteProductsReducer =(state = initialState, {type, payload})=>{
    switch (type) {
        case ActionType.SELECTED_PRODUCTS:
            
          return{
            ...state, ...payload
          }
    
        default:
            return state;
    }
}

export const ordersProductReduser =(state = initialState, {type, payload})=>{
    switch (type) {
        case ActionType.ORDERS_PRODUCTS:
            
           return {...state, orders:payload};
    
        default:
            return state;
    }

}

export const allUsers =(state = initialState, {type, payload})=>{
    switch (type) {
        case ActionType.ALL_USERS:
            
           return {...state, users:payload};
    
        default:
            return state;
    }

}

export const paymentProductsReducer =(state = initialState, {type, payload})=>{
    switch (type) {
        case ActionType.PAYMENT_PRODUCT:
            
          return{
            ...state, ...payload
          }
    
        default:
            return state;
    }
}