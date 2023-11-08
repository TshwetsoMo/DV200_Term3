import React from 'react';
import '../App.css';
//import style from '../NewProductsComponent/Style.NewProducts.module.scss'
// import ProductCard from "../Components/productCard";
 //import Axios from 'axios';
 //import { useEffect } from 'react';
 import { useState } from 'react';
import Productlist from '../Components/productlist';

function Products() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log('Added to cart:', item);
    };
  
  return (
    <div className='productsPage'>
        
        {/* <div className='filter'>
            <p>filter</p>

        </div><br/><br/> */}
        <h1>Products</h1>
        <div className='products'>
          <Productlist onAddToCart={handleAddToCart}/>
          
        </div>
    </div> 
  )
}

export default Products

//first atempt:

  // const products = [
  //       {
  //           name: 'Product 1',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'src/NewProductsComponent/images/Baggy rip stop cargo pant - black.jpg'
  //       },
  //       {
  //           name: 'Product 2',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'src/NewProductsComponent/images/Worker chino relaxed - dk black.jpg',
  //       },
  //       {
  //           name: 'Product 3',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'src/NewProductsComponent/images/Worker chino relaxed - salute.jpg',
  //       },
  //       {
  //           name: 'Product 4',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'https://ae01.alicdn.com/kf/S27afb584dfc346cdbfada36f04b29117o/Men-s-Knitted-Pants-Autumn-Winter-Color-Matching-Acrylic-Knitted-Trousers-Casual-Pants-Men-Autumn-Winter.jpg',
  //       },
  //       {
  //           name: 'Product 5',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84CiR3FBU0a2fO3YqoLU3JQMzowqPbXqi1A&usqp=CAU',
  //       },
  //       {
  //           name: 'Product 6',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'https://img.ltwebstatic.com/images3_pi/2022/09/29/16644437357946afe5ce7aad0158cfe354891d1266_thumbnail_600x.jpg',
  //       },
  //       {
  //           name: 'Product 7',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrXa4ffy6DJHqllinQ_1SYA7f0yoKSJuH-Q&usqp=CAU',
  //       },
  //       {
  //           name: 'Product 8',
  //           price:'$19.99',
  //           rating: 4.5,
  //           image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-factorie/default/dwcbf69d7a/5298343/5298343-01-4.jpg?sw=640&sh=960&sm=fit',
  //       }
  //   ];

  // const [product, setProduct] = useState();
  // const [updateProducts, setUpdateProducts] = useState();

// // PRODUCT
    //  const [Brand, setBrand] = useState();
    //  const [Name, setName] = useState();
    //  const [Size, setSize] = useState();
    //  const [Price, setPrice] = useState();
    // // ---

    //  const [error, setError] = useState("");

    //  PRODUCT managemanet --- --- --- !!!
    //  useEffect(() => {
    //      Axios.get('http://localhost:5000/api/clothes/')
    //          .then(res => {
    //              let productData = res.data;
    //              console.log(productData);

    //              let renderProducts = productData.map((item) => <ProductCard key={item._id} id={item._id} brand={item.brand} name={item.name} size={item.size} price={item.price} />)

    //              setProduct(renderProducts);
    //              setUpdateProducts(false);

    //          })
    //          .catch(err => console.log(err));
    //  }, [updateProducts])

  {/* <div className={style.cardContainer}>
            {products.slice(0, 5).map((product, index) => (
              <div className={style.card} key={index}>
                <img className={style.image} src={product.image} alt={product.name} />
                <div className={style.cardBody}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className={style.ratingOverlay}>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div><br></br>
          <div className={style.cardContainer}>
            {products.slice(0, 5).map((product, index) => (
              <div className={style.card} key={index}>
                <img className={style.image} src={product.image} alt={product.name} />
                <div className={style.cardBody}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className={style.ratingOverlay}>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div><br></br>
          <div className={style.cardContainer}>
            {products.slice(0, 5).map((product, index) => (
              <div className={style.card} key={index}>
                <img className={style.image} src={product.image} alt={product.name} />
                <div className={style.cardBody}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className={style.ratingOverlay}>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div><br></br>
          <div className={style.cardContainer}>
            {products.slice(0, 5).map((product, index) => (
              <div className={style.card} key={index}>
                <img className={style.image} src={product.image} alt={product.name} />
                <div className={style.cardBody}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className={style.ratingOverlay}>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div><br></br>
          <div className={style.cardContainer}>
            {products.slice(5, 8).map((product, index) => (
              <div className={style.card} key={index}>
                <img className={style.image} src={product.image} alt={product.name} />
                <div className={style.cardBody}>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className={style.ratingOverlay}>
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
            </div> */}