import axios from 'axios';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { odersProduct } from '../../redux/actions/actionsProduct';

const MyOrdersPage = () => {
    const orders = useSelector((state) => state.ordersProduct.orders)
   
    const dispatch = useDispatch();
    const fetchOrdersProducts = async()=>{
        const response = await axios.get("http://localhost:5000/myOrders")
        .catch((err)=>console.log(err))
        dispatch(odersProduct(response.data))
    }
    useEffect(()=>{
        fetchOrdersProducts();
    },[])
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