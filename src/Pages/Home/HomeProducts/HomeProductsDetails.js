import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin/useAdmin';

const HomeProductsDetails = ({product, deletehandler}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
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
                {
                    isAdmin === 'admin' ? <><button onClick={()=>deletehandler(_id)} className='btn btn-danger w-50 me-5'>Delete</button><Link to={`/product/${_id}`}><button  className='btn btn-success w-25'>Edit</button></Link></>:<>
                    {paid ? <><button className='btn btn-success w-100 '>product sold</button></>:<><Link to={`/productDetails/${_id}`}><button className='btn btn-danger w-100'>Details more</button></Link></> 
                }
                    </>
                }
                {/* {paid ? <><button className='btn btn-success w-100'>product sold</button></>:<><Link to={`/productDetails/${_id}`}><button className='btn btn-danger w-100'>Details more</button></Link></> 
                } */}
                </div>
                </div>
            
            </div>
        </div>
    );
};

export default HomeProductsDetails;