import React from 'react';
import { useState } from 'react';
import '../App.css';

function Checkout() {
    // Sample data for items in cart
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', price: 10.99 },
        { id: 2, name: 'Item 2', price: 5.49 },
        // ... add more items as needed
    ]);

    // Calculate total
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    };

    const handleBuyClick = () => {
        // Here you'd handle the purchase process, e.g., calling an API
        alert('Purchase completed!');
    };
  return (<>
    <div className='checkoutPage'>
        <h1>Checkout</h1>
        <div className='form'>
            <ul>
                {cartItems.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price.toFixed(2)}
                </li>
                ))}
            </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button onClick={handleBuyClick}>Buy</button>
        </div>
    </div>
    
    
  </>)
}

export default Checkout