import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header Component/Component-Header'; // Correct component paths
import Navbar from './Components/navbar'; // Correct component paths
import Footer from './Footer Component/Component-Footer'; // Correct component paths
import Landing from './Pages/landing';
import Products from './Pages/products';
import Checkout from './Pages/checkout';
import Login from './Pages/login';
import Admin from './Pages/admin';
import Register from './Pages/register';
import Create from './Pages/create';
import READ from './Pages/read';
import Update from './Pages/update';
import Delete from './Pages/delete';

function App() {
  // const [product, setProduct] = useState({
  //   Brand: '',
  //   Name: '',
  //   Size: '',
  //   Price: '',
  //   Description: ''
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setProduct((prevProduct) => ({
  //     ...prevProduct,
  //     [name]: value,
  //   }));
  // };

  return (
    <div className="App">
        <Router>
      <div>
        <div className='header'>
          <Navbar />
        </div>
        <br />
        <div className='carousel'>
          <Header />
        </div >
        {/* Your Navbar and other components can go here */}
        
        {/* Define your routes using the Routes component */}
        <div className='page'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} /> 
            <Route path="/Create" element={<Create />} />
            <Route path="/Read" element={<READ />} />
            <Route path="/Update" element={<Update />} /> 
            <Route path="/Delete" element={<Delete />} /> 
          </Routes>
        </div>
          <div className='foot'>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

