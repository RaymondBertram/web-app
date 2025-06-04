import React from "react";

export const BigCards = ({ h1, h2, text, img, color }) => {
  return (
    <div className="h-screen flex sticky top-[10%]">
      <div
        className="flex flex-col items-start gap-3 rounded-3xl m-1.5 sticky p-8 lg:flex-row"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col w-full text-left">
          <h1 className="p-4 text-center md:px-0 md:text-start">{h1}</h1>
          <h2 className="font-normal pb-">{h2}</h2>
          <p className="opacity-60 pb-8">{text}</p>
        </div>
        <div className="w-full flex justify-center mt-4">
          <img className="w-full md:w-[90%] rounded" src={img} alt="logo" />
        </div>
      </div>
    </div>
  );
};
