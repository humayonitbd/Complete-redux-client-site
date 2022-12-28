import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Main from "../../Layout/Main/Main";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import DashboardPage from "../../Pages/DashboardPage/DashboardPage";
import Home from "../../Pages/Home/Home/Home";
import ProductDetails from "../../Pages/Home/ProductDetails/ProductDetails";
import SigngleProductDetails from "../../Pages/Home/ProductDetails/SigngleProductDetails";
import Login from "../../Pages/Login/Login";
import MyOrdersPage from "../../Pages/MyOrdersPage/MyOrdersPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/home', element:<Home></Home>},
        {path:'/login', element:<Login></Login>},
        {path:'/signUp', element:<SignUp></SignUp>},
        {path:'/productDetails/:id', element:<PrivetRoutes><ProductDetails></ProductDetails></PrivetRoutes>,
        loader:({params})=> params.id
    },
    {path: '/product/paymant-page/:id', element:<SigngleProductDetails></SigngleProductDetails>}

    ]},
    {path:'/dashboard', element:<Dashboard></Dashboard>, children:[
        {path:'/dashboard', element:<DashboardPage></DashboardPage>},
        {path:'/dashboard/myOrders', element:<MyOrdersPage></MyOrdersPage>},
        {path:'/dashboard/allUsers', element:<AllUsers></AllUsers>}
    ]}

])