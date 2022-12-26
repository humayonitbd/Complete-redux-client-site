import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center bg-dark text-white py-5'>
           <div className='d-flex justify-content-center'>
           <div className='d-flex'>
           <Link className='nav-link me-4'>Home</Link>
           <Link className='nav-link me-4'>About</Link>
           <Link className='nav-link me-4'>Details</Link>
           <Link className='nav-link me-4'>More us</Link>
           <Link className='nav-link me-4'>Contact us</Link>
            
           </div>
           </div>
           <p className='mt-3'>@copy-right Humayon Forid-2022</p>
        </div>
    );
};

export default Footer;