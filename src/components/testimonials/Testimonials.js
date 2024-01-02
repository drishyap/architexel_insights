import React, { useEffect } from "react";
import appStoreImage from "../../assets/appDownloadImages/appStore.png";
import googlePlayImage from "../../assets/appDownloadImages/googlePlay.png";
import "./Testimonials.css";

const Testimonials = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <div className="testimonial">
         <div className="container">
            <div className="outline">
               <div className="content">
                  <p className="title"> Ready to Start Winning?</p>
                  <div className="name">
                     <p>Download Kera Today!</p>
                  </div>
                  <p className="body">
                     Embark on this exciting journey with us. Swipe,
                     classify, and get ready to win big!
                  </p>
                  <div className="app-download">
                     <a
                        style={{ marginRight: "10px" }}
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img
                           src={googlePlayImage}
                           alt="Google Play Store"
                           width="140"
                           height="43"
                        />
                     </a>
                     <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <img
                           src={appStoreImage}
                           alt="Apple Store"
                           width="140"
                           height="43"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
