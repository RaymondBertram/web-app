import React from "react";
import { useMediaQuery } from "react-responsive";

import customer_logo_1 from "../../assets/logos/customer_1.png";
import customer_logo_2 from "../../assets/logos/customer_2.png";
import customer_logo_3 from "../../assets/logos/customer_3.png";
import InfiniteCarousel from "../../components/image-strip/image-strip.component";

export const Slider = () => {
  const logos = [customer_logo_1, customer_logo_2, customer_logo_3];
  // const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  // {!isTabletOrLarger ? <br /> : " "}

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-8 pt-15 pb-10 md:pt-20 md:gap-4 lg:pt-15">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center md:text-start text-xs md:text-sm font-semibold break-words whitespace-pre-line lg:pr-6">
          Diese Firmen und weitere vertrauen uns bereits und analysieren mit
          HELLO TRAFFIC
        </p>
      </div>
      <div className="relative flex max-w-full w-full h-35 lg:rounded-[64px] overflow-hidden bg-white border-0">
        <InfiniteCarousel images={logos} />
      </div>
    </div>
  );
};
