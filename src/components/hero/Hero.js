import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/home/hero_vector_img.png";
import "./Hero.css";

const Hero = () => {
   const navigate = useNavigate();
   const navigateBtn = () => {
      navigate(`/features`);
   };
   return (
      <div className="hero">
         <div className="container">
            <div className="content">
               <div className="col-1">
                  <div className="hero-text-box">
                     <h1>Welcome to</h1>
                     <h1>
                        <span className="primary-color">
                           Architexel Insights
                        </span>
                     </h1>
                  </div>
                  <p>
                     Unveiling the Future of Architectural Excellence
                     with OptiFrame AI
                  </p>
                  <button class="btn_1" onClick={navigateBtn}>
                     Get Started
                  </button>
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
