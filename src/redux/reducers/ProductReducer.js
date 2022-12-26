
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