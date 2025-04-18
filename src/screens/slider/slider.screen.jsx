import React from "react";
import { useMediaQuery } from "react-responsive";

import logo_1 from "../../assets/logos/logoipsum-331.svg";
import logo_2 from "../../assets/logos/logoipsum-338.svg";
import logo_3 from "../../assets/logos/logoipsum-353.svg";
import logo_4 from "../../assets/logos/logoipsum-357.svg";
import logo_5 from "../../assets/logos/logoipsum-362.svg";
import InfiniteCarousel from "../../components/image-strip/image-strip.component";

export const Slider = () => {
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5];
  // const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  // {!isTabletOrLarger ? <br /> : " "}

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-8 pt-15 pb-10 md:pt-20 md:gap-4 lg:pt-15">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center md:text-start text-xs md:text-sm font-semibold break-words whitespace-pre-line lg:pr-6">
          Diese [ZAHL]+ Firmen vertrauen uns bereits und analysieren mit HELLO
          TRAFFIC
        </p>
      </div>
      <div className="relative flex max-w-full w-full h-32 lg:rounded-[64px] overflow-hidden bg-[#f5f7fa] border-0">
        <InfiniteCarousel images={logos} />
      </div>
    </div>
  );
};
