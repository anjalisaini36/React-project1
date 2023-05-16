import React from "react";
import { productData } from "../data/productData";
import { Link } from "react-router-dom";
// import {useCookies} from 'react-cookie';
import  {useCookies}  from 'react-cookie';


const Product = () => {
// const [cookies,setCookies]=useCookies
// const [cookies, setCookie] =useCookies(['access_token', 'refresh_token'])
// const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  
const AddToCart=(data)=>{
  console.log(data);
};

const [cookies, setCookie] = useCookies(['name']);


  return (
    <div className="container">
      <div className="row">
        {productData.map((ele, key) => (
          <div className="col-4 mt-4" key={key}>
            <div className="card">
              <img className="card-img-top" src={ele.image} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <p className="card-text">{ele.description}</p>
                <p>{ele.price}</p>
                <Link to={ele.url} className="btn btn-primary">
                  Full detail
                </Link>
                
                <div>
                     <button onClick={()=>AddToCart(ele)}>Add to cart</button>
               </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
