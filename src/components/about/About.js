import React, { useEffect } from "react";
import aboutImg from "../../assets/home/about_img.png";
import "./About.css";

const About = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <div className="pricing">
         <div className="container">
            <div className="top-content">
               <div className="col-1">
                  <div className="heroImg">
                     <img src={aboutImg} alt="win big" />
                  </div>
               </div>
               <div>
                  <h2>
                     About{" "}
                     <span style={{ fontSize: "38px" }}>Us</span>
                  </h2>
                  <p>
                     Welcome to Architexel Insights, where innovation
                     meets architecture. We are proud to introduce our
                     flagship product, OptiFrame AI – a groundbreaking
                     tool in Well Architected Framework Automation.
                     Designed for forward-thinking enterprises,
                     OptiFrame AI revolutionizes how you conduct Well
                     Architected Framework Reviews of your workloads.
                     <br />
                     Architexel Insights is committed to pushing the
                     boundaries of what's possible in architectural
                     framework automation. With OptiFrame AI, embark
                     on a journey towards optimized, efficient, and
                     innovative architectural practices. Join us in
                     redefining the standards of architectural
                     excellence.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
