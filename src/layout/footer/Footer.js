import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="logo">
               <Link to="/">
                  <h1 className="logo">Kera</h1>
               </Link>
            </div>

            <div className="menu-box">
               <Link to="/" className="link">
                  Home
               </Link>
               <Link to="/about" className="link">
                  About
               </Link>
               <Link to="/features" className="link">
                  Features
               </Link>
               <Link to="/contact" className="link">
                  Contact
               </Link>
            </div>
         </div>
         <div className="footer-bottom">
            <div className="content">
               <div className="rights">
                  <p>&copy; Kera . All rights reserved.</p>
               </div>
               <div>
                  <FaFacebook
                     size={20}
                     style={{ color: "#6948FF", marginRight: "10px" }}
                  />
                  <FaInstagram
                     size={20}
                     style={{ color: "#6948FF", marginRight: "10px" }}
                  />
                  <FaTwitter
                     size={20}
                     style={{ color: "#6948FF", marginRight: "10px" }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
