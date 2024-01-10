import React from 'react'
import Kao from "../../assets/icons/kao logo.png"
import Insta from "../../assets/icons/Vector (4).png"
import Fb from "../../assets/icons/Vector (3).png"
import Twiter from "../../assets/icons/Vector (5).png"

const Footer = () => {
  return (
   <>
   <footer className='p-3 pt-4' >
    <div className=' d-flex justify-content-center'>

    <img src={Kao} className='footer-logo pt-3'></img>
    </div>
    
   <div className='social-media gap-5 d-flex justify-content-center pt-3 ' >
   <img src={Insta}></img>
   <img src={Fb}></img>
   <img src={Twiter}></img>


   </div>
   <p className='text-center text-light pt-3'>Company Name   |   Email : kao.gmail.com.np   |   Phone: 984xxxxxxx   |   Place 0rder</p>
   <p className='text-center text-light'>© 2023  |  Privacy Policy  |  Made with passion by <span ><a>GreenMantis</a></span> |  This website is using cookies</p>
   </footer>
   </>
  )
}

export default Footer