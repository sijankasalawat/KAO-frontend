import React from 'react'
import cart from "../../assets/icons/bytesize_cart (1).png"
import Kao from "../../assets/icons/kao logo.png"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className=" fixed-top pt-2 px-2">
    <div className="container d-flex justify-content-between align-items-center ">
        <div className='nav-logo'>
        <img src={Kao}></img>
           
        </div>
    
        <div className="nav-a d-flex gap-4 text-light">
          <Link  className="nav-link" id="home" to="/home">Home</Link>
          <Link className="nav-link" id="process" to="/process">Process</Link>
          <Link className="nav-link " id="blog" to="/blog" >Blog</Link>
          <Link to ="/store"className="nav-link " id="store" href="#" >Store</Link>
        </div>

        <div className='login-register d-flex text-light gap-2 '>
          <Link to="/login" >Login</Link> 
          /
          <Link to="/register" >Register</Link> 
          <Link to="/cart"><img src={cart} alt="cart" className='px-2' style={{height:"25px",}}/> </Link> </div>
     
  </div>

    </header>
  )
}

export default Navbar