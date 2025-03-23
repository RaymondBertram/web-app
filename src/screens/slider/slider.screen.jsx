import React from "react";

import logo_1 from "../../assets/logos/logoipsum-331.svg";
import logo_2 from "../../assets/logos/logoipsum-338.svg";
import logo_3 from "../../assets/logos/logoipsum-353.svg";
import logo_4 from "../../assets/logos/logoipsum-357.svg";
import logo_5 from "../../assets/logos/logoipsum-362.svg";
import InfiniteCarousel from "../../components/image-strip/image-strip.component";

export const Slider = () => {
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5];

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-6 py-10 md:gap-4 lg:pt-15">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center md:text-start text-xs md:text-sm font-semibold break-words line-clamp-2 lg:pr-6">
          Trusted by 2000+ Companies, 19 Countries and counting...
        </p>
      </div>
      <div className="relative flex max-w-full w-full h-32 lg:rounded-[64px] overflow-hidden bg-[#f5f7fa] border-0">
        <InfiniteCarousel images={logos} />
      </div>
    </div>
  );
};
