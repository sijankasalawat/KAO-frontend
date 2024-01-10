import React from 'react'
import img1 from "../assets/images/Rectangle 284.png"
import img2 from "../assets/images/Coffee-51.jpg"
import img3 from "../assets/images/Coffee-32.jpg"
import img4 from "../assets/images/Coffee-80.jpg"
import img5 from "../assets/images/Coffee-46.jpg"
import img6 from "../assets/images/Coffee-109.jpg"

const Blog = () => {
  return (
   <>
   <div className='Blogs '>
    <div className='rightBlog container'>
   <div className='col-12 p-3'>
    <div className='row'>
        <div className='leftBlog col-lg-8 col-md-6 col-sm-12'>
            <img src={img6}/>
            <h2 className='pt-3'>KAO Coffee</h2>
            <p>
            Nestled in the picturesque landscapes of Syangja district in Nepal, KAO Coffee brings a unique and flavorful experience to coffee enthusiasts around the world. Syangja, known for its fertile soil and ideal climate conditions, has become a haven for coffee cultivation. The region's coffee plantations thrive on the altitude, temperature, and rainfall, contributing to the distinct characteristics of KAO Coffee. As the beans mature in the lush hills, they absorb the essence of the terroir, resulting in a cup of coffee that encapsulates the true spirit of the region.
            </p>
            <button className="readMore">Read More</button>
            <div className='pt-3'>
            <img src={img1}/>
            <h2 className='pt-3'>Farms </h2>
            <p>
            Nestled in the picturesque landscapes of Syangja district in Nepal, KAO Coffee brings a unique and flavorful experience to coffee enthusiasts around the world. Syangja, known for its fertile soil and ideal climate conditions, has become a haven for coffee cultivation. The region's coffee plantations thrive on the altitude, temperature, and rainfall, contributing to the distinct characteristics of KAO Coffee. As the beans mature in the lush hills, they absorb the essence of the terroir, resulting in a cup of coffee that encapsulates the true spirit of the region.
            </p>
            <button className="readMore">Read More</button>

            </div>

        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div>
            <img src={img2}/>
            <h4>Kao Coffee</h4>
        <p>
            One of the single origin coffee from Syanja, Nepal, cultivated at a slop of misty-hills around a favorable climate conditions gives you a unique harmonious blend of delightful beans with a bright and acidic flavor as-well as smoothness and lack of bitterness in every single sip of it. As it is grown at elevation of 2400 meters this coffee provides a unique taste as region itself.
            </p>
            <button className="readMore">Read More</button>
            </div>
            <div className='pt-3'>
            <img src={img3}/>
            <h4>Kao coffee</h4>
        <p>
            One of the single origin coffee from Syanja, Nepal, cultivated at a slop of misty-hills around a favorable climate conditions gives you a unique harmonious blend of delightful beans with a bright and acidic flavor as-well as smoothness and lack of bitterness in every single sip of it. As it is grown at elevation of 2400 meters this coffee provides a unique taste as region itself.
            </p>
            <button className="readMore">Read More</button>
            </div>
     

        </div>
    </div>

   </div>
   </div>

   <div className='Blogs2 p-3'>
    <h2 className='text-center '>Images</h2>
    <div class="parent">
  <div class="slide">
  <div class="child"><img src={img4}/></div>
    <div class="child"><img src={img2}/></div>
    <div class="child"><img src={img1}/></div>
    <div class="child"><img src={img3}/></div>
    <div class="child"><img src={img5}/></div>
    <div class="child"><img src={img6}/></div>
    <div class="child"><img src={img4}/></div>
    <div class="child"><img src={img3}/></div>
    <div class="child"><img src={img1}/></div>
    <div class="child"><img src={img4}/></div>
    
  </div>
</div>
</div>
   </div>
   </>
  )
}

export default Blog