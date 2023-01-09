import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../redux/actions/actionsProduct";

const AllUsers = () => {
  const users = useSelector((state) => state.allUsers.users);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const fetchAllUsers = async () => {
    const response = await axios
      .get(`https://complete-redux-server-site.vercel.app/users`)
      .catch((err) => console.log(err));
    dispatch(allUsers(response.data));
  };
  useEffect(() => {
    fetchAllUsers();
  }, [!loading]);
  console.log("orders", users);
  const deleteUsers=(id)=>{
    fetch(`https://complete-redux-server-site.vercel.app/users/${id}`,{
      method:"DELETE"
    })
    .then(res =>res.json())
    .then(data =>{
      if (data.deletedCount) {
        setLoading(false);
        toast.success("Deleted  users successfull!!");
        console.log(data)
      }
    })
  }
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => (
            <tr key={user._id}>
              <td>{idx}</td>
              <td>
                <span className="fs-5 fw-semibold"></span>
                {user.userName}
              </td>
              <td className="">{user.userEmail}</td>
              <td className="">{user.role}</td>
              <td className=''><button onClick={()=>deleteUsers(user._id)} className='btn btn-danger'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllUsers;
