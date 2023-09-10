import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/index";

function RootLayout(props: any) {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
