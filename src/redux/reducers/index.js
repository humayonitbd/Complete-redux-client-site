import { combineReducers } from "redux";
import { productsReducer, selecteProductsReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selecteProductsReducer,
})

export default reducers;