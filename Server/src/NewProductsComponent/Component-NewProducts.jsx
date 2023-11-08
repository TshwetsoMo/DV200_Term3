import React from "react";
import style from "./Style.NewProducts.module.scss";

function NewProducts() {
    const products = [
        {
            name: 'Product 1',
            price:'$19.99',
            rating: 4.5,
            image: 'src/NewProductsComponent/images/Baggy rip stop cargo pant - black.jpg'
        },
        {
            name: 'Product 2',
            price:'$19.99',
            rating: 4.5,
            image: 'src/NewProductsComponent/images/Worker chino relaxed - dk black.jpg',
        },
        {
            name: 'Product 3',
            price:'$19.99',
            rating: 4.5,
            image: 'src/NewProductsComponent/images/Worker chino relaxed - salute.jpg',
        },
        {
            name: 'Product 4',
            price:'$19.99',
            rating: 4.5,
            image: 'https://ae01.alicdn.com/kf/S27afb584dfc346cdbfada36f04b29117o/Men-s-Knitted-Pants-Autumn-Winter-Color-Matching-Acrylic-Knitted-Trousers-Casual-Pants-Men-Autumn-Winter.jpg',
        },
        {
            name: 'Product 5',
            price:'$19.99',
            rating: 4.5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84CiR3FBU0a2fO3YqoLU3JQMzowqPbXqi1A&usqp=CAU',
        },
        {
            name: 'Product 6',
            price:'$19.99',
            rating: 4.5,
            image: 'https://img.ltwebstatic.com/images3_pi/2022/09/29/16644437357946afe5ce7aad0158cfe354891d1266_thumbnail_600x.jpg',
        },
        {
            name: 'Product 7',
            price:'$19.99',
            rating: 4.5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrXa4ffy6DJHqllinQ_1SYA7f0yoKSJuH-Q&usqp=CAU',
        },
        {
            name: 'Product 8',
            price:'$19.99',
            rating: 4.5,
            image: 'https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-factorie/default/dwcbf69d7a/5298343/5298343-01-4.jpg?sw=640&sh=960&sm=fit',
        }
    ];

    return(<>
      <h1 style={{color:'black'}}>New Arrivals</h1>
      <div className={style.crdContainer}>
        <div className={style.crd}>
          <div className={style.img}></div>
          <h2>Baggy Rip Stop Cargo Pant</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={style.crd}>
          <div className={style.img}></div>
          <h2>Baggy Rip Stop Cargo Pant</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={style.crd}>
          <div className={style.img}></div>
          <h2>Baggy Rip Stop Cargo Pant</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <br></br>
      <h1 style={{color:'black'}}>Best Sellers</h1><br></br>
      <div className={style.cardContainer}>
        {products.slice(3, 8).map((product, index) => (
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
      </div>
    </>)
}

export default NewProducts;