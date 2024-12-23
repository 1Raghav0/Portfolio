import React from "react";
import Header from "./components/Header";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Project from "./pages/Project";


import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>
    },
    {
      path: "/about",
      element: <><Page5 /></>
    },
    {
      path: "/projects",
      element: <><Project /></>
    },
    {
      path: "/contact",
      element: <><Page7 /></>
    },
  ])

  return (
    <>
    <Header />
    <RouterProvider router={router} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Project />
      <Page7 />

    </>
  );
};

export default App;
