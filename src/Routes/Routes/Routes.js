import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/Home/ProductDetails/ProductDetails";
import SigngleProductDetails from "../../Pages/Home/ProductDetails/SigngleProductDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/login', element:<Login></Login>},
        {path:'/signUp', element:<SignUp></SignUp>},
        {path:'/productDetails/:id', element:<ProductDetails></ProductDetails>,
        loader:({params})=> params.id
    },
    {path: '/product/paymant-page/:id', element:<SigngleProductDetails></SigngleProductDetails>}

    ]}
])