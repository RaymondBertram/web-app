import React from "react";
import { UspCard } from "../../components";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export const Services = () => {
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
    <section id="services" className="px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#1f2933] pt-12 pb-6 px-6 rounded-3xl">
        <div className="usp_right md:order-1">
          <div className="cotents_wrapper text-white">
            <div className="content-headings mb-4">
              <h2 className="relative inline-block text-start leading-10 mb-2">
                Tired of finding a{" "}
                <span className="text-[40px] lg:text-5xl font-medium leading-8">
                  new location
                  <span>
                    <svg
                      className="absolute left-0 bottom-[-9px] w-full h-[16px]"
                      viewBox="0 0 100 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M5 4C20 6 40 7 60 5C80 3 95 2 100 2"
                        stroke="#8247FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>

                      <path
                        d="M0 14C15 12 35 13 50 12C65 11 75 10 80 10"
                        stroke="#8247FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </span>
                </span>
              </h2>
            </div>
            <div className="paragraph-wrapper mb-4">
              <h6 className="text-white leading-4 font-medium md:text-lg md:leading-6">
                Join payments evolution with us. Accept bank payments that are
                settled in seconds.
              </h6>
            </div>
            <div className="flex gap-2 justify-start">
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-nowrap text-center px-6 py-4 text-lg font-bold text-white bg-[#8247ff] rounded-4xl"
              >
                Get In Touch
                <ArrowRightIcon width={30} height={30} />
              </a>
            </div>
          </div>
        </div>

        <div className="usps_child_left flex flex-col gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2 }} // Stagger Effekt
            >
              <UspCard title={card.title} text={card.text} img={card.img} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
