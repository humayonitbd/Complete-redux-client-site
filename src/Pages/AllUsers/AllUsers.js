import axios from 'axios';
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../redux/actions/actionsProduct';

const AllUsers = () => {
    const users = useSelector((state) => state.allUsers.users)
   
    const dispatch = useDispatch();
    const fetchAllUsers = async()=>{
        const response = await axios.get(`http://localhost:5000/users`)
        .catch((err)=>console.log(err))
        dispatch(allUsers(response.data))
    }
    useEffect(()=>{
        fetchAllUsers();
    },[])
    console.log("orders",users)
    return (
        <div>
        <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
            {
            users?.map((user, idx) =>
              <tr key={user._id}>
                <td>{idx}</td>
                <td>
                    <span className='fs-5 fw-semibold'></span>
                    {user.userName}
                </td>
                <td className=''>{user.userEmail}</td>
                <td className=''>{user.role}</td>
                {/* <td className=''><button className='btn btn-danger me-3'>Delete</button></td> */}
              </tr>
              
            )
        }
            </tbody>
          </Table>

        
       
    </div>
    );
};

export default AllUsers;