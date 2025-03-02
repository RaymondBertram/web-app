import React from "react";
import { AnimatedHeaders } from "../../components";

import animationHome from "../../assets/videos/animation.mp4";

export const Home = () => {
  const headers = ["Fahrradverkehr", "Autoverkehr", "Fußgängerverkehr"];

  return (
    <section id="home" className="py-10 px-4">
      <div className="lg:py-[125px]">
        <div className="hero-parent flex flex-col md:grid md:grid-cols-2 md:gap-6">
          <div className="hero-child">
            <div className="flex flex-col">
              <div className="text-start">
                <AnimatedHeaders headers={headers} />
              </div>
              <div className="text-start">
                <h1 className="relative inline-block font-bold">
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
                        d="M0 14C15 12 35 13 55 12C75 10 90 9 100 9"
                        stroke="#8247FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </h1>
              </div>
              <div className="my-10">
                <p className="text-justify text-base md:text-lg lg:text-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};
