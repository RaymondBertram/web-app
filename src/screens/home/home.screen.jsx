import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { AnimatedHeaders, UnderlineSVG } from "../../components";
import { useGlowContext } from "../../context/glow/glowContext";

import animationPrimary from "../../assets/videos/animation.mp4";
import animationSecondary from "../../assets/videos/animation_2.mp4";

export const Home = () => {
  const [showOther, setShowOther] = useState(false);
  const headers = ["Fahrradverkehr", "Autoverkehr", "Fußgängerverkehr"];
  const { setGlow } = useGlowContext();

  const handleVideoEnd = () => {
    setShowOther(true);
  };

  return (
    <section id="home" className="px-3 pt-14 md:pt-[150px] md:px-8">
      <div>
        <div className="hero-parent flex flex-col md:grid md:grid-cols-6 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="hero-child lg:flex items-center col-span-3"
          >
            <div className="flex flex-col justify-center w-[90%]">
              <div className="text-start">
                <AnimatedHeaders headers={headers} />
              </div>
              <div className="text-start">
                <h1 className="relative inline-block lg:text-[70px] text-black">
                  Ihren Standort
                  <span>
                    <UnderlineSVG duration={2} />
                  </span>
                </h1>
              </div>
              <div className="my-10">
                <p className="text-start leading-4 md:leading-6">
                  Willkommen bei [Name der Firma] – Ihrem Partner für moderne
                  Verkehrsüberwachung. Mit innovativer Technik optimieren wir
                  Verkehrsflüsse, erhöhen die Sicherheit und dokumentieren
                  Regelverstöße transparent.
                </p>
              </div>
              <div className="flex gap-2 justify-start">
                <a
                  href="#location"
                  className="inline-flex items-center gap-2 text-nowrap text-center px-6 py-4 text-lg font-bold text-white bg-[#8247ff] rounded-4xl"
                  onClick={() => setGlow(true)}
                >
                  Lets Go
                  <ArrowRightIcon width={30} height={30} />
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center my-4 col-span-3">
            {!showOther ? (
              <video
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
