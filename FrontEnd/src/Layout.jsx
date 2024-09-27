import React from "react";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
