import React from "react";
import heroImg from "../../assets/home/hero_vector_img.png";
import "./Hero.css";

const Hero = () => {
   return (
      <div className="hero">
         <div className="container">
            <div className="content">
               <div className="col-1">
                  <div className="hero-text-box">
                     <h1>Welcome to</h1>
                     <h1>
                        <span className="primary-color">Kera</span>
                     </h1>
                  </div>
                  <p>
                     Unleash the Power of Your Choices and Win Big!
                  </p>
               </div>
               <div className="col-2">
                  <div className="heroImg">
                     <img src={heroImg} alt="win big" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
