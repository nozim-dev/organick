import React from "react";
import { Outlet } from "react-router-dom";

const blogLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default blogLayout;
