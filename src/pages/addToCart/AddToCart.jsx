import React,{useState} from 'react'
import "../addToCart/AddToCart.css"
import img1 from "../../assets/images/580+CBTL+Frac+Pack+French+Roast 1.png"

const AddToCart = () => {
    

    const [count, setCount] = useState(1); 
    const [price, setPrice] = useState(1000);
  
    const handleAdd = () => {
      setCount(count + 1); 
      setPrice(price + 1000); 
    };
  
    const handleRemove = () => {
      if (count > 1) {
        setCount(count - 1); 
        setPrice(price - 1000);
      }}
      const totalPrice= price
    
  return (
   <>
   <div className='card-container'>
   <div className='container'>
   <h3 className='pb-3 pt-3'>Your card item</h3>
   <div className='card-items'>
   <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th></th>
      <th scope="col">Price</th>
      
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={img1} style={{width:"100px",height:"100px"}}/></th>
      <th>Kao Coffee</th>
      <td>1000</td>
      <td >  <div className='d-flex gap-2' ><button className="btn1 px-3 fw-blod" onClick={handleAdd}>+</button>
                <p className="fw-bold pt-2">{count}</p>
                <button className="btn1 px-3 fw-bold" onClick={handleRemove}>-</button></div></td>
      <td>{totalPrice}</td>
    </tr>
   
  </tbody>
</table>
   </div>
   </div>
   </div>
  
 
   </>
  )
}

export default AddToCart