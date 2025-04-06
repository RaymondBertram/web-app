import React from "react";
import { UnderlineSVG, UspCard } from "../../components";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useGlowContext } from "../../context/glow/glowContext";

import "./services.screen.css";

export const Services = () => {
  const { setGlow } = useGlowContext();
  const cards = [
    {
      title: "Infrastruktur",
      text: "Klare Erfassung von Verkehrsdaten zur Optimierung von Verkehrsströmen.",
    },
    {
      title: "Standort",
      text: "Präzise Erkennung von Verkehr und Standort.",
    },
    {
      title: "Kennzeichen",
      text: "Effiziente Parkraumüberwachung und Zufahrtskontrolle.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="px-2 overflow-hidden md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start justify-items-center gap-12 bg-[#1f2933] pt-12 pb-6 px-6 rounded-3xl lg:pr-30 lg:pt-15">
        <div className="usp_right h-full relative md:order-1">
          <div className="cotents_wrapper h-full text-white md:flex md:flex-col md:justify-evenly">
            <div className="content-headings mb-4">
              <h2 className="relative inline-block font-medium text-start text-white leading-10 mb-10">
                Tired of finding a{" "}
                <span className="text-[40px] lg:text-5xl font-medium leading-8 relative">
                  location?
                  <UnderlineSVG duration={3} />
                </span>
              </h2>
              <div className="paragraph-wrapper mb-8">
                <h6 className="text-white leading-4 font-medium md:text-lg md:leading-6">
                  Optimiere den Stadtverkehr mit uns. Erhalte
                  Echtzeit-Verkehrsanalysen für mehr Sicherheit und Effizienz
                  auf den Straßen.
                </h6>
              </div>
            </div>

            <div className="flex gap-2 justify-center md:justify-end md:mt-20">
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-nowrap text-center px-6 py-4 text-lg font-bold text-white bg-[#8247ff] rounded-4xl"
                onClick={() => setGlow(true)}
              >
                Get In Touch
                <ArrowRightIcon width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="usps_child_left_mobile flex flex-col gap-4 md:hidden">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.2 }} // Stagger Effekt
            >
              <UspCard title={card.title} text={card.text} img={card.img} />
            </motion.div>
          ))}
        </div>

        <div className="usps_child_left_larger hidden md:flex flex-col items-center gap-12">
          {cards.map((card, index) => (
            <div key={index} className={`usp-card`}>
              <UspCard title={card.title} text={card.text} img={card.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
