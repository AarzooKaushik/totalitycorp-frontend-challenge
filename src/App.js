import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Cart from "./components/cart";
import Error from "./components/ErrorPage/Error";
import Shop from "./components/Shop/Shop";
import ProductDetail from "./components/ProductDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: "true", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "shop/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
