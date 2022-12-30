import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const logoutHandler=()=>{
     logOut()
     .then(() =>{
        toast.success("LogOut successfull!!")
     })
     .catch(err =>console.log(err))
  }
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Link className='nav-link'><Navbar.Brand className='fw-bold text-danger'>FackShop</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/home'>Home</Link></li>
            { user?.email ? <><li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/dashboard'>Dashboard</Link></li><Button onClick={logoutHandler} className='bg-danger fs-5 border-none fw-semibold'>log out</Button></> : <><li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/login'>login</Link></li>
            <li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/signUp'>Sign-up</Link></li>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;