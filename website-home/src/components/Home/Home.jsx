// Home.js

import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import YT from "react-youtube";
import Footer from "../Footer/Footer";
import Sponsors from "./Sponsors";

function Home() {
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // useEffect(() => {
  //   let prevScrollPos = window.pageYOffset;

  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     const isScrollingDown = currentScrollPos > prevScrollPos;

  //     setIsHeaderVisible(!isScrollingDown);
  //     prevScrollPos = currentScrollPos;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="app-body">
        <Header />
        <Navbar />
      </div>

      <div>
        <Banner />
      </div>
      <div className="text-div">
        <h2>MOST POPULAR EVENTS</h2>
      </div>
      <div>
        <Card />
      </div>
      <div className="button-div">
        <Button style={{ color: "yellow" }}> See more </Button>
      </div>

      <div>
        <h1 className="px-12 text-amber-600 font-bold text-lg mt-20 text-center text-3xl">
          Our Events and Conferences
        </h1>

        <div>
          <div className="flex flex-wrap justify-center mt-10 ">
            <div
              className=" shadow-lg p-7 
          w-64 h-72 m-4 bg-red-800 rounded-xl"
            >
              <div className=" mb-4">
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  size="5x"
                  className="text-white p-4"
                />
              </div>
              <h2 className="text-lg font-bold text-white">LATEST UPDATES</h2>
              <p className="font-semibold text-white">
                Check the latest Conferences updates and get to know them.
              </p>
            </div>

            {/* <div
              className="shadow-lg p-7  
          w-64 h-72 m-4 rounded-xl"
            > */}

            <div
              className="shadow-lg p-7  
          w-64 h-72 m-4 rounded-xl"
            >
              <div className=" mb-4">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="2x"
                  className="text-red-800 "
                />
              </div>
              <h2 className="text-lg font-bold text-red-800  p-2">
                Search Our Conferences ...{" "}
              </h2>
              <p className="font-semibold text-slate-500">
                Stand out in the Events, Conferences and meet our sponsors.
              </p>
            </div>

            <div className="shadow-lg rounded-lg w-5/12 h-72 m-4 overlay">
              <YT
                videoId="vAVosufhvk8"
                opts={{
                  height: "287",
                  width: "550",
                  playerVars: {
                    autoplay: 1,
                    loop: 1,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-12">
        <div className="bg-amber-600 flex items-center justify-between ">
          <p className="text-white text-2xl p-28 font-bold text-center">
            Subscribe for Latest Updates regarding Events and Conferences
          </p>
          <div className="flex items-center">
            <button className="p-2 bg-black rounded-lg text-white mr-20">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-amber-600 text-4xl font-bold text-center mt-10">
          SPONSORS
        </h2>
        <p className="text-gray-400 text-sm p-4 overflow-hidden text-center">
          Some of the companies who helped us from decades to manage events and
          conferences.
        </p>
        {/* <div>
          <Sponsors />
        </div> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
