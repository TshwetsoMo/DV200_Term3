import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../App.css'

function Update() {
    const [clothesId, setClothesId] = useState('');
    const [clothesData, setClothesData] = useState({
        brand:'',
        name: '',
        size: '',
        price: ''
    });

    useEffect(() => {
        // Fetch product data based on productId when the component mounts
        if (clothesId) {
            fetch(`http:localhost/api/products/${clothesId}`)
                .then((response) => response.json())
                .then((data) => {
                    // Update the productData state with fetched data
                    setClothesData(data);
                })
                .catch((error) => {
                    console.error('Error fetching product data:', error);
                });
        }
    }, [clothesId]);

    const handleClothesIdChange = (event) => {
        setClothesId(event.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClothesData({
            ...clothesData,
            [name]: value,
        });
    };

    const handleUpdateClick = async () => {
        try {
            // Send a PUT or PATCH request to update the product data
            const response = await fetch(`/api/clothes/${clothesId}`, {
                method: 'PUT', // or 'PATCH' depending on your API
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers or authentication tokens here
                },
                body: JSON.stringify(clothesData),
            });

            if (response.ok) {
                // Product data has been successfully updated
                alert('Product data updated successfully');
            } else {
                // Handle errors here, e.g., product not found, server error, etc.
                alert('Error updating product data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='page'>
            <Container>
                <h1>Update Product</h1>
                <Form>
                    <Form.Label>
                        Product ID:
                        <input type="text" value={clothesId} onChange={handleClothesIdChange} />
                    </Form.Label>
                    <Form.Label>
                        Brand:
                        <textarea name="brand" value={clothesId} onChange={handleClothesIdChange} />
                    </Form.Label>
                    <Form.Label>
                        Name:
                        <input type="text" name="name" value={clothesId} onChange={handleClothesIdChange} />
                    </Form.Label>
                    <Form.Label>
                        Size:
                        <input type="text" name="price" value={clothesId} onChange={handleClothesIdChange} />
                    </Form.Label>
                    <Form.Label>
                        Price:
                        <input type="text" name="price" value={clothesId} onChange={handleClothesIdChange} />
                    </Form.Label>
                    
                    <button onClick={handleUpdateClick}>Update Product</button>
                </Form>
                
            </Container>
        </div>
        
    );
}

export default Update;