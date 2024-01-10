import React from "react";
// import backgroundVideo from "../assets/videos/bg-video.mp4";
import product12 from "../assets/images/Group 281.png";
import backgroundImage from "../assets/images/Rectangle 284.png"
import img1 from "../assets/images/Coffee-46.jpg"
import img2 from "../assets/images/Coffee-105.jpg"
import img3 from "../assets/images/Coffee-80.jpg"
import Product from "./component/Product";


const HomePage = () => {
  return (
    <>
      <div className="back-video position-absolute">
        {/* <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video> */}
        <img src={backgroundImage} alt="background"/>
      </div>
      <div className="position-relative p-4 m-3">
        <h3 className="mt-5">Welcome to KAO</h3>
        <h1 className="col-4">Organic Coffee from Himalayan</h1>
        <button className="btn1 p-2 px-3">Explore more</button>
      </div>
      <div className="aboutUs-back">
      <div className="container">
      <div className="aboutUs col-12 p-4">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 pt-5">
            <img src={product12} />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            {/* <h4 className="pt-5">About Us</h4> */}
            <h2 className="pt-5">What we Serve</h2>
            <p>
            One of the single origin coffee from Syanja, Nepal, cultivated at a slop of misty-hills around a favorable climate conditions gives you a unique harmonious blend of delightful beans with a bright and acidic flavor as-well as smoothness and lack of bitterness in every single sip of it. As it is grown at elevation of 2400 meters this coffee provides a unique taste as region itself. With a careful attentions of farmers, flavors are smooth and different expressing the spirit of its distinct tropical diversity. Never regret buying coffee and missing out your morning to be a little bit more aromatic and enjoyable. Weather it is a raw or a roasted coffee, our coffee are nice, fresh and unique giving you the best experience and taste.
           
            </p>
        
          </div>
        </div>
      </div>
      </div>
      </div>
    <div className="whyChooseUs ">
      <div className="container">
      <div className="col-12 p-3">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 pt-3">
            <h4 className="pt-3">Why Choose Us</h4>
            <h2>Nepal Best organic Coffee</h2>
            <p>
              At KAO Coffee, our journey begins amidst the majestic Himalayan
              terrains of Nepal, specifically in regions like Syangja, Gulmi,
              and Nuwakot. We are deeply rooted in our commitment to bring the
              world the purest essence of organic Nepali coffee. Our story is
              one of dedication to quality, sustainability, and the rich
              heritage of the land. Nestled in these high-altitude terrains, we
              passionately cultivate and harvest some of the finest organic
              coffee beans. Our mission extends beyond delivering exceptional
              coffee; it's about supporting local communities, practicing
              sustainable farming methods, and honoring the remarkable
              biodiversity of the Himalayas.

             <span className="pt-2">
             One of the single origin coffee from Syanja, Nepal, cultivated at a slop of misty-hills around a favorable climate conditions gives you a unique harmonious blend of delightful beans with a bright and acidic flavor as-well as smoothness and lack of bitterness in every single sip of it. As it is grown at elevation of 2400 meters this coffee provides a unique taste as region itself. With a careful attentions of farmers, flavors are smooth and different expressing the spirit of its distinct tropical diversity. Never regret buying coffee and missing out your morning to be a little bit more aromatic and enjoyable. Weather it is a raw or a roasted coffee, our coffee are nice, fresh and unique giving you the best experience and taste.

             </span>
            </p>
          </div>
          <div className="why col-lg-6 col-md-6 col-sm-12 ">
            
            <img src={img1} className="p-2" />
            <div className="whys col-12 gap-1 p-2">
                <div className="row">
                <div className="col-lg-6 col-sm-12">
                <img src={img2} /> 
                </div>
                <div className="col-lg-6 col-sm-12">
                <img src={img3} /> 
                </div>
                </div>
               
            </div>
          </div>
        
        </div>
      </div>
      </div>
      </div>
      <div className="videsKao ">
        <h4 className="text-center">How Coffee are made </h4>
        <h2 className="text-center">Single origin coffee of Nepal</h2>
      <div class="ratio ratio-16x9">
  {/* <iframe src={backgroundVideo} title="video" allowfullscreen paused></iframe> */}
</div>
      </div>
      <div className="product">
        <div className="container p-4">
          <h4 className="text-center">Our Best Selling Product</h4>
          <h2 className="text-center">WE SELL BEST PERMIUM QUALITY COFFEE</h2>
      <Product/>
        </div>
      </div>
      <div className="feedback p-3">
        <h5>feedback</h5>
      </div>

     
    </>
  );
};

export default HomePage;
