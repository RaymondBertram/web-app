/* eslint-disable no-unused-vars */
import React from "react";
import { UnderlineSVG, UspCard } from "../../components";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useGlowContext } from "../../context/glow/glowContext";
import { DocumentChartBarIcon } from "@heroicons/react/24/solid";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";

import "./services.screen.css";

export const Services = () => {
  const { setGlow } = useGlowContext();
  const cards = [
    {
      title: "Fahrzeugfrequenzdaten",
      text: "Erfahren Sie mehr über den Fahrzeugverkehr am gewählten Standort.",
      icon: <DocumentChartBarIcon height={30} width={30} />,
      scrollYValue: 0.01,
      scrollSecondSymbol: 0.4,
    },
    {
      title: "Passantenfrequenzdaten",
      text: "Finden Sie heraus, wie belebt Ihre Wunschgegend ist.",
      icon: <FaPersonWalkingDashedLineArrowRight height={30} width={30} />,
      scrollYValue: 0.01,
      scrollSecondSymbol: 0.4,
    },
    {
      title: "Genaue Analysen",
      text: "Mit Aufschlüsselung der Daten nach Zeiträumen, Durchschnitten und Extrema haben Sie ein detailliertes Bild.",
      icon: <IoAnalytics height={30} width={30} />,
      scrollYValue: 0.01,
      scrollSecondSymbol: 0.4,
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
    <section
      id="services"
      className="px-2 overflow-hidden md:px-6 pt-30 pb-15 md:pt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start justify-items-center gap-12 bg-[#1f2933] pt-12 pb-6 px-6 rounded-3xl lg:pr-30 lg:pt-15">
        <div className="usp_right h-full relative md:order-1">
          <div className="cotents_wrapper h-full text-white md:flex md:flex-col md:justify-evenly">
            <div className="content-headings mb-4">
              <h2 className="relative inline-block font-medium text-start text-white leading-14 mb-10">
                Ihre{" "}
                <span className="text-[40px] lg:text-5xl font-medium leading-8 relative">
                  Standortanalyse
                  <UnderlineSVG duration={3} color="#FEC227" />
                </span>{" "}
                dreht sich im Kreis?
              </h2>
              <div className="paragraph-wrapper mb-8">
                <h6 className="text-white leading-6 font-medium md:text-lg md:leading-6">
                  Jetzt ist Schluss damit! Unsere Analysen bieten Ihnen alle
                  Informationen, die Sie zu einem Standort brauchen um Ihre
                  Entscheidung zu treffen.
                </h6>
              </div>
            </div>

            <div className="flex gap-2 justify-center md:justify-end md:mt-20">
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-nowrap text-center px-6 py-4 text-lg font-bold text-[#012060] bg-white rounded-4xl"
                onClick={() => setGlow(true)}
              >
                Direkt Anfragen!
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
              <UspCard
                title={card.title}
                text={card.text}
                icon={card.icon}
                scrollYValue={card.scrollYValue}
              />
            </motion.div>
          ))}
        </div>

        <div className="usps_child_left_larger hidden md:flex flex-col items-center gap-12">
          {cards.map((card, index) => (
            <div key={index} className={`usp-card`}>
              <UspCard
                title={card.title}
                text={card.text}
                icon={card.icon}
                scrollYValue={card.scrollYValue}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
