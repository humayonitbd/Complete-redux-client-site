import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { odersProduct } from '../../redux/actions/actionsProduct';

const MyOrdersPage = () => {
    const {user} = useContext(AuthContext)
    const orders = useSelector((state) => state.ordersProduct.orders)
   
    const dispatch = useDispatch();
    const fetchOrdersProducts = async()=>{
        const response = await axios.get(`http://localhost:5000/myOrders?email=${user?.email}`,{
          headers:{
          authorization:`bearer ${localStorage.getItem('sendToken')}`
       },
        })
        .catch((err)=>console.log(err))
        dispatch(odersProduct(response.data))
    }
    useEffect(()=>{
        fetchOrdersProducts();
    },[user?.email])
    console.log("orders",orders)
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product image/Name</th>
                    <th>Product price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                orders?.map((order, idx) =>
                  <tr key={order._id}>
                    <td>{idx}</td>
                    <td>
                        <img src={order.productImage} className="rounded-circle me-3" style={{height: '80px', width: '80px'}} alt="" />
                        <span className='fs-5 fw-semibold'>{order.productName}</span>
                    </td>
                    <td className='text-center'>${order.productPrice}</td>
                    <td className=''><button className='btn btn-danger me-3'>Delete</button><button className='btn btn-primary'>Pay</button></td>
                  </tr>
                  
                )
            }
                </tbody>
              </Table>

            
           
        </div>
    );
};

export default MyOrdersPage;