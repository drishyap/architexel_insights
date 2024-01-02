import React, { useEffect } from "react";
import "./Pricing.css";

const Pricing = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <div className="pricing">
         <div className="container">
            <div className="top-content">
               <div>
                  <h2>
                     What is <span>Kera?</span>
                  </h2>
                  <p>
                     Kera isn't just an app; it's a revolution in
                     digital interaction and rewards. Available for
                     both Android and iOS, Kera offers a unique blend
                     of entertainment, engagement, and the thrill of
                     winning. With every swipe, you're not just
                     classifying images; you're stepping closer to
                     fabulous prizes!
                  </p>
               </div>
               {/* <div className="btn-div">
                  <button className="button">
                     Get started today
                  </button>
               </div> */}
            </div>
            <div className="bottom-content">
               <div className="card">
                  <p>
                     <span>Exciting Features of Kera</span>
                  </p>
               </div>
               <div className="card">
                  <div>
                     <p>
                        Intuitive and Engaging Interface: Navigate
                        with ease and enjoy the smooth, user-friendly
                        design that makes swiping a joy.
                     </p>
                  </div>

                  <div>
                     <p>
                        Safety First: We prioritize your privacy and
                        data security, offering a safe space to enjoy
                        and win.
                     </p>
                  </div>
               </div>
               <div className="card">
                  <div>
                     <p>
                        A Library That Keeps Growing: We constantly
                        update our image collection, ensuring there's
                        always something new for you.
                     </p>
                  </div>
                  <div>
                     <p>
                        Connect and Contribute: Your swipes help
                        refine AI and machine learning models,
                        contributing to technological advancements.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Pricing;
