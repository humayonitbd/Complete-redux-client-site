// import axios from "axios";

// const { createSlice, createAsyncThunk} = require("@reduxjs/toolkit");

// export const fetchAllProducts = createAsyncThunk("products/fetchProducts", async () => {
//     const res = await axios.get("http://localhost:5000/allProducts");
//     return res.data;
// })


// const productsSlice = createSlice({
//     name: "products",
//     initialState: {
//         isLoading:false,
//         products:[],
//         error:null
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchAllProducts.pending, (state)=>{
//             state.isLoading = true;
//         });
//         builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
//             state.isLoading = false;
//             state.products = action.payload;
//             state.error = null;
//         });
//         builder.addCase(fetchAllProducts.rejected, (state, action)=>{
//             state.isLoading = false;
//             state.products = [];
//             state.error = action.error.message;
//         });

//     }
// })

// export default productsSlice.reducer;