import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../redux/actions/actionsProduct';
import HomeProductsDetails from './HomeProductsDetails';

const HomeProducts = () => {
    const products = useSelector((state) => state.allProducts.products)
   
    const dispatch = useDispatch();
    const fetchProducts = async()=>{
        const response = await axios.get("http://localhost:5000/allProducts")
        .catch((err)=>console.log(err))
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("products",products)
    return (
        <div className='row my-5 mx-md-5 mx-1 mx-sm-2 row-cols-1 row-cols-md-3 row-cols-sm-2 g-4'>
            {
                products?.map(product =><HomeProductsDetails key={product._id} product={product}></HomeProductsDetails>)
            }
        </div>
    );
};

export default HomeProducts;