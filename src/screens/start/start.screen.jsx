/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { AnimatedHeaders, UnderlineSVG } from "../../components";
import { useGlowContext } from "../../context/glow/glowContext";

import animationPrimary from "../../assets/videos/animation.mp4";
import animationSecondary from "../../assets/videos/animation_2.mp4";

export const Start = () => {
  const [showOther, setShowOther] = useState(false);
  const headers = ["Infos auf Abruf", "Verkehrsanalysen", "Genaue Daten"];
  const { setGlow } = useGlowContext();

  const handleVideoEnd = () => {
    setShowOther(true);
  };

  return (
    <section id="start" className="px-4 pt-[150px] md:px-6">
      <div>
        <div className="hero-parent flex flex-col md:grid md:grid-cols-6 md:gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="hero-child lg:flex items-center col-span-3"
          >
            <div className="flex flex-col justify-center w-[90%]">
              <div className="text-start mb-1 md:mb-0 lg:mb-4">
                <AnimatedHeaders headers={headers} />
              </div>
              <div>
                <h1 className="inline-block mt-3 sm:text-[28px] md:text-[32px] lg:text-[55px] text-black font-medium leading-12 md:leading-none">
                  zum perfekten
                </h1>{" "}
                <h1 className="relative mt-2 inline-block sm:text-[28px] md:text-[32px] lg:text-[60px] text-black font-medium leading-12 md:leading-none">
                  <span className="span-style sm:text-[28px] md:text-[32px] lg:text-[55px] move-heading">
                    Standort
                    {/* <UnderlineSVG duration={2} color="#b9278b" /> */}
                  </span>
                </h1>
              </div>
              <div className="my-10">
                <p className="text-start leading-6 md:leading-6">
                  Mit HELLO TRAFFIC bekommen Sie in in 2 Klicks direkt hier
                  einen individuellen Report zu den Daten des von Ihnen
                  gewünschten Standortes. Sparen Sie sich teure Ingenieursbüros
                  oder kostspielige Messprojekte.
                </p>
              </div>
              <div className="flex gap-2 justify-start">
                <a
                  href="#location"
                  className="inline-flex items-center gap-2 text-nowrap text-center px-6 py-4 text-lg font-bold text-white bg-[#000000] rounded-4xl"
                  onClick={() => setGlow(true)}
                >
                  Jetzt loslegen
                  <ArrowRightIcon width={30} height={30} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center mt-15 md:my-4 col-span-3">
            {!showOther ? (
              <video
                key="video-primary"
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="w-full object-cover rounded-lg"
              >
                <source src={animationPrimary} type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
              </video>
            ) : (
              <video
                key="video-secondary"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-lg"
              >
                <source src={animationSecondary} type="video/mp4" />
                Dein Browser unterstützt das Video-Tag nicht.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
