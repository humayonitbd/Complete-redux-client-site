import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditPage = () => {
    const product = useLoaderData();
    const { details, img, name, price, _id } = product;
    const navigate = useNavigate();
    console.log(product, 'edit product')
    const updateProductHandler=(e)=>{
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const price = from.price.value;
        const details = from.details.value;
        const editProduct ={
            name,
            price,
            details
        }
        console.log(editProduct)
        fetch(`https://complete-redux-server-site.vercel.app/product/${_id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(editProduct)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount){
                toast.success("product is updated!!")
                navigate('/')
            }
        })

    }
    return (
        <div className='w-50 mx-auto my-5'>
        <h3>Add Product Page</h3>
        <Form onSubmit={updateProductHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="name" defaultValue={name} name='name' placeholder="Enter product name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="number" defaultValue={price} name='price' placeholder="product price" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Product Details</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" defaultValue={details} name='details' placeholder="product details" required/>
      </Form.Group>
        <Button variant="primary" type="submit">
            Update-product
        </Button>
        </Form>
    </div>
    );
};

export default EditPage;