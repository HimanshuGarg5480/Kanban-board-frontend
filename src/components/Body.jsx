import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const Body = () => {

  const reactRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    }
  ]);
  return <RouterProvider router={reactRouter} />;
};

export default Body;
