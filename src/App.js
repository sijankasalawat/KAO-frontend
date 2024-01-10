
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './pages/component/Navbar';
import Footer from './pages/component/Footer';
import Blog from './pages/Blog';
import Process from './pages/Process'; 
import Login from './pages/login/Login.jsx';
import Product from './pages/products/Product_detail.jsx'
import Register from './pages/register/Register.jsx';
import Store from './pages/store/Store.jsx';
import AddToCart from './pages/addToCart/AddToCart.jsx';

function App() {
  return (
    <Router>
      <Navbar/>

       <Routes><Route path="/home" element={<HomePage/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/process" element={<Process/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>}/>
       <Route path="/products" element={<Product/>}/>
       <Route path="/store" element={<Store/>}/>
       <Route path="/cart" element={<AddToCart/>}/>
       

  
       </Routes>
       
       
     <Footer/>
     </Router>
  );
}

export default App;
