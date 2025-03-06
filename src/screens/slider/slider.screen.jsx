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
    <div className="flex flex-col md:flex-row px-2 md:px-18 py-10 lg:pt-15">
      <div className="flex items-start justify-center">
        <p className="text-start text-base font-extrabold text-black">
          Trusted by 2000+ Customers, 19 Countries and counting...
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row lg:flex-row max-w-full w-full h-32 lg:rounded-[64px] overflow-hidden">
        <InfiniteCarousel images={logos} />
      </div>
    </div>
  );
};
