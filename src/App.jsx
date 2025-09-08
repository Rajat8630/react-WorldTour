import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./components/layouts/AppLayout";

import Home from "./pages.comp/Home";
import About from "./pages.comp/About";

import Contact from "./pages.comp/Contact";
import ErrorPage from "./pages.comp/ErrorPage";
import { Country } from "./pages.comp/Country";
import {CountryDetails  } from "./components/layouts/CountryDetails" ;


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country/>,
      },
       {
        path: "country/:id",
        element: <CountryDetails/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
