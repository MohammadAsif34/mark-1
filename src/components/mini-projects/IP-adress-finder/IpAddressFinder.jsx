import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const IpAddressFinder = () => {
  const [ipAddress, setIpAddress] = useState({});
  const [mapData, setMapData] = useState(null);
  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const res = await fetch(
          "https://geo.ipify.org/api/v2/country?apiKey=at_G7TWEk70PyhIJwSps2B2qgB4K5s23&ipAddress"
        )
          .then((res) => res.json())
          .then((data) => {
            const ip = {
              ip: data.ip,
              location: data.location.region + ", " + data.location.country,
              isp: data.isp,
            };
            setIpAddress(ip);
          });
        // setIpAddress(JSON.stringify(data)));
      } catch (err) {
        console.error(`Error fetching IP address ${err}`);
      }
    };
    fetchIpAddress();
  }, []);
  const gmap_api_key = "AIzaSyDgsdbrhcSffkLeM27cVniaoyNAsoqsdbc";
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch(
          `  https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyDgsdbrhcSffkLeM27cVniaoyNAsoqsdbc&parameters`
        );
        if (!res.ok) {
          throw new Error("Network responce was not ok!!");
        }
        const data = await res.json();
        setMapData(data);
        // .then((res) => res.json());
      } catch (error) {
        console.log(` Error fetching map ${error}`);
      }
    };
    fetchLocation();
  }, []);
  // alert(ipAddress.ip);
  return (
    <>
      <div className="w-screen h-48 bg-gray-900 flex flex-col items-end ">
        <div className="w-2/3 h-fit py-3 mx-auto border bg-white rounded-2xl shadow-md translate-y-24">
          <h1 className="py-2 text-4xl text-center font-bold">
            Your IP Address
          </h1>
          <div className="mx-14 flex justify-center">
            <div className=" px-6  border-r-2 flex-1">
              <h1 className=" py-2 text-xl text-gray-600 font-semibold ">
                IP Address
              </h1>
              {ipAddress.ip}
            </div>
            <div className=" px-6  border-r-2 flex-1">
              <h1 className=" py-2 text-xl text-gray-600 font-semibold ">
                Location
              </h1>
              {ipAddress.location}
            </div>
            <div className=" px-6 flex-1">
              <h1 className=" py-2 text-xl text-gray-600 font-semibold ">
                ISP
              </h1>
              {ipAddress.isp}
            </div>
          </div>
        </div>
        <div className="w-full h-96 bg-gray-500">
          <div
            style={{ width: "100%", height: "700px" }}
            className="bg-red-400"
          >
            {/* <img
              alt=""
              src="https://images.pexels.com/photos/15592110/pexels-photo-15592110/free-photo-of-facade-of-a-row-of-townhouses-in-amsterdam-netherlands.jpeg"
              style={{
                width: "100%",
                height: "calc(100vh - 222px)",
                backgroundSize: "cover",
              }}
            /> */}
            <iframe
              src="https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyDgsdbrhcSffkLeM27cVniaoyNAsoqsdbc&parameters"
              frameborder="0"
              style={{ margin: "auto", width: "100%", height: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default IpAddressFinder;
