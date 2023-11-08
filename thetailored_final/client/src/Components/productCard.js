import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

const ProductCard = ({ clothes, onAddToCart }) => {
    const [addedToCart, setAddedToCart] = useState(false); //In this code, we introduced the addedToCart state variable and set it to false initially. When the "Add to Cart" button is clicked, we set addedToCart to true, which disables the button and changes its text to "Added to Cart." This prevents the user from adding the same item to the cart multiple times.
    //console.log(clothes);
    const handleDelete = (clothesID) => {
        console.log(clothesID);
        axios.delete('http://localhost:5002/api/clothes/' + clothesID)
    };

    // const [cart, setCart] = useState([]);
    const handleAddToCart = () => {
        onAddToCart(clothes);
        setAddedToCart(true); // Set the addedToCart state to true after clicking the button
        alert('Item added to cart');
    };

    return (
    <Card className='shadow' style={{width: '18rem', height: 'max-content', marginLeft:'10px', marginRight:'10px'}}>
        <Card.Body>
            <Card.Title>{clothes.name}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{clothes.brand}</Card.Subtitle>
            <Card.Text>
                <strong>Size:</strong>{clothes.size}<br/>
                <strong>Price:</strong>{clothes.price}<br/>
            </Card.Text>
            <Button variant = 'danger' onClick={() => handleDelete(clothes.id)}>Delete</Button>
            <Button variant='primary' onClick={() => handleAddToCart(clothes)} disabled={addedToCart}>
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </Button>
        </Card.Body>
    </Card>
  );
};

export default ProductCard


// const ProductCard = (props) => {

//     return (
    //     <div>
    //         <div className="productCard-con">
    //             {/* image  */}
    //             <div className="productCard-img">
    //                 <img src='' alt=""></img>
    //             </div>
    //             {/* text */}
    //             <div className="productCard-content">
    //                 <div className="productCard-info">
    //                     <h1>{props.brand}</h1>
    //                     <p>{props.name}</p>
    //                     <p>{props.size}</p>
    //                     <h2>R:{props.price}</h2>
    //                 </div>
    //                 <div className="productCard-buttons">
    //                     {/* <button>add to cart</button> */}
    //                     <Nav.Link href="/indipro" className="">
    //                         <Button variant="contained" sx={{padding:"10px 80px", borderRadius:"12px", backgroundColor:"#28A2D7"}}>View</Button>
    //                     </Nav.Link>
    //                     <Button  sx={{fontSize:"24px"}}>Cart</Button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )



// function productCard() {
//     const ProductCard = ({clothes, onDelete}) => {
//     //call the onDelete function with the sneaker ID or any identifier you need
//     const handleDelete = () => {
//         onDelete(clothes.id);
//     };
// }
  
// }
