import { useEffect, useState } from "react";

export const UspCard = ({ title, text }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative transform-gpu scale-100 rotate-0 skew-0 preserve-3d w-[350px] md:w-[280px] lg:w-[400px]">
      <div className="relative flex flex-col items-center p-6 bg-[#a9cecc] shadow-lg rounded-3xl">
        <div className="relative flex items-center justify-start size-16 mb-4 w-full">
          <div
            className="absolute w-8 h-8 bg-gray-300 rounded-full"
            style={{
              transform: `translate3d(${-scrollY * 0.01}px, ${
                -scrollY * 0.001
              }px, 0px) rotate(11deg)`,
            }}
          ></div>
          <div
            className="absolute w-8 h-8 bg-[#1f2933] rounded-full"
            style={{
              transform: `translate3d(${scrollY * 0.01}px, ${
                scrollY * 0.001
              }px, 0px) rotate(11deg)`,
            }}
          ></div>
        </div>
        <h2 className="text-2xl font-medium text-[#23596d] w-full">{title}</h2>
        <p className="text-[#23596d] font-base text-sm mt-2 text-start w-full">
          {text}
        </p>
      </div>
    </div>
  );
};
