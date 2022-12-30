import React from 'react';
import { Link } from 'react-router-dom';

const HomeProductsDetails = ({product}) => {
    const {details, img, paid, name, price, _id} = product;
    return (
        <div>
           <div className="col">
                <div className="card">
                <img src={img} className="card-img-top h-75" alt="img" />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className='fw-semibold'>Price: ${price}</p>
                <p className="card-text">{details && details.slice(0, 100)}</p>
                {paid ? <><button className='btn btn-success w-100'>product sold</button></>:<><Link to={`/productDetails/${_id}`}><button className='btn btn-danger w-100'>Details more</button></Link></> 
                }
                </div>
                </div>
            
            </div>
        </div>
    );
};

export default HomeProductsDetails;