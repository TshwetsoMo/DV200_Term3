import React from 'react';
//import style from '../Components/Style.NewProducts.module.scss';
import NewProducts from '../NewProductsComponent/Style.NewProducts.module.scss';
import Header from '../Header Component/Component-Header';
import Navbar from '../Navbar Component/Component-Navbar';
import '../App.css';


function Landing() {

  return (<>
    <div className='header'>
        <Navbar/>
      
      
      
      </div><br></br>
      <div className='carousel'>
        <Header/>
        

      </div>
    <div className='landing'>
      <NewProducts/>
    </div>
  </>)
}

export default Landing;