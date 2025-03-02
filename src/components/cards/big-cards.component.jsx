import React from "react";

export const BigCards = ({ h1, h2, text, img, color, i }) => {
  return (
    <div className="h-screen flex sticky top-[15%]">
      <div
        className="flex flex-col items-center p-[24px_90px] rounded-[24px] m-1.5 sticky"
        style={{ backgroundColor: color, top: `calc(-10% + ${i * 25}px)` }}
      >
        <h1 className="text-[60px] text-center p-4 md:text-[40px]">{h1}</h1>
        <div className="flex flex-row items-center justify-between md:flex-col">
          <div className="w-1/3 pr-8 md:w-full">
            <div className="text-[30px] font-normal pb-8">
              <h2>{h2}</h2>
            </div>
            <div className="text-[16px] opacity-60 pb-8">
              <p>{text}</p>
            </div>
          </div>
          <div className="overflow-hidden flex justify-center md:w-[90%] md:h-[90%]">
            <img className="size-100 rounded" src={img} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
