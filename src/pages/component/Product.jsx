import React from 'react'
import img1 from "../../assets/images/580+CBTL+Frac+Pack+French+Roast 1.png"
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <>
    <div className='container'>
        <div className='col-12'>
            <div className='row '>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Link to="/products">
                        
                    <div className='products m-2'>
                        <div className='productImg d-flex justify-content-center'>
                            <img src={img1}/>

                        </div>
                        <h5 className='pt-3'>
                        FRENCH ROAST
                        </h5>
                        <h5>
                        $23.00
                        </h5>

                    </div></Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Link to="/products">
                        
                    <div className='products m-2'>
                        <div className='productImg d-flex justify-content-center'>
                            <img src={img1}/>

                        </div>
                        <h5 className='pt-3'>
                        FRENCH ROAST
                        </h5>
                        <h5>
                        $23.00
                        </h5>

                    </div></Link>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12'>
                    <Link to="/products">
                        
                    <div className='products m-2'>
                        <div className='productImg d-flex justify-content-center'>
                            <img src={img1}/>

                        </div>
                        <h5 className='pt-3'>
                        FRENCH ROAST
                        </h5>
                        <h5>
                        $23.00
                        </h5>

                    </div></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product