import { div } from "framer-motion/client";
import React from "react";

export const ProcessCard = ({ title, logo }) => {
  return (
    <div className="flex flex-col justify-around items-center bg-white size-24 md:size-20 lg:size-25 rounded-2xl shadow-xl">
      <div className="customer_logo size-9">
        <img src={logo} alt={`${logo}_alt`} />
      </div>
      <div className="customer_name">
        <p className="text-xs">{title}</p>
      </div>
    </div>
  );
};
