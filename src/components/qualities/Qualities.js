import React, { useEffect } from "react";
import "./Qualities.css";

const Qualities = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   const data = [
      {
         header:
            "OptiFrame AI: Your Gateway to Enhanced Architectural Integrity",
         items: [
            {
               title: "Automated Reviews",
               description:
                  "Utilize our web application to perform comprehensive reviews of your architectural workloads effortlessly.",
            },
            {
               title: "AI-Driven Recommendations",
               description:
                  "Receive detailed reports highlighting High Risk Issues (HRIs) and actionable insights to address them.",
            },
            {
               title: "Terraform IaaCs Solutions",
               description:
                  "OptiFrame AI not only identifies problems but also provides Terraform Infrastructure as Code (IaaC) to resolve these issues and optimize your architecture.",
            },
         ],
      },
      {
         header:
            "Harnessing the Power of AI for Architectural Excellence",
         items: [
            {
               title: "Intelligent Analysis",
               description:
                  "Our tool leverages advanced Artificial Intelligence and generative AI to analyze, predict, and offer solutions that are at the forefront of technological advancement.",
            },
            {
               title: "Continuous Improvement",
               description:
                  "With OptiFrame AI, your architecture is not just reviewed; it's evolved. Our AI algorithms continuously learn and adapt, ensuring you're always at the cutting edge.",
            },
         ],
      },
      {
         header: "User-Centric Design for Seamless Experience",
         items: [
            {
               title: "Intuitive Interface",
               description:
                  "OptiFrame AI is built with a focus on user experience, featuring an easy-to-navigate interface that makes architectural reviews a breeze.",
            },
            {
               title: "Collaborative Platform",
               description:
                  "Share insights, reports, and solutions across your team effortlessly, fostering a collaborative work environment.",
            },
         ],
      },
      {
         header: "Join the Architectural Revolution",
         items: [
            {
               title: "Request a Demo",
               description:
                  "See OptiFrame AI in action. Request a demo and witness firsthand how our tool can transform your architectural reviews.",
            },
            {
               title: "Connect with Us",
               description:
                  "Have questions or need more information? Our team of experts is ready to assist. Contact us at [contact information] or follow us on our social media channels for updates and insights.",
            },
         ],
      },
   ];

   return (
      <>
         {data?.map((item) => {
            return (
               <div className="section-faq">
                  <div className="container">
                     <div className="col-1">
                        <h3>{item?.header}</h3>
                     </div>
                     <div className="col-2">
                        {item?.items?.map((items) => {
                           return (
                              <div className="faq">
                                 <h5>{items?.title}:</h5>
                                 <p>{items?.description}</p>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            );
         })}
      </>
   );
};

export default Qualities;
