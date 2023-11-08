import React from 'react';
//import style from '../Components/Style.NewProducts.module.scss';
import NewProducts from '../NewProductsComponent/Component-NewProducts';
// import Header from '../Header Component/Component-Header';
// import Navbar from '../Navbar Component/Component-Navbar';
import Footer from '../Footer Component/Component-Footer';
import '../App.css';


function Landing() {

  return (<>
    {/* <div className='header'>
        <Navbar/>
      
      
      
      </div>
      <br></br>
      <div className='carousel'>
        <Header/>
        

      </div> */}
      
        <br></br>
        <div className='landing'>
          <NewProducts/>
        </div>
  </>)
}

export default Landing;