import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.import";
import Home from "./pages/home/Home";
import { ProjectContext } from "./context/projects/ProjectContext";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import FormSubmission from "./components/mini-projects/form-submission/FormSubmission";
import PasswordValidator from "./components/mini-projects/password-validator/PasswordValidator";
import JokeGenerator from "./components/mini-projects/joke-generator/JokeGenerator";
import IpAddressFinder from "./components/mini-projects/IP-adress-finder/IpAddressFinder";
import Weather from "./components/mini-projects/weather/Weather";
import ToDo from "./components/mini-projects/to-do/ToDo";
import CoinFlip from "./components/mini-projects/coin-flip/CoinFlip";

function App() {
  const dark = [
    { "dark-1": "bg-black" },
    { "dark-2": "bg-black" },
    { "dark-3": "bg-black" },
  ];
  const light = [
    { nav: "bg-gray-950" },
    { body: "bg-white" },
    { child: "bg-gray-200" },
  ];
  const theme = [
    { nav: "bg-gray-950" },
    { body: "bg-white" },
    { child: "bg-gray-200" },
  ];
  const nav = "bg-gray-950";
  const Layout = () => {
    return (
      <>
        <Navbar darkMode={theme} />
        <Outlet />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/form-submission",
          element: <FormSubmission />,
        },
        {
          path: "/password-validator",
          element: <PasswordValidator />,
        },
        {
          path: "/joke-generator",
          element: <JokeGenerator />,
        },
        {
          path: "/ip-address-finder",
          element: <IpAddressFinder />,
        },
        {
          path: "/weather",
          element: <Weather />,
        },
        {
          path: "/to-do",
          element: <ToDo />,
        },
        {
          path: "/coin-flip",
          element: <CoinFlip />,
        },
        // {
        //   path: "/",
        //   element: </>,
        // },{
        //   path: "/",
        //   element: </>,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
