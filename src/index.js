import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Main from "./components/Main";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
// import Grocery from "./pages/Grocery";

const AppLayout = () => {
  return (
    <>
      <App />
    </>
  );
};

//onDemand_Loading - for Chunking/Code Splitting/Dynamic bundling
const Grocery = lazy(() => import("./pages/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        // Suspense- to reduce bundling time
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        // Dynamic Routing
        path: "/restaurants/:restaId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
