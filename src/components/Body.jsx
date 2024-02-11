import React, { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";


const Body = () => {

  const reactRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
  return <RouterProvider router={reactRouter} />;
};

export default Body;
