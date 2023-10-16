import React from 'react';
import '../App.css';
import style from '../NewProductsComponent/Style.NewProducts.module.scss'

function Products() {

  const products = [
        {
            name: 'Manfinity Sporsity Men Letter Graphic Colorblock Varsity Jacket Without Hoodie',
            price:'R500.00',
            rating: 4,
            image: 'https://img.ltwebstatic.com/images3_pi/2022/12/01/16698717803e4887a5533331f592d5d4b5874b1b5c_thumbnail_600x.jpg'
        },
        {
            name: 'Manfinity Sporsity Men Letter Graphic Contrast Collar Drop Shoulder Sweatshirt',
            price:'R439.99',
            rating: 4.5,
            image: 'https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png',
        },
        {
            name: 'Godspeed Utility Set',
            price:'R1500.00',
            rating: 4.5,
            image: 'https://moregodspeed.co.za/wp-content/uploads/2023/03/467a4f06-7f6e-48a3-85a4-161447edd9e6.jpeg',
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

  return (
    <div className='productsPage'>
        
        <div className='filter'>
            <p>filter</p>

        </div>
        <h1>Products</h1>
        <div className='products'>
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
          </div>
        </div>
    </div>
  )
}

export default Products