import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold text-danger'>FackShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/home'>Home</Link></li>
            <li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/login'>login</Link></li>
            <li className="nav-item">
            <Link className='nav-link fs-5 fw-semibold' to='/signUp'>Sign-up</Link></li>
            <Button className='bg-danger fs-5 border-none fw-semibold'>log out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;