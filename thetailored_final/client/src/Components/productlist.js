import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './productCard';
import axios from 'axios';

const Productlist = ({ onAddToCart }) => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5002/api/clothes/')
      .then(result => setClothes(result.data))
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error, display an error message to the user, etc.
      });
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
//     <Row>
//       {clothes && clothes.length > 0 ? (
//         clothes.map((clothing) => (
//           <ProductCard key={clothing.id} id={clothing._id} clothes={clothing} />
//         ))
//       ) : (
//         <p>No clothes data available.</p>
//       )}
//     </Row>
//   );
// };
    <Row>
        {clothes.map((clothing) => (
            <ProductCard key = {clothing._id} id={clothing._id} clothes = {clothing} onAddToCart={onAddToCart}/>
        ))}
    </Row>
  );
};

export default Productlist;



  // const clothes = [
  //   {id: 1, brand: 'Nike', name: 'Sweatpants', size: 'Medium', price: 'R900'},
  //   {id: 2, brand: 'MKM', name: 'Baggy rip stop cargo pant', size: 'Medium', price: 'R500'},
  //   {id: 3, brand: 'DK', name: 'Worker chino relaxed', size: 'Medium', price: 'R800'},
  //   {id: 4, brand: 'MrPrice', name: 'Worker chino relaxed', size: 'Medium', price: 'R350'},
  //   {id: 5, brand: 'JB', name: 'Acrylic-Knitted-Trousers', size: 'Medium', price: 'R2000'},
  //   {id: 6, brand: 'Blck', name: 'Street track pant', size: 'Medium', price: 'R1100'},
  //   {id: 7, brand: 'MKM', name: 'Taupe Shacket', size: 'Medium', price: 'R1900'},
  //   {id: 8, brand: 'Truworths', name: 'TS Dynamic Puffer Gold Jacket', size: 'Medium', price: 'R2900'},
  //   {id: 9, brand: 'MKM', name: 'Taupe Smart Suede Aviator Jacket', size: 'Medium', price: 'R2000'},
  //   {id: 10, brand: 'MKM', name: 'Terracotta Corduroy Relaxed Shirt', size: 'Medium', price: 'R400'},
  // ]