import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const projects = [
    {
      name: "form submission",
      href: "/form-submission",
      isDone: true,
    },
    {
      name: "password validator ",
      href: "/password-validator",
      isDone: true,
    },
    {
      name: "joke generator ",
      href: "/joke-generator",
      isDone: false,
    },
    {
      name: " ip address finder",
      href: "/ip-address-finder",
      isDone: true,
    },
    {
      name: " weather",
      href: "/weather",
      isDone: false,
    },
    {
      name: "to do ",
      href: "/to-do",
      isDone: true,
    },
    {
      name: "coin flip ",
      href: "/coin-flip",
      isDone: false,
    },
    {
      name: "currency converter",
      href: "/coin-flip",
      isDone: false,
    },
    {
      name: "QR generator ",
      href: "/coin-flip",
      isDone: false,
    },
    {
      name: "location finder ",
      href: "/coin-flip",
      isDone: false,
    },
    {
      name: "stop watch ",
      href: "/coin-flip",
      isDone: false,
    },
    {
      name: "BMI calculator",
      href: "/coin-flip",
      isDone: false,
    },
    {
      name: "typing speed test",
      href: "/coin-flip",
      isDone: false,
    },
  ];
  const done = "green-500";
  const notDone = "red-500";
  return (
    <>
      <div className=" w-full h-screen bg-black">
        <h1 className="py-8 text-5xl text-center font-semibold">Projects</h1>
        <div className="w-2/3 m-auto p-3 grid grid-cols-2 gap-2 text-white">
          {projects.map((item) => (
            <Link to={item.href}>
              <div className="p-4 border rounded-md bg-gray-950">
                {item.isDone ? (
                  <span className="px-3 mr-2">
                    <i
                      className={`bi bi-check-circle-fill text-${done} text-xl`}
                    ></i>
                  </span>
                ) : (
                  <span className="px-3 mr-2">
                    <i
                      className={`bi bi-x-circle-fill text-${notDone} text-xl`}
                    ></i>
                  </span>
                )}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
