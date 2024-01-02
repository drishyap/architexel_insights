import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import PageNotFound from "../components/pageNotFound";
import Qualities from "../components/qualities/Qualities";

const RouteList = () => {
   const homeRoutes = {
      home: [
         {
            path: "/",
            component: <Home />,
         },
         {
            path: "/about",
            component: <About />,
         },
         {
            path: "/features",
            component: <Qualities />,
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
