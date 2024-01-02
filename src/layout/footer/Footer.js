import React from "react";
import {
   FaEnvelope,
   FaFacebook,
   FaInstagram,
   FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./Footer.css";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="logo">
               <Link to="/">
                  <div style={{ width: "150px", height: "100%" }}>
                     <img
                        src={logo}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                     />
                  </div>{" "}
               </Link>
            </div>
            <div>
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
               <div style={{ marginTop: "10px", lineHeight: "12px" }}>
                  <div>
                     <div
                        className="icons"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "end",
                           color: "#fff",
                        }}
                     >
                        <MdLocationOn
                           style={{ marginRight: "1rem" }}
                        />
                        <p
                           style={{ color: "#fff", fontSize: "12px" }}
                        >
                           United Kingdom
                        </p>
                     </div>
                     <div
                        className="icons"
                        style={{
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "end",
                           color: "#fff",
                        }}
                     >
                        <FaEnvelope style={{ marginRight: "1rem" }} />
                        <p
                           style={{ color: "#fff", fontSize: "12px" }}
                        >
                           info@architexel-insights.com
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-bottom">
            <div className="content">
               <div className="rights">
                  <p>
                     &copy; Architexel Insights . All rights reserved.
                  </p>
               </div>
               <div>
                  <FaFacebook
                     size={20}
                     style={{ color: "#fff", marginRight: "10px" }}
                  />
                  <FaInstagram
                     size={20}
                     style={{ color: "#fff", marginRight: "10px" }}
                  />
                  <FaTwitter
                     size={20}
                     style={{ color: "#fff", marginRight: "10px" }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
