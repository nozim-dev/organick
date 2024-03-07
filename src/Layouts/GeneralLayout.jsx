import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const GeneralLayout = () => {
  return (
    <div className="border border-[red]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GeneralLayout;
