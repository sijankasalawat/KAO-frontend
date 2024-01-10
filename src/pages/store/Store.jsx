import React from "react";
import storeImg1 from "../../assets/images/580+CBTL+Frac+Pack+French+Roast 1.png";
import "../store/Store.css";
import cart from "../../assets/icons/bytesize_cart (1).png";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import img1 from "../../assets/images/Coffee-105.jpg";
import img2 from "../../assets/images/Coffee-51.jpg";
import img3 from "../../assets/images/Coffee-32.jpg";
import LikeButton from "../component/LikeButton.jsx";

const fadeImages = [
  {
    url: img1,
    caption: "First Slide",
  },
  {
    url: img2,
    caption: "Second Slide",
  },
  {
    url: img3,
    caption: "Third Slide",
  },
];

const Store = () => {
  return (
    <>
      <div className="store-main-body">
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}>
                <img
                  style={{ width: "100%", height: "70vh" }}
                  src={fadeImage.url}
                />
              </div>
            ))}
          </Fade>
        </div>
        {/* <div className='store-img'>
    <img src={storeImg1} alt="store image"/>
    </div> */}
<div className="store-container">


        <div className="container ">
          <h5 className="text-end pt-3">KAO Store</h5>
          <hr className="solid" />
          <div className="gallery col-12">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 image-container  mt-3">
                <div className="store-products p-1">
                  <div className="store-product-img">
                    <img src={storeImg1} alt="Combat Boots" />
                    <div className="image-text d-flex justify-content-end gap-2">
                      <Link to="/products">
                        {" "}
                        <img src={cart} />
                      </Link>

                      <LikeButton />
                    </div>
                  </div>
                  <h5 className="pt-3 text-dark">FRENCH ROAST</h5>
                  <h5 className="text-dark">$23.00</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 image-container  mt-3">
                <div className="store-products p-1">
                  <div className="store-product-img">
                    <img src={storeImg1} alt="Combat Boots" />
                    <div className="image-text d-flex justify-content-end gap-2">
                      <Link to="/products">
                        {" "}
                        <img src={cart} />
                      </Link>

                      <LikeButton />
                    </div>
                  </div>
                  <h5 className="pt-3 text-dark">FRENCH ROAST</h5>
                  <h5 className="text-dark">$23.00</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 image-container  mt-3">
                <div className="store-products p-1">
                  <div className="store-product-img">
                    <img src={storeImg1} alt="Combat Boots" />
                    <div className="image-text d-flex justify-content-end gap-2">
                      <Link to="/products">
                        {" "}
                        <img src={cart} />
                      </Link>

                      <LikeButton />
                    </div>
                  </div>
                  <h5 className="pt-3 text-dark">FRENCH ROAST</h5>
                  <h5 className="text-dark">$23.00</h5>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 image-container  mt-3">
                <div className="store-products p-1">
                  <div className="store-product-img">
                    <img src={storeImg1} alt="Combat Boots" />
                    <div className="image-text d-flex justify-content-end gap-2">
                      <Link to="/products">
                        {" "}
                        <img src={cart} />
                      </Link>

                      <LikeButton />
                    </div>
                  </div>
                  <h5 className="pt-3 text-dark">FRENCH ROAST</h5>
                  <h5 className="text-dark">$23.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Store;
