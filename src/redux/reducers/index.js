import { combineReducers } from "redux";
import { allUsers, ordersProductReduser, productsReducer, selecteProductsReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selecteProductsReducer,
    ordersProduct: ordersProductReduser,
    allUsers:allUsers
})

export default reducers;