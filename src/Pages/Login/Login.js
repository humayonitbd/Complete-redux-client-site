import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const loginHandler=(e)=>{
        e.preventDefault();
        console.log('hoase vai')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            toast.success("Login successfull!!")
            navigate(from, {replace: true})
        })
        .catch(err =>{
            toast.error(err.message)
        })
        console.log(email, password)
    }
    return (
        <div className="my-5 py-5 ">
            <h3 className="text-center fw-bold mb-5">Login</h3>
              <Form onSubmit={loginHandler} className="w-25 mx-auto p-2 border">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" className="w-100" type="submit">
                Submit
            </Button>
            </Form>
            <p className="text-center mt-3">Are you new user? <Link to="/signUP" className="text-danger">Sing-Up</Link></p>
        </div>
    );
};

export default Login;