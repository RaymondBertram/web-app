import React from "react";
import { motion } from "framer-motion";
import { Card } from "../../components";

import notes from "../../assets/icons/notes.svg";
import fast from "../../assets/icons/fast.svg";
import presentation from "../../assets/icons/Vector.svg";

export const Services = () => {
  const cards = [
    {
      title: "Echtzeit-Verkehrsüberwachung",
      text: "Klare Erfassung von Verkehrsdaten zur Optimierung von Verkehrsströmen.",
      img: notes,
    },
    {
      title: "Automatisierte Geschwindigkeitskontrollen",
      text: "Präzise Erkennung von Tempoüberschreitungen für mehr Sicherheit.",
      img: fast,
    },
    {
      title: "Kennzeichenerkennung",
      text: "Effiziente Parkraumüberwachung und Zufahrtskontrolle.",
      img: presentation,
    },
  ];

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section id="services">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#1A2B4D] gap-6 rounded-[24px] w-full h-full p-[80px_32px_64px_36px] items-center justify-evenly">
        <motion.div
          initial={"hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={variants}
          className="flex flex-col items-center justify-center w-full gap-10"
        >
          {cards.map((el) => {
            return <Card key={el.title} {...el} />;
          })}
        </motion.div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col text-white">
            <h1 className="font-bold">Unsere Leistungen</h1>
            <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
