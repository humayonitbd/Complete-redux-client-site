import React from 'react';
import dashboardImg from '../../assete/Dashboard-img/welcome.jpg';

const DashboardPage = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='my-5'>
                <img src={dashboardImg} className="" alt="" />
            </div>
        </div>
    );
};

export default DashboardPage;