import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
const Layout = (props) => {
  return (
    <div>
      <Navbar title="Program" title_component1="Product" title_component2="SingleProduct" title_component3="Pricing"/>
      {props.children}
      <Footer footer_img="https://www.nextmed.com/images/logo_white.png"
              footer_heading1="PATIENT TOOLS & RESOURCE"
              footer_heading2="CONTACT US"
              footer_h1_t1="LOGIN"
              footer_h1_t2="PRIVACY"
              footer_h1_t3="POLICY"
              footer_h2_t1="+1-855-550-1960"
              footer_h2_t2="EMAIL US"
              footer_h2_t3="24/7, 365"
              footer_para="Copyright Southern Health Solutions, Inc."/>
    </div>
  )
}

export default Layout
