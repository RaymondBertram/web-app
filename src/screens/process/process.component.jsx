import React from "react";

import arrow from "../../assets/icons/arrow.svg";
import logo from "../../assets/logos/logo512.png";

const CustomCard = ({ img, text }) => {
  return (
    <div className="bg-gray-100 rounded-[2.25em] flex flex-col justify-center items-center w-[21.5em] h-[21.5em] p-10 text-center shadow-lg">
      <img src={img} alt="icon" className="mb-4 w-16 h-16 object-cover" />
      <p className="text-gray-700 text-lg font-semibold">{text}</p>
    </div>
  );
};

export const ProcessDiagramScreen = () => {
  return (
    <section
      className="w-full flex justify-center py-10 min-h-screen px-2"
      id="process"
    >
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
        {/* Erste Karte */}
        <div className="flex flex-col items-center">
          <CustomCard img={logo} text="Ihre Anfrage" />
        </div>

        {/* Erster Pfeil */}
        <div className="flex justify-center md:rotate-0 rotate-90">
          <img src={arrow} alt="arrow" className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Zweite Karte */}
        <div className="flex flex-col items-center">
          <CustomCard img={logo} text="Wir Analysieren" />
        </div>

        {/* Zweiter Pfeil */}
        <div className="flex justify-center md:rotate-0 rotate-90">
          <img src={arrow} alt="arrow" className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Dritte Karte */}
        <div className="flex flex-col items-center">
          <CustomCard img={logo} text="Wir Beraten Sie Individuell" />
        </div>
      </div>
    </section>
  );
};
