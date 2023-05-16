import React from 'react'
const Content=(props)=>{
const {heading1,heading2,paragraph,button,image_girl}=props;

return(
    <div className='header-class'>
        <div className='heading-class'>
        <h1 className='heading1-clas'>{heading1}</h1>
        <h1>{heading2}</h1>
        <p>{paragraph}</p>
        <button className='btn-1' type="button" >{button}</button>
        </div>
        <div className='imgDiv'>
        <img className='img-class' src={image_girl} alt="" height={"450"} />
        </div>
    </div>
);

};

export default Content;