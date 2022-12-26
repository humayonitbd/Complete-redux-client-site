import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { selectedProduct } from '../../../redux/actions/actionsProduct';
import SigngleProductDetails from './SigngleProductDetails';

const ProductDetails = () => {
    const product = useSelector((state)=> state.product);
    const {details, img, name, price, _id} = product;
    const id = useLoaderData();
    console.log(id, product)

    const dispatch = useDispatch();
    const fetchProductDetails = async()=>{
        const respons = await axios.get(`http://localhost:5000/product/${id}`)
        .catch((err)=>console.log(err))

        dispatch(selectedProduct(respons.data))

    }
    useEffect(()=>{
        if(id && id !== "") fetchProductDetails();
    },[id])
    return (
        <div className='my-5 mx-md-5 mx-sm-2 mx-1'>
            {
                Object.keys(product).length === 0 ?(<div>...Loading</div>):(<div classNameName='my-5'>
                <div className="card mb-3">
             <div className="row g-0">
                 <div className="col-md-6">
                 <img src={img} className="img-fluid rounded-start" alt="..."/>
                 </div>
                 <div className="col-md-6">
                 <div className="card-body">
                     <h5 className="card-title">{name}</h5>
                     <p>Price: ${price}</p>
                     <p className="card-text">{details}</p>
                     <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                 </div>
                <Link to={`/product/paymant-page/${_id}`}><button className='btn mb-4 ms-3 w-50 btn-danger'>Add to Cart</button></Link>
                 </div>
             </div>
                </div>
             </div>)
            }
        </div>
        
    );
};

export default ProductDetails;