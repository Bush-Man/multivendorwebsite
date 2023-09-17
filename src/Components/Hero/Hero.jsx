//import  from 'react'
import "./Hero.jsx";
import image1 from "../../assets/banner-1.png";
//import image2 from "../../assets/2-lg.jpg";
import image3 from "../../assets/banner-2.png";
import heroImg from "../../assets/hero.jpg"
import "./Hero.scss"
const Hero = () => {
  return (
      <div className="hero">
          <div className="container">
               <div className="left">
              <img src={heroImg} alt="" />
          </div>
          <div className="right">
              <img src={image1} alt="" />
              <img src={image3} alt="" />
          </div>
          </div>
         
          
    </div>
  )
}

export default Hero