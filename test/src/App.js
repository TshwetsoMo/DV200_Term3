import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header Component/Component-Header';
import Navbar from './Navbar Component/Component-Navbar';
import Footer from './Footer Component/Component-Footer';
import Landing from './Pages/landing';
import Products from './Pages/products';
import Checkout from './Pages/checkout';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Navbar/>
      
      
      
      </div><br></br>
      <div className='carousel'>
        <Header/>
        

      </div>
      <div className='page'>
        <br></br>
        <Landing/>
      </div>
      <div className='foot'>
        <Footer/>
      </div>
      
      
    </div>
  );
}

export default App;
