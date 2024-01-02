import React, { useEffect } from "react";
import {
   FaEnvelope,
   FaFacebook,
   FaInstagram,
   FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import contactImg from "../../assets/home/contact_img.png";
import "./Contact.css";

export const Contact = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   const formSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <div className="contact">
         <div className="container">
            <div className="col-1">
               <div className="content">
                  <div>
                     <h2>Contact Us</h2>
                     <p>Stay in the loop by contating us.</p>
                     <div className="icons">
                        <MdLocationOn
                           style={{ marginRight: "1rem" }}
                        />
                        <p>United Kingdom</p>
                     </div>
                     <div className="icons">
                        <FaEnvelope style={{ marginRight: "1rem" }} />
                        <p>info@architexel-insights.com</p>
                     </div>

                     <p className="followTitle">
                        Follow Us on Social Media
                     </p>

                     <div>
                        <FaFacebook
                           size={25}
                           style={{
                              color: "#6948FF",
                              marginRight: "20px",
                              cursor: "pointer",
                           }}
                        />
                        <FaInstagram
                           size={25}
                           style={{
                              color: "#6948FF",
                              marginRight: "20px",
                              cursor: "pointer",
                           }}
                        />
                        <FaTwitter
                           size={25}
                           style={{
                              color: "#6948FF",
                              marginRight: "20px",
                              cursor: "pointer",
                           }}
                        />
                     </div>
                  </div>
               </div>
               <div className="heroImg">
                  <img src={contactImg} alt="win big" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
