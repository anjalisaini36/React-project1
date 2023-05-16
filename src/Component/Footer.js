import React from 'react'
const Footer=(props)=>{
    const{footer_img,footer_heading1,footer_heading2,footer_h1_t1,footer_h1_t2,footer_h1_t3,footer_h2_t1,footer_h2_t2,footer_h2_t3,footer_para}=props;
    return(
        <div>
            
<div className=" my-5">

  <footer className="bg-primary text-center text-lg-start text-white">
    
    <div className="container p-4">
     
      <div className="row my-4">
       
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

          <div className=" d-flex align-items-center justify-content-center mb-4 mx-auto" width={150} height= {150}>
            <img src={footer_img} height={70} alt="" loading="lazy" />
          </div>

          <p className="text-center">{footer_para}</p>

          <ul className="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a className="text-white px-2" href="/!">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a className="text-white px-2" href="/!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="text-white ps-2" href="/!">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">{footer_heading1}</h5>

          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/!" className="text-white"><i className="fas fa-paw pe-3"></i>{footer_h1_t1}</a>
            </li>
            <li className="mb-2">
              <a href="/!" className="text-white"><i className="fas fa-paw pe-3"></i>{footer_h1_t2}</a>
            </li>
            <li className="mb-2">
              <a href="/!" className="text-white"><i className="fas fa-paw pe-3"></i>{footer_h1_t3}</a>
            </li>
           
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">{footer_heading2}</h5>

          <ul className="list-unstyled">
            <li>
              <p><i className="fas fa-map-marker-alt pe-2"></i>{footer_h2_t1}</p>
            </li>
            <li>
              <p><i className="fas fa-phone pe-2"></i>{footer_h2_t2}</p>
            </li>
            <li>
              <p><i className="fas fa-envelope pe-2 mb-0"></i>{footer_h2_t3}</p>
            </li>
          </ul>
        </div>
        
      </div>
      
    </div>
    
    
   
  </footer>

</div>

        </div>
    );
};

export default Footer;