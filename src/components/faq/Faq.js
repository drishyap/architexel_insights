import React, { useEffect } from "react";
import "./Faq.css";

const Faq = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <div className="section-faq">
         <div className="container">
            <div className="col-1">
               <h3>How Kera Transforms Your Swipes into Rewards</h3>
            </div>
            <div className="col-2">
               <div className="faq">
                  <h5>Explore a World of Images:</h5>
                  <p>
                     Immerse yourself in our diverse collection of
                     images. From breathtaking landscapes to
                     intriguing abstracts, there's always something
                     new to discover.
                  </p>
               </div>
               <div className="faq">
                  <h5>Swipe to Classify:</h5>
                  <p>
                     Your opinion matters! Swipe left or right to
                     classify the images. Each swipe refines our
                     database and enhances the user experience.
                  </p>
               </div>
               <div className="faq">
                  <h5>Earn Tickets Effortlessly:</h5>
                  <p>
                     Every image you classify earns you a ticket.
                     These aren't just tickets; they're your entry
                     into a world of potential winnings.
                  </p>
               </div>
               <div className="faq">
                  <h5>The Monthly Mega Raffle: </h5>
                  <p>
                     Your tickets are your chance to win in our
                     exciting monthly raffle. The more tickets you
                     collect, the higher your chances of bagging the
                     grand prize.
                  </p>
               </div>
               <div className="faq">
                  <h5>Grand Cash Prizes: </h5>
                  <p>
                     We're not just talking about small rewards. Stand
                     a chance to win hefty cash prizes that can
                     transform your month!
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;
