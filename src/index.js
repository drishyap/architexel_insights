import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./layout";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Layout>
         <App />
      </Layout>
   </BrowserRouter>
);
