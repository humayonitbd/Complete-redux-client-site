import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className='mainDashboardSection my-5 mx-lg-5 mx-1 mx-sm-2'>
                <div className='dashboardLeftSide bg-secondary py-3 px-2 '>
            <Link className='nav-link fs-5 d-inline bg-danger text-white px-4 py-2 rounded fw-semibold' to='/dashboard/myOrders'>My Orders</Link>
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