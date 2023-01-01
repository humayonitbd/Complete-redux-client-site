import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { odersProduct } from "../../redux/actions/actionsProduct";

const MyOrdersPage = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const orders = useSelector((state) => state.ordersProduct.orders);

  const dispatch = useDispatch();
  const fetchOrdersProducts = async () => {
    const response = await axios
      .get(
        `https://complete-redux-server-site.vercel.app/myOrders?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("sendToken")}`,
          },
        }
      )
      .catch((err) => console.log(err));
    dispatch(odersProduct(response.data));
  };
  useEffect(() => {
    fetchOrdersProducts();
  }, [user?.email, !loading]);
  console.log("orders", orders);

  const handlerBtn = (ids) => {
    console.log(ids);

    fetch(`https://complete-redux-server-site.vercel.app/myOrdersPay`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Paid successfull!!");
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (id) => {
    fetch(`https://complete-redux-server-site.vercel.app/myOrders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Deleted successfull!!");
          setLoading(false);
        }
      });
  };
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
          {orders?.length === 0 ? (
            <h3 className="texr-center mt-4">No items ,please product curt.</h3>
          ) : (
            orders?.map((order, idx) => (
              <tr key={order._id}>
                <td>{idx}</td>
                <td>
                  <img
                    src={order.productImage}
                    className="rounded-circle me-3"
                    style={{ height: "80px", width: "80px" }}
                    alt=""
                  />
                  <span className="fs-5 fw-semibold">{order.productName}</span>
                </td>
                <td className="text-center">${order.productPrice}</td>
                <td className="">
                  <button
                    onClick={() => deleteHandler(order._id)}
                    className="btn btn-danger me-3"
                  >
                    Delete
                  </button>
                  <Link>
                    {order.paid ? (
                      <>
                        <button className="btn btn-success">paid</button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            handlerBtn({ idd: order.productId, id: order._id })
                          }
                          className="btn btn-primary"
                        >
                          Pay
                        </button>
                      </>
                    )}
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrdersPage;
