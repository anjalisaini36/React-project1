import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Nofound from "../pages/404";
import Layout from "../Component/Layout";
import Product from "../pages/Product";
import SingleProduct from "../pages/SingleProduct";
import Mycart from "../pages/Mycart";
const Routing = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/product/:slug" element={<SingleProduct />}/>
          <Route path="*" element={<Nofound />}/>
          <Route path="/product/mycart" element={<Mycart/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
