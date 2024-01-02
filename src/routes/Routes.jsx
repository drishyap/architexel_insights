import { Route, Routes } from "react-router-dom";
import Contact from "../components/contact/Contact";
import Faq from "../components/faq/Faq";
import Home from "../components/Home";
import PageNotFound from "../components/pageNotFound";
import Pricing from "../components/pricing/Pricing";

const RouteList = () => {
   const homeRoutes = {
      home: [
         {
            path: "/",
            component: <Home />,
         },
         {
            path: "/about",
            component: <Pricing />,
         },
         {
            path: "/features",
            component: <Faq />,
         },
         {
            path: "/contact",
            component: <Contact />,
         },
      ],
   };
   return (
      <Routes>
         {homeRoutes?.home?.map((item) => {
            return (
               <Route
                  key={item?.path}
                  path={item?.path}
                  element={item?.component}
               />
            );
         })}

         <Route path="*" element={<PageNotFound />} />
      </Routes>
   );
};

export default RouteList;
