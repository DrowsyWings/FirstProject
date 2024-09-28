import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Advertise from "./components/Advertise/Advertise";
import Distribute from "./components/Distribute/Distribute";
import Faq from "./components/Faq/Faq";
import ContactUs from "./components/ContactUs/ContactUs";
import Coupon from "./components/Coupon/Coupon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="advertise" element={<Advertise />}></Route>
      <Route path="distribute" element={<Distribute />}></Route>
      <Route path="faq" element={<Faq />}></Route>
      <Route path="contactus" element={<ContactUs />}></Route>
      <Route path="coupon/:id" element={<Coupon/>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
