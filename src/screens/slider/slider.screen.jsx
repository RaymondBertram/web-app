import React, { useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

import logo_1 from "../../assets/logos/logoipsum-331.svg";
import logo_2 from "../../assets/logos/logoipsum-338.svg";
import logo_3 from "../../assets/logos/logoipsum-353.svg";
import logo_4 from "../../assets/logos/logoipsum-357.svg";
import logo_5 from "../../assets/logos/logoipsum-362.svg";
import useMeasure from "react-use-measure";

export const Slider = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5];

  useEffect(() => {
    let finalPosition = -width / 2 - 8;
    console.log(finalPosition);

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="flex flex-col md:flex-row px-4 py-10">
      <div className="flex items-center justify-center">
        <p className="text-start font-bold">
          Trusted by 2000+ Customers, 19 Countries and counting...
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row lg:flex-row max-w-full w-full h-32 lg:rounded-[64px] overflow-hidden">
        <motion.div
          className="flex gap-4"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="grayscale opacity-50 w-[80px] h-[80px]" // Erhöhte Größe für bessere Sichtbarkeit
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
