import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';
import './Dashboard.css'

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const [isAdmin] = useAdmin(user?.email);
    // // const {isAdmin} = isAdminvai;
    console.log(isAdmin)
    return (
        <div>
            <Header></Header>
            <div className='mainDashboardSection my-5 mx-lg-5 mx-1 mx-sm-2'>
                <div className='dashboardLeftSide bg-secondary py-3 px-2 '>
                    {
                        isAdmin === 'admin' ? <><p className='d-inline d-lg-inline-block'><Link className='nav-link fs-5 d-inline bg-danger text-white px-4 py-2 rounded fw-semibold' to='/dashboard/allUsers'>All Users</Link></p><p className='d-inline d-lg-inline-block'><Link className='nav-link fs-5 d-inline bg-danger text-white px-4 py-2 rounded fw-semibold' to='/dashboard/addProduct'>Add Product</Link></p></>:<><p className='mb-4 me-3 d-inline d-lg-inline-block'><Link className='nav-link fs-5 d-inline bg-danger text-white px-4 py-2 rounded fw-semibold' to='/dashboard/myOrders'>My Orders</Link></p></>
                    }
            
            
                </div>
                <div className='dashboardRighttSide ps-lg-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;