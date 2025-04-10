import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { UnderlineSVG } from "../../components";
import code from "../../assets/images/code.jpg";
import { div } from "framer-motion/client";

export const Solution = () => {
  const containerRef = useRef(null);
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Define transformation effects for each block (smaller increments)
  const scaleXFirst = useTransform(scrollYProgress, [0, 1], [0.96, 0.87]);
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
        {isTabletOrLarger ? (
          <div className="flex flex-col">
            {/* First Block */}
            <motion.div
              style={{
                scaleX: scaleXFirst,
                scaleY: scaleYFirst,
                transform: `translate3d(0, ${translateFirst}, 0)`,
              }}
              className="h-auto sticky top-[10%] color-blocks-wrap bg-[#dfd1f4] flex flex-col justify-between items-center rounded-2xl pt-6 md:pt-12 px-4 mb-2 md:min-h-[600px]"
            >
              <div className="relative text-center tracking-normal">
                <h2 id="first_block px-2 text-black font-bold mb-4">
                  Sie fordern Ihre{" "}
                  <span className="relative inline-block">
                    <h2>Standortanalyse</h2>
                    <UnderlineSVG />
                  </span>{" "}
                  {""}
                  ein
                </h2>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-1/2 p-4 mb-10">
                  <h3 className="text-4xl font-medium px-2 text-black mb-10">
                    In 2 Klicks zu Ihrem Auftrag - so simple!
                  </h3>
                  <p className="text-gray-600 mt-2 px-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>

                <motion.div
                  className="w-full md:w-1/2 px-4 pt-4 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={"image_card_1"}
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
              className="h-auto sticky top-[10%] color-blocks-wrap bg-[#dfc9c0] flex flex-col justify-between items-center rounded-2xl pt-6 md:pt-12 px-4 mb-2 md:min-h-[600px]"
            >
              <div className="relative text-center tracking-normal">
                <h2 id="first_block px-2 text-black font-medium mb-4">
                  Wir analysieren bis ins letzte{" "}
                  <span className="relative inline-block">
                    <h2>Detail</h2>
                    <UnderlineSVG />
                  </span>
                </h2>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-1/2 p-4 mb-10">
                  <h3 className="text-4xl font-medium px-2 text-black mb-10">
                    Damit Sie 100% Klarheit über den Standort haben
                  </h3>
                  <p className="text-gray-600 mt-2 px-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>

                <motion.div
                  className="w-full md:w-1/2 px-4 pt-4 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={"image_card_1"}
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

            {/* Third Block */}
            <motion.div
              style={{
                scaleX: scaleXThird,
                scaleY: scaleYThird,
                transform: `translate3d(0, ${translateThird}, 0)`,
              }}
              className="h-auto sticky top-[10%] color-blocks-wrap bg-[#dff3f6] flex flex-col justify-between items-center rounded-2xl pt-6 md:pt-12 px-4 mb-2 md:min-h-[600px]"
            >
              <div className="relative text-center tracking-normal">
                <h2 id="first_block px-2 text-black font-medium mb-4">
                  Sie erhalten Ihren Report per{" "}
                  <span className="relative inline-block">
                    <h2>E-Mail</h2>
                    <UnderlineSVG />
                  </span>
                </h2>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-1/2 p-4 mb-10">
                  <h3 className="text-4xl font-medium px-2 text-black mb-10">
                    Sie bekommen Ihre Daten so unkompliziert wie möglich
                  </h3>
                  <p className="text-gray-600 mt-2 px-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                </div>

                <motion.div
                  className="w-full md:w-1/2 px-4 pt-4 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={"image_card_1"}
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
        ) : (
          <div className="flex flex-col space-y-6 py-4">
            {/* First Block */}
            <motion.div
              className="bg-[#dfd1f4] flex flex-col justify-around items-center rounded-2xl pt-6 px-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="relative text-center tracking-normal">
                <h2 id="first_block text-black">
                  Sie fordern Ihre{" "}
                  <span className="relative inline-block text-black">
                    <h2 className="text-black">Standortanalyse</h2>
                    <UnderlineSVG />
                  </span>{" "}
                  ein
                </h2>
              </div>

              <div className="w-full p-4">
                <h3 className="text-[28px] text-black font-medium mb-4">
                  In 2 Klicks zu Ihrem Auftrag - so simple!
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="w-full px-4 pt-4 flex justify-center">
                <img
                  src={code}
                  alt="Dashboard"
                  className="w-full max-w-md rounded-t-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Second Block */}
            <motion.div
              className="bg-[#dfc9c0] flex flex-col justify-around items-center rounded-2xl pt-6 px-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="relative text-center tracking-normal">
                <h2 id="first_block text-black">
                  Wir analysieren bis ins letzte{" "}
                  <span className="relative inline-block text-black">
                    <h2 className="text-black">Detail</h2>
                    <UnderlineSVG />
                  </span>
                </h2>
              </div>

              <div className="w-full p-4">
                <h3 className="text-[28px] text-black font-medium mb-4">
                  Damit Sie 100% Klarheit über den Standort haben
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="w-full px-4 pt-4 flex justify-center">
                <img
                  src={code}
                  alt="Dashboard"
                  className="w-full max-w-md rounded-t-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Third Block */}
            <motion.div
              className="bg-[#dff3f6] flex flex-col justify-around items-center rounded-2xl pt-6 px-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="relative text-center tracking-normal">
                <h2 id="first_block text-black">
                  Sie erhalten Ihren Report per{" "}
                  <span className="relative inline-block text-black">
                    <h2 className="text-black">E-Mail</h2>
                    <UnderlineSVG />
                  </span>
                </h2>
              </div>

              <div className="w-full p-4">
                <h3 className="text-[28px] text-black font-medium mb-4">
                  Sie bekommen Ihre Daten so unkompliziert wie möglich
                </h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>

              <div className="w-full px-4 pt-4 flex justify-center">
                <img
                  src={code}
                  alt="Dashboard"
                  className="w-full max-w-md rounded-t-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
