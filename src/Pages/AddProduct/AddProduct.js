import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';


const AddProduct = () => {
    const addProductHandler=(e)=>{
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const price = from.price.value;
        const details = from.details.value;
        const image = from.image.files[0];
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`
        fetch(url,{
            method:'POST',
            body:formData,
        })
        .then(res =>res.json())
        .then(data =>{
            const img = data.data.display_url;
            const addProduct = {
                name,
                price,
                details,
                img
            }
            
            fetch('https://complete-redux-server-site.vercel.app/allProducts',{
                method:'POST',
                headers:{
                    "content-type": "application/json",
                },
                body:JSON.stringify(addProduct),
            })
            .then(res =>res.json())
            .then(data =>{
                if (data.acknowledged) {
                    toast.success("Product added successfull!!");
                    from.reset();
                    
                  }
            })
        })
        .catch(err =>console.log(err))
        
        
        // console.log(addProduct, url)
        


    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Add Product Page</h3>
            <Form onSubmit={addProductHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="name" name='name' placeholder="Enter product name" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" name='price' placeholder="product price" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDetails">
                <Form.Label>Product Details</Form.Label>
                <Form.Control type="text" name='details' placeholder="product details" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file" 
                accept='image/*' name='image' required/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Add-Product
            </Button>
            </Form>
        </div>
    );
};

export default AddProduct;