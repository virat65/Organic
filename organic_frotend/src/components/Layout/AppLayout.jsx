import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AppLayout;
