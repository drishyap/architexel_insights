import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
   const navigate = useNavigate();
   const [click, setClick] = useState(false);

   const handleClick = () => {
      setClick(!click);
   };

   const handleNavigate = (link) => {
      navigate(link);
      setClick(!click);
      console.log({ link });
   };

   return (
      <header>
         <div className="navbar">
            <div className="logo">
               <Link to="/">
                  <h1 className="logo">Kera</h1>
               </Link>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                  <div
                     onClick={() => handleNavigate("/")}
                     className="nav-link"
                  >
                     Home
                  </div>
               </li>
               <li className="nav-item">
                  <div
                     onClick={() => handleNavigate("/about")}
                     className="nav-link"
                  >
                     About
                  </div>
               </li>
               <li className="nav-item">
                  <div
                     onClick={() => handleNavigate("/features")}
                     className="nav-link"
                  >
                     Features
                  </div>
               </li>
               <li className="nav-item">
                  <div
                     onClick={() => handleNavigate("/contact")}
                     className="nav-link"
                  >
                     Contact
                  </div>
               </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
               {click ? (
                  <FaTimes style={{ color: "#6948FF" }} />
               ) : (
                  <FaBars style={{ color: "#6948FF" }} />
               )}
            </div>
         </div>
      </header>
   );
};

export default Navbar;
