import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Hero from "./hero/Hero";
import Faq from "./qualities/Qualities";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
   return (
      <div>
         <Hero />
         <About />
         <Faq />
         <Testimonials />
         <Contact />
      </div>
   );
};

export default Home;
