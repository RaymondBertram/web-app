import React from "react";
import { AnimatedHeaders } from "../../components";

import animationHome from "../../assets/videos/animation.mp4";
// import animationHome2 from "../../assets/videos/animation_2.gif";

export const Home = () => {
  const headers = ["Fahrradverkehr", "Autoverkehr", "Fußgängerverkehr"];

  return (
    <section id="home" className="px-2 py-14 md:py-[150px] md:px-18">
      <div>
        <div className="hero-parent flex flex-col md:grid md:grid-cols-2 md:gap-6">
          <div className="hero-child">
            <div className="flex flex-col justify-center">
              <div className="text-start">
                <AnimatedHeaders headers={headers} />
              </div>
              <div className="text-start">
                <h1 className="relative inline-block lg:text-[70px] text-black font-black">
                  Ihren Standort
                  <span>
                    <svg
                      className="absolute left-0 bottom-[-10px] w-full h-[16px]"
                      viewBox="0 0 100 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 4C20 6 40 7 60 5C80 3 95 2 100 2"
                        stroke="#8247FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>

                      <path
                        d="M0 14C15 12 35 13 50 12C65 11 75 10 80 10"
                        stroke="#8247FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </h1>
              </div>
              <div className="my-10">
                <p className="text-start text-sm text-black md:text-base lg:text-lg">
                  {" "}
                  Willkommen bei [Name der Firma], Ihrem zuverlässigen Partner
                  für moderne und effiziente Verkehrsüberwachung. Mit
                  innovativer Technologie und präzisen Analysen sorgen wir
                  dafür, dass Straßen sicherer, Verkehrsflüsse optimiert und
                  Regelverstöße transparent dokumentiert werden.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover rounded-lg"
            >
              <source src={animationHome} type="video/mp4" />
              Dein Browser unterstützt das Video-Tag nicht.
            </video>
            {/* <img
              src={animationHome2}
              alt="Animation"
              className="w-full object-cover rounded-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
