import React from 'react'
import style from './Style.NewProducts.module.scss';

function Indiproduct() {
  return (
    <div className='Indiprod'>
        <h1>Product View</h1>
        <div className={style.prodimg}>

        </div>
        <div className='Proddetails'>
            <h1>Product Name</h1>
            <p>details</p>
            <h2>Sizes:</h2>
            <h2>Colours:</h2>
            <br></br>
            <button className='atc'>Add to Cart</button>
        </div>

    </div>
  )
}

export default Indiproduct