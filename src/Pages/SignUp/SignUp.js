import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const SignUp = () => {
    const {user, createUser, profileUpdate} = useContext(AuthContext);
    const navigate = useNavigate();
    const signUpHandler=(e)=>{
        e.preventDefault();
        console.log('hoase vai')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            toast.error("Your password must be 6 currencter!!!!")
        }
        const userInfo = {
            name,
            email,
            password
        }
        console.log(name, email, password, userInfo)
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            profileUpdate(name)
            .then(()=>console.log('name updated'))
            .catch(err =>console.log(err))
            form.reset();
            toast.success("Create account successfull!!")
            navigate('/')

        })
        .catch(err =>console.log(err))
    }
    return (
        <div className="my-5 py-5 ">
            <h3 className="text-center fw-bold mb-5">Sign-Up</h3>
              <Form onSubmit={signUpHandler} className="w-25 mx-auto p-2 border">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
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
            <p className="text-center mt-3">You have already account? <Link to="/login" className="text-danger">Loign</Link></p>
        </div>
    );
};

export default SignUp;