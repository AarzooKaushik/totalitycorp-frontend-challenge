import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
