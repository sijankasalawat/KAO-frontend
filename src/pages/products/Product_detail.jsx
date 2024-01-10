import React,{useState} from "react";
import product1 from "../../assets/images/580+CBTL+Frac+Pack+French+Roast 1.png";


const Product = () => {
  const [count, setCount] = useState(1); 
  const [price, setPrice] = useState(1000);
  const tax =200;
  const handleAdd = () => {
    setCount(count + 1); 
    setPrice(price + 1000); 
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1); 
      setPrice(price - 1000);
    }
  };
  const totalPrice= price+tax;
  return (
    <>
    <div className="products">
      <div className="container">
        <div className="product-detail">

            <div className="product-lft ">
              <div className="product-img m-3 d-flex justify-content-center ">
                <img src={product1} alt="product" />
              </div>
            </div>
            <div className="product-rgt m-3">
              <h6>Brand: KAO Coffee</h6>
              <h6>
                Availibility: <span className="text-success"> In Stock</span>
              </h6>
              <h2>TONY'S COFFEE</h2>
              <ul className="text-white">
                <li>detail about coffee</li>
                <li>detail about coffee</li>
                <li>detail about coffee</li>
                <li>detail about detail about coffee and use</li>
              </ul>
              <hr className="solids"/>
              <h6 className="text-white">Nepalese rupees (incl. of all taxes)</h6>
              <h3 style={{color:"#dbad6a"}}>Rs {totalPrice}</h3>
              <hr className="solids"/>
              <div className="add-remove d-flex gap-2 ">
                <button className="btn1 px-3 fw-blod" onClick={handleAdd}>+</button>
                <p className="fw-bold pt-2">{count}</p>
                <button className="btn1 px-3 fw-bold" onClick={handleRemove}>-</button>
                <button className="btn2 px-2">Buy Now</button>
                <button className="btn1 px-2">Add to Cart</button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="discriptions">

  
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h2>
                  Product Details
                </h2>
                <h5>Material Composition:</h5>
                <p>about products....................</p>
                <h5>Instruction:</h5>
                <p>about products....................</p>
                <h5>Description:</h5>
                <p>about products....................</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h2>
                  Delivery and Returns
                </h2>
                <p>detail about delivery. how it is done</p>
                <p>Get FREE delivery when you pick up your order in store</p>
                <p>how the delivery is done and imformation about delivery</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <h2>
                  Need Help?
                </h2>
                <p>how can we help you?</p>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
 
   
  
     
    </>
  );
};

export default Product;
