import React from 'react';
import './App.css';
import Landing from '../src/Pages/landing';
import Products from './Pages/products';
import Navbar from './Components/navbar';
import Indiproduct from './Components/indiproduct';
import Header from './Components/carousel';
import style from './Components/Style.Header.module.scss';

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
        <Indiproduct/>
      </div>
      <div className='foot'>

      </div>
      
      
    </div>
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */