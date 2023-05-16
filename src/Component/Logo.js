import React from 'react'
const Logo=(props)=>{
const{para,logo1,logo2,logo3,logo4,logo5}=props;
return(
    <div className='section-2'>
          <p className='para-class'>{para}</p>
          <div className='logo-class'>
            <img src={logo1} alt="" height={'80px'} width={'80px'} />
            <img src={logo2} alt="" height={'80px'} width={'80px'} />
            <img src={logo3} alt="" height={'80px'} width={'80px'} />
            <img src={logo4} alt="" height={'80px'} width={'80px'} />
            <img src={logo5} alt="" height={'80px'} width={'80px'} />
          </div>
    </div>
)
};

export default Logo;