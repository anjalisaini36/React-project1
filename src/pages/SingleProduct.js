import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../data/productData";
import Nofound from "./404";
const SingleProduct = () => {
  const { slug } = useParams();
  const findProduct = productData.find((x) => x.url === slug);
  // console.log("slug:",slug);
  return (
    <div>
      {findProduct ? (
        <div className="container">
          <div className="row">
            <div className="card">
              <img className="card-img-top" src={findProduct.image} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{findProduct.name}</h5>
                <p className="card-text">{findProduct.description}</p>
                <p>{findProduct.price}</p>
              </div>
            </div>
          </div>
        </div>
      ):<Nofound />}
    </div>
  );
};

export default SingleProduct;
