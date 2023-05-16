import React from 'react'
import Content from '../Component/Content'
import Logo from '../Component/Logo'
import Medical from '../Component/Medical'
import Footer from '../Component/Footer'
import { cardData } from '../data/homeData';

const Home = () => {
  return (
    <div>
      
      <Content heading1="Personalized, Doctor-Backed" 
              heading2="Weight Loss Medicine."
              paragraph="Book your initial assessment in minutes. Get prescribed as soon as same-day and start losing weight. Change your life today."
              button="View Program"
              image_girl="https://res.cloudinary.com/ddvckq469/image/upload/v1667929118/NextMed/weight/above-fold_mcnrjc.webp"
              />
      <Logo para="As seen in"
            logo1='./images/yahoo.png'
            logo2='./images/instagram.png' 
            logo3='./images/snapchat.png'
            logo4='./images/whatsapp.png'
            logo5='./images/facebook.png'
            
            />  
      <Medical
      data={cardData}
      />
    
           
    </div>
  )
}

export default Home
