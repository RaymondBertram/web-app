import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { UnderlineSVG } from "../../components";
import code from "../../assets/images/code.jpg";

export const Solution = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define transformation effects for each block (smaller increments)
  const scaleXFirst = useTransform(scrollYProgress, [0, 1], [0.97, 0.88]);
  const scaleYFirst = useTransform(scrollYProgress, [0, 1], [0.97, 0.92]);
  const translateFirst = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-50px"]
  );

  const scaleXSecond = useTransform(scrollYProgress, [0, 1], [0.98, 0.89]); // Slightly bigger
  const scaleYSecond = useTransform(scrollYProgress, [0, 1], [0.99, 0.94]);
  const translateSecond = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-50px"]
  );

  const scaleXThird = useTransform(scrollYProgress, [0, 1], [1, 0.91]); // Largest but subtle
  const scaleYThird = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const translateThird = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "-50px"]
  );

  return (
    <section className="px-3" id="solution">
      <div ref={containerRef} className="solution-card-container relative">
        <div className="flex flex-col">
          {/* First Block */}
          <motion.div
            style={{
              scaleX: scaleXFirst,
              scaleY: scaleYFirst,
              transform: `translate3d(0, ${translateFirst}, 0)`,
            }}
            className="h-auto sticky top-[10%] color-blocks-wrap bg-[#dfd1f4] flex flex-col justify-between items-center rounded-2xl pt-6 px-4 mb-2"
          >
            <div className="relative text-center tracking-normal">
              <h2 id="first_block">
                Lorem{" "}
                <span className="relative inline-block">
                  <h2>API solution</h2>
                  <UnderlineSVG />
                </span>{" "}
                Lorem ipsum dolor sit
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-6">
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-4xl font-medium">Lorem ipsum dolor sit</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
                </p>
              </div>

              <motion.div
                className="w-full md:w-1/2 px-4 pt-4 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={code}
                  alt="Dashboard"
                  className="w-full max-w-md rounded-t-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Second Block */}
          <motion.div
            style={{
              scaleX: scaleXSecond,
              scaleY: scaleYSecond,
              transform: `translate3d(0, ${translateSecond}, 0)`,
            }}
            className="h-auto sticky top-[10%] bg-[#dfc9c0] flex flex-col justify-between items-center rounded-2xl pt-6 px-4 mb-2"
          >
            <div className="relative text-center tracking-normal">
              <h2 id="second_block">
                Lorem{" "}
                <span className="relative inline-block">
                  <h2>API solution</h2>
                  <UnderlineSVG />
                </span>{" "}
                Lorem ipsum dolor sit
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-6">
              <motion.div
                className="w-full md:w-1/2 px-4 pt-4 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={code}
                  alt="Dashboard"
                  className="w-full max-w-md rounded-t-2xl"
                  loading="lazy"
                />
              </motion.div>

              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-4xl font-medium">Lorem ipsum dolor sit</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third Block */}
          <motion.div
            style={{
              scaleX: scaleXThird,
              scaleY: scaleYThird,
              transform: `translate3d(0, ${translateThird}, 0)`,
            }}
            className="h-auto sticky top-[10%] bg-[#dff3f6] flex flex-col justify-between items-center rounded-2xl pt-6 px-4 mb-2"
          >
            <div className="relative text-center tracking-normal">
              <h2 id="third_block">
                Lorem{" "}
                <span className="relative inline-block">
                  <h2>API solution</h2>
                  <UnderlineSVG />
                </span>{" "}
                Lorem ipsum dolor sit
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-6">
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-4xl font-medium">Lorem ipsum dolor sit</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
                </p>
              </div>

              <motion.div
                className="w-full md:w-1/2 px-4 pt-4 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={code}
                  alt="Dashboard"
                  className="w-full max-w-md rounded-t-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
