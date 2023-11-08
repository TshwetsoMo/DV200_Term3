import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'; // Import Form from 'react-bootstrap'
import axios from 'axios';

function Create() {

    //const navigate = useNavigate();

    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');

  const handleSubmit = async () => {
    const payload = {
      brand: brand,
      name: name,
      size: size,
      price: price,
    };

    try {
      const response = await axios.post('http://localhost:5002/api/clothes/', payload);
      console.log('Clothes data submitted', response.data);
      //navigate('/READ')
    } catch (error) {
      console.error('Error submitting clothes data');
    }
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="brand">
            <Form.Label style={{color:'white'}}>Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)} // Fix the onChange event handler
              required
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label style={{color:'white'}}>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Fix the onChange event handler
              required
            />
          </Form.Group>
          <Form.Group controlId="size">
            <Form.Label style={{color:'white'}}>Size</Form.Label>
            <Form.Control
              type="text"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)} // Fix the onChange event handler
              required
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label style={{color:'white'}}>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)} // Fix the onChange event handler
              required
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Create;