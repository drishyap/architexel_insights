import React from "react";
import Contact from "./contact/Contact";
import Faq from "./faq/Faq";
import Hero from "./hero/Hero";
import Pricing from "./pricing/Pricing";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
   return (
      <div>
         <Hero />
         <Pricing />
         <Faq />
         <Testimonials />
         <Contact />
      </div>
   );
};

export default Home;
