import React from 'react'
import loginImgs from "../../assets/images/Coffee-46.jpg"
import kao from "../../assets/icons/kao logo.png"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
    <div className="loginImage-back position-absolute" >
      <div className="backLoginImg">
       <img src={loginImgs} alt="back-image"/>
      </div>
      <div className="blank"  >
        hello
 
      </div>
    </div>
      <div className="login-page position-relative">

        <div className="main-container  d-lg-flex d-md-flex d-sm-block ">
          <div className="left-container">
         
          </div>
          <div className="right-container  d-flex justify-content-center pt-2">
            <form className=" m-3  p-3">
              <div className='d-flex justify-content-center pb-2'>
              <div className='kao-logos'>
                <img src={kao}/>
              </div>
              </div>
             
              <h2 className='text-center'>Register</h2>
              <label className="text-white">Full Name</label>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Enter your full name"
              />
              <label className="text-white">Email</label>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Enter your email"
              />
               <label className="text-white">Phone Number</label>
              <input
                className="form-control mb-2"
                type="name"
                placeholder="Enter your phone number"
              />
              <label className="text-white">Password</label>
              <input
                className="form-control mb-2"
                type="name"
                placeholder="password "
              />
              <h6 className="text-end text-white"> forgot password</h6>
              <button className="btn  w-100  ">login</button>
              <h6 className="text-white pt-2">Login already? <Link to="/login" className='links'>Sign in</Link></h6>
            </form>
          </div>
        </div>
      </div>
    </>
    );
}

export default Register