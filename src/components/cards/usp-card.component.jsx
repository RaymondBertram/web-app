import { useEffect, useState } from "react";

export const UspCard = ({
  title,
  text,
  icon,
  scrollYValue,
  scrollSecondSymbol,
}) => {
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
      <div className="relative flex flex-col items-center p-6 bg-[#FFFFFF] shadow-lg rounded-3xl">
        <div className="relative flex items-center justify-start size-20 mb-4 w-full">
          <div
            className="flex items-center justify-center absolute w-10 h-10 bg-gray-300 rounded-full z-10"
            style={{
              transform: `translate3d(${scrollY * scrollYValue}px, ${
                -scrollY * 0.001
              }px, 0px)`,
            }}
          >
            {icon}
          </div>
          <div
            className="absolute w-8 h-8 bg-[#42576c] rounded-full z-0"
            style={{
              transform: `translate3d(${scrollY * scrollSecondSymbol}px, ${
                scrollY * 0.001
              }px, 0px) rotate(15deg)`,
            }}
          ></div>
        </div>
        <h2 className="text-2xl md:text-xl font-medium text-black w-full">
          {title}
        </h2>
        <p className="text-[#52606d] font-base text-sm mt-2 text-start w-full">
          {text}
        </p>
      </div>
    </div>
  );
};
