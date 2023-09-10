import {
  RouterProvider,
  createBrowserRouter,
  LoaderFunction,
 
  redirect,
} from "react-router-dom";
import RootLayout from "./pages/rootLayout";
import Cart from "./components/cart/index";
import Error from "./components/errorPage/index";
import Shop from "./components/shop/index";
import ProductDetail from "./components/productDetail/index";
import Login from "./components/loginPage/index";
import React from "react";

export interface RouteObject {
  path: string;
  element: React.ReactNode;
  loader?: LoaderFunction;
  errorElement?: React.ReactNode;
}

interface RouteWithChildren extends RouteObject {
  children: RouteObject[];
}

interface RouteWithoutChildren extends RouteObject {}

const checkAuthLoader: LoaderFunction = async () => {
  const userDetails = localStorage.getItem("userDetails");
  if (!userDetails) {
    return redirect("/");
  }
  return null;
};

const routes: (RouteWithChildren | RouteWithoutChildren)[] = [
  { path: "/", element: <Login /> },
  {
    path: "/shop",
    element: <RootLayout />,
    loader: checkAuthLoader,
    errorElement: <Error />,
    children: [
      { path: "/shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "shop/:productId", element: <ProductDetail /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  );
}

export default App;
