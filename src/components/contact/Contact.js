import React, { useEffect } from "react";
import {
   FaEnvelope,
   FaFacebook,
   FaInstagram,
   FaTwitter,
} from "react-icons/fa";
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
                     <h2>Stay in the Loop</h2>
                     <p>
                        Join our vibrant community and never miss out
                        on updates, winner announcements, and special
                        events.
                     </p>
                     <div className="icons">
                        <FaEnvelope style={{ marginRight: "1rem" }} />
                        <p>info@kera.live</p>
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
            </div>
            <div className="col-2">
               <h2>We're Here to Help</h2>
               <p>
                  Questions or feedback? Our dedicated support team is
                  just a message away.
               </p>
               <form action="">
                  <input type="text" placeholder="Full name" />
                  <input type="email" placeholder="Email" />
                  <input type="phone" placeholder="Phone" />
                  <textarea
                     name="Message"
                     placeholder="Message"
                     cols="30"
                     rows="10"
                  ></textarea>

                  <button onClick={formSubmit} className="button">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;
