import React, { useEffect, useState } from "react";
import {
   FaChevronLeft,
   FaChevronRight,
   FaQuoteRight,
} from "react-icons/fa";
import client1 from "../../assets/clients/client1.jpg";
import client2 from "../../assets/clients/client2.jpg";
import client3 from "../../assets/clients/client3.jpg";
import client4 from "../../assets/clients/client4.jpg";
import "./Testimonials.css";

const Testimonials = () => {
   const pathname = window.location.pathname;

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   const people = [
      {
         id: 1,
         name: "Brandon Smith",
         image: client1,
         text: "OptiFrame AI has truly revolutionized the way we approach architectural reviews. The automated system streamlines the process, providing insightful recommendations that have significantly enhanced the integrity of our architectural workloads. The continuous improvement aspect ensures we stay ahead in the ever-evolving technological landscape.",
      },
      {
         id: 2,
         name: "Tony Murphy",
         image: client2,
         text: "Architexel Insights' OptiFrame AI has become an indispensable tool for our team. The AI-driven recommendations have not only helped us identify and address high-risk issues efficiently but also provided Terraform IaaCs solutions for seamless optimization. The user-centric design and collaborative platform make the entire process a breeze, fostering a more productive work environment.",
      },
      {
         id: 3,
         name: "Peter Jones",
         image: client3,
         text: "We were searching for a solution that could elevate our architectural practices, and OptiFrame AI exceeded our expectations. The intelligent analysis powered by advanced AI has been a game-changer. The tool's ability to continuously learn and adapt ensures that our architecture is always cutting-edge. It's a must-have for any enterprise aiming for excellence in architectural frameworks.",
      },
      {
         id: 4,
         name: "James Murry",
         image: client4,
         text: "OptiFrame AI from Architexel Insights has significantly improved the efficiency of our architectural reviews. The intuitive interface makes the process seamless, and the collaborative platform allows our team to share insights effortlessly. The tool has become an integral part of our workflow, helping us achieve and maintain architectural excellence with ease.",
      },
   ];

   const [index, setIndex] = useState(0);
   const { name, image, text, job } = people[index];

   const checkNumber = (number) => {
      if (number > people.length - 1) {
         return 0;
      }
      if (number < 0) {
         return people.length - 1;
      }
      return number;
   };

   const prevPerson = () => {
      setIndex((index) => {
         let newIndex = index - 1;
         return checkNumber(newIndex);
      });
   };

   const nextPerson = () => {
      setIndex((index) => {
         let newIndex = index + 1;
         return checkNumber(newIndex);
      });
   };

   return (
      <div className="pricing">
         <div className="container">
            <div className="top-content">
               <div>
                  <h2>
                     Testimonials:
                     <br />
                     <span> Hear from Our Satisfied Clients</span>
                  </h2>
                  <p>
                     Discover how OptiFrame AI has empowered
                     organizations to achieve architectural
                     excellence. Read testimonials from our clients
                     who have experienced the transformative impact of
                     our product.
                  </p>
               </div>
               <article className="review">
                  <div className="img-container">
                     <img
                        src={image}
                        alt={name}
                        className="person-img"
                     />
                     <span className="quote-icon">
                        <FaQuoteRight />
                     </span>
                  </div>
                  <h4 className="author">{name}</h4>
                  <p className="info">{text}</p>
                  <div className="button-container">
                     <button
                        className="prev-btn"
                        onClick={prevPerson}
                     >
                        <FaChevronLeft />
                     </button>
                     <button
                        className="next-btn"
                        onClick={nextPerson}
                     >
                        <FaChevronRight />
                     </button>
                  </div>
               </article>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
