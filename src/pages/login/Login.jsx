import React from "react";
import loginImg from "../../assets/images/Coffee-46.jpg";
import "../login/login.css";
import { Link } from "react-router-dom";
import kao from "../../assets/icons/kao logo.png"
const Login = () => {
  return (
    <>
    <div className="loginImage-back position-absolute" >
      <div className="backLoginImg">
       <img src={loginImg} alt="back image"/>
      </div>
      <div className="blank"  >
        hello
 
      </div>
    </div>
      <div className="login-page position-relative">

        <div className="main-container  d-lg-flex d-md-flex d-sm-block ">
          <div className="left-container">
         
          </div>
          <div className="right-container  d-flex justify-content-center pt-5">
            <form className=" m-3  p-3">
            <div className='d-flex justify-content-center pb-2'>
              <div className='kao-logos'>
                <img src={kao}/>
              </div>
              </div>
              <h2 className="text-center">Login</h2>
              <label className="text-white">Email</label>
              <input
                className="form-control mb-2"
                type="name"
                placeholder="Enter your email"
              />
              <label className="text-white">Password</label>
              <input
                className="form-control mb-2"
                type="name"
                placeholder="password "
              />
              <h6 className="text-end text-white pt-2"> forgot password</h6>
              <button className="btn  w-100 ">login</button>
              <h6 className="text-white pt-2">Don't have account? <Link to="/register"><span> Sign up</span></Link></h6>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
