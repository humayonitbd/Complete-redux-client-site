import { combineReducers } from "redux";
import { allUsers, ordersProductReduser, paymentProductsReducer, productsReducer, selecteProductsReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selecteProductsReducer,
    ordersProduct: ordersProductReduser,
    allUsers:allUsers,
    paymentProduct: paymentProductsReducer
})

export default reducers;