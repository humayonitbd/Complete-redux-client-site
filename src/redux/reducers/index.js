import { combineReducers } from "redux";
import { ordersProductReduser, productsReducer, selecteProductsReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selecteProductsReducer,
    ordersProduct: ordersProductReduser,
})

export default reducers;