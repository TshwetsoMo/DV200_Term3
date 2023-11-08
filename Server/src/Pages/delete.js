import React, { useState } from 'react';

function Delete() {
    const [clothesId, setClothesId] = useState('');

    const handleClothesIdChange = (event) => {
        setClothesId(event.target.value);
    };

    const handleDeleteClick = async () => {
        try {
            // Send a DELETE request to your backend API with the productId
            const response = await fetch(`http://localhost:5000/api/clothes/${clothesId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers or authentication tokens here
                },
            });

            if (response.ok) {
                // Product has been successfully deleted
                alert('Product deleted successfully');
            } else {
                // Handle errors here, e.g., product not found, server error, etc.
                alert('Error deleting product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Delete Product</h1>
            <label>
                Product ID:
                <input type="text" value={clothesId} onChange={handleClothesIdChange} />
            </label>
            <button onClick={handleDeleteClick}>Delete Product</button>
        </div>
    );
}

export default Delete;