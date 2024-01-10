import React from 'react'
// import backgroundVideo from "../assets/videos/bg-video.mp4"
import img1 from "../assets/images/Coffee-46.jpg"

const Process = () => {
  return (
  <>


<div className='process-body col-12 ' >
  <div className='row'>
  <div className='process-lft-container col-lg-7 col-md-7 col-sm-12 col-12'>
    <img src={img1} className=' position-relative '/>
    {/* <h1 className='position-absolute '>hello</h1>
     */}
  
  </div>
  <div className='process-rgt-container col-lg-5 col-md-5 col-sm-12 col-12 '>
    <div className="p-3">
      <img src={img1} className='img-fluid'/>
    <h4>How farmer cultivate coffee in middle east nepal</h4>
    <p>
     Coffee harvesting involves a multi-stage process, starting with planting coffee seeds or seedlings in a suitable location with optimal climate and soil conditions. The growing phase requires careful attention to watering, fertilizing, and protection against pests and diseases, with mature plants typically taking 3 to 4 years to produce cherries. Following the flowering stage, green coffee cherries develop and undergo color changes from green to yellow and ultimately to red or other hues based on the coffee variety. Harvesting, a crucial step, can be done selectively by hand-picking ripe cherries or through strip picking. Post-harvest, the cherries are processed using either dry or wet methods, involving drying, pulping, fermentation, washing, and sorting. Milling removes remaining layers, and the beans are sorted by size and quality before export. Upon reaching their destination, coffee beans are roasted to enhance flavor and aroma, followed by grinding and brewing to produce the final coffee beverage. It's important to note that specific practices may vary based on factors such as coffee variety, regional considerations, and the increasing emphasis on sustainable and ethical harvesting practices in the coffee industry.</p>
    </div>
    
  </div>



</div>
</div>
<h2 className='text-center'>How to make coffee</h2>
<div className="videsKao ">
<div class="ratio ratio-16x9">
  {/* <iframe src={backgroundVideo} title="video" allowfullscreen paused></iframe> */}
</div>
</div>
     
  </>
  )
}

export default Process