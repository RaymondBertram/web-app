import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { UnderlineSVG } from "../../components";
import solution_1 from "../../assets/images/solution_1.png";
import solution_2 from "../../assets/images/solution_2.png";
import solution_3 from "../../assets/images/solution_3.png";

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
    <section className="px-3 pt-15 md:py-20" id="solution">
      <div ref={containerRef} className="solution-card-container">
        {isTabletOrLarger ? (
          <div className="flex flex-col">
            {/* First Block */}
            <motion.div
              style={{
                scaleX: scaleXFirst,
                scaleY: scaleYFirst,
                transform: `translate3d(0, ${translateFirst}, 0)`,
              }}
              className="h-auto sticky top-[10%] color-blocks-wrap bg-[#F7F7F7] shadow-360 flex flex-col justify-between items-center rounded-2xl pt-6 md:pt-12 px-4 mb-2 md:min-h-[650px]"
            >
              <div className="relative text-center tracking-normal">
                <h2
                  id="first_block px-2"
                  className="text-black font-medium mb-4"
                >
                  Fordern Sie Ihre{" "}
                  <span className="relative text-black inline-block">
                    <h2 className="span-style">Standortanalyse</h2>
                  </span>{" "}
                  {""}
                  ein
                </h2>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-1/2 p-4 mb-10">
                  <h3 className="text-4xl text-black font-medium px-2 mb-10">
                    In 2 Klicks zu Ihrem Auftrag - so simple!
                  </h3>
                  <p className="text-black mt-2 px-2">
                    Sie möchten Ihre Standortanalyse beauftragen? Kein Problem –
                    bei uns geht das schnell und unkompliziert. In nur zwei
                    einfachen Schritten können Sie Ihre Anfrage abschließen.
                    Ohne langes Suchen, ohne Papierkram. So sparen Sie Zeit und
                    kommen schneller zu den Informationen, die Sie wirklich
                    brauchen.
                    <br />
                    <br />
                    Unsere benutzerfreundliche Oberfläche führt Sie intuitiv
                    durch den Prozess. Sie wählen Ihren Standort, geben Ihre
                    Kontaktdaten an – und den Rest übernehmen wir. Mit einem
                    Klick ist Ihr Auftrag bei uns. Sie können sich darauf
                    verlassen, dass wir uns sofort um Ihr Anliegen kümmern und
                    Sie zeitnah Rückmeldung erhalten.
                  </p>
                </div>

                <motion.div
                  className="w-full md:w-1/2 px-4 pt-4 flex flex-col justify-end items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={"image_card_1"}
                >
                  <img
                    src={solution_1}
                    alt="verkehrsanalyse_schnell"
                    className="w-full object-contain h-full rounded-2xl"
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
              className="h-auto sticky top-[10%] color-blocks-wrap bg-[#F7F7F7] shadow-360 flex flex-col justify-between items-center rounded-2xl pt-6 md:pt-12 px-4 mb-2 md:min-h-[650px]"
            >
              <div className="relative text-center tracking-normal">
                <h2
                  id="first_block"
                  className="px-2 text-black font-medium mb-4"
                >
                  Wir analysieren bis ins letzte{" "}
                  <span className="relative inline-block">
                    <h2 className="span-style">Detail</h2>
                  </span>
                </h2>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-1/2 p-4 mb-10">
                  <h3 className="text-4xl font-medium px-2 text-black mb-10">
                    Damit Sie 100% Klarheit über den Standort haben
                  </h3>
                  <p className="text-black mt-2 px-2">
                    Unser Expertenteam prüft den Standort gründlich und
                    datenbasiert – von der regionalen Infrastruktur bis hin zur
                    Zielgruppenanalyse. Jeder relevante Aspekt wird
                    berücksichtigt, damit Sie eine fundierte Entscheidung
                    treffen können. Sie erhalten einen detaillierten Einblick in
                    Chancen und Risiken – verständlich, transparent und
                    individuell auf Ihr Projekt zugeschnitten.
                    <br />
                    <br />
                    Dabei greifen wir auf aktuelle Marktanalysen, demografische
                    Daten und wirtschaftliche Kennzahlen zurück, um eine präzise
                    Bewertung vorzunehmen. Zusätzlich fließen regionale
                    Besonderheiten, Wettbewerbssituation sowie zukünftige
                    Entwicklungspotenziale in unsere Analyse ein. So erhalten
                    Sie nicht nur eine Momentaufnahme, sondern eine strategische
                    Entscheidungsgrundlage für Ihr Vorhaben. Unser Ziel ist es,
                    Ihnen maximale Klarheit und Sicherheit für Ihre Investition
                    zu bieten – fundiert, objektiv und auf den Punkt gebracht.
                  </p>
                </div>

                <motion.div
                  className="w-full md:w-1/2 px-4 pt-4 flex flex-col justify-end items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={"image_card_1"}
                >
                  <img
                    src={solution_2}
                    alt="vernetzt"
                    className="w-full object-contain h-full rounded-xl"
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
              className="h-auto sticky top-[10%] color-blocks-wrap shadow-360 bg-[#F7F7F7] flex flex-col justify-between items-center rounded-2xl pt-6 md:pt-12 px-4 mb-2 md:min-h-[650px]"
            >
              <div className="relative text-center tracking-normal">
                <h2
                  id="first_block"
                  className="px-2 font-medium mb-4 text-black"
                >
                  Sie erhalten Ihren Report per{" "}
                  <span className="relative inline-block">
                    <h2 className="span-style">E-Mail</h2>
                  </span>
                </h2>
              </div>

              <div className="flex flex-col md:flex-row mt-6">
                <div className="w-full md:w-1/2 p-4 mb-10">
                  <h3 className="text-4xl font-medium px-2 text-black mb-10">
                    Sie bekommen Ihre Daten so unkompliziert wie möglich
                  </h3>
                  <p className="text-black mt-2">
                    Sobald die Analyse abgeschlossen ist, erhalten Sie den
                    Report bequem per E-Mail. Ohne zusätzlichen Aufwand, ohne
                    Login oder Plattform. Einfach, direkt und schnell – damit
                    Sie sofort mit den Ergebnissen arbeiten können. Ihre Daten
                    sind sicher, übersichtlich aufbereitet und jederzeit
                    griffbereit.
                    <br />
                    <br />
                    Zusätzlich stellen wir sicher, dass Sie alle relevanten
                    Informationen verständlich und visuell ansprechend
                    aufbereitet bekommen – inklusive klarer Empfehlungen. So
                    können Sie sofort fundierte Entscheidungen treffen und haben
                    jederzeit Zugriff auf Ihre Auswertung.
                  </p>
                </div>

                <motion.div
                  className="w-full md:w-1/2 px-4 pt-4 flex flex-col justify-end items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  key={"image_card_1"}
                >
                  <img
                    src={solution_3}
                    alt="direkt_aufs_smartphone"
                    className="w-full object-contain h-full rounded-2xl"
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
              className="shadow-360 bg-[#F7F7F7] flex flex-col justify-around items-center rounded-2xl pt-6 px-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full p-4">
                <div className="relative text-start tracking-normal">
                  <h3
                    id="first_block"
                    className="px-2 text-[28px] text-black font-medium mb-4"
                  >
                    In{" "}
                    <span className="relative inline-block text-[28px] text-black font-medium">
                      <h3 className="span-style">2 Klicks</h3>
                    </span>{" "}
                    zu Ihrem Auftrag - so simple!
                  </h3>
                </div>
                <p className="text-black mt-2">
                  Sie möchten Ihre Standortanalyse beauftragen? Kein Problem –
                  bei uns geht das schnell und unkompliziert. In nur zwei
                  einfachen Schritten können Sie Ihre Anfrage abschließen. Ohne
                  langes Suchen, ohne Papierkram. So sparen Sie Zeit und kommen
                  schneller zu den Informationen, die Sie wirklich brauchen.
                  <br />
                  <br />
                  Unsere benutzerfreundliche Oberfläche führt Sie intuitiv durch
                  den Prozess. Sie wählen Ihren Standort, geben Ihre
                  Kontaktdaten an – und den Rest übernehmen wir. Mit einem Klick
                  ist Ihr Auftrag bei uns. Sie können sich darauf verlassen,
                  dass wir uns sofort um Ihr Anliegen kümmern und Sie zeitnah
                  Rückmeldung erhalten.
                </p>
              </div>

              <div className="w-full px-4 pt-4 flex justify-center">
                <img
                  src={solution_1} // asdf - mobile image
                  alt="verkehrsanalyse_schnell"
                  className="w-full h-[300px] object-cover rounded-t-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Second Block */}
            <motion.div
              className="shadow-360 bg-[#F7F7F7] flex flex-col justify-around items-center rounded-2xl pt-6 px-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full p-4">
                <div className="relative text-start tracking-normal">
                  <h3
                    id="first_block"
                    className="px-2 text-[28px] text-black font-medium mb-4"
                  >
                    Damit Sie{" "}
                    <span className="relative inline-block text-[28px] text-black font-medium">
                      <h3 className="span-style">100% Klarheit</h3>
                    </span>{" "}
                    über den Standort haben
                  </h3>
                </div>
                <p className="text-black mt-2">
                  Unser Expertenteam prüft den Standort gründlich und
                  datenbasiert – von der regionalen Infrastruktur bis hin zur
                  Zielgruppenanalyse. Jeder relevante Aspekt wird
                  berücksichtigt, damit Sie eine fundierte Entscheidung treffen
                  können. Sie erhalten einen detaillierten Einblick in Chancen
                  und Risiken – verständlich, transparent und individuell auf
                  Ihr Projekt zugeschnitten.
                  <br />
                  <br />
                  Dabei greifen wir auf aktuelle Marktanalysen, demografische
                  Daten und wirtschaftliche Kennzahlen zurück, um eine präzise
                  Bewertung vorzunehmen. Zusätzlich fließen regionale
                  Besonderheiten, Wettbewerbssituation sowie zukünftige
                  Entwicklungspotenziale in unsere Analyse ein. So erhalten Sie
                  nicht nur eine Momentaufnahme, sondern eine strategische
                  Entscheidungsgrundlage für Ihr Vorhaben. Unser Ziel ist es,
                  Ihnen maximale Klarheit und Sicherheit für Ihre Investition zu
                  bieten – fundiert, objektiv und auf den Punkt gebracht.
                </p>
              </div>

              <div className="w-full px-4 pt-4 flex justify-center">
                <img
                  src={solution_2}
                  alt="vernetzt"
                  className="w-full h-[300px] object-cover rounded-t-2xl"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Third Block */}
            <motion.div
              className="shadow-360 bg-[#F7F7F7] flex flex-col justify-around items-center rounded-2xl pt-6 px-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full p-4">
                <div className="relative text-start tracking-normal">
                  <h3
                    id="first_block"
                    className="px-2 text-[28px] text-black font-medium mb-4"
                  >
                    Sie bekommen Ihre Daten so{" "}
                    <span className="relative inline-block text-[28px] text-black font-medium">
                      <h3 className="span-style">unkompliziert</h3>
                    </span>{" "}
                    wie möglich
                  </h3>
                </div>
                <p className="text-black mt-2">
                  Sobald die Analyse abgeschlossen ist, erhalten Sie den Report
                  bequem per E-Mail. Ohne zusätzlichen Aufwand, ohne Login oder
                  Plattform. Einfach, direkt und schnell – damit Sie sofort mit
                  den Ergebnissen arbeiten können. Ihre Daten sind sicher,
                  übersichtlich aufbereitet und jederzeit griffbereit.
                  <br />
                  <br />
                  Zusätzlich stellen wir sicher, dass Sie alle relevanten
                  Informationen verständlich und visuell ansprechend aufbereitet
                  bekommen – inklusive klarer Empfehlungen. So können Sie sofort
                  fundierte Entscheidungen treffen und haben jederzeit Zugriff
                  auf Ihre Auswertung.
                </p>
              </div>

              <div className="w-full px-4 pt-4 flex justify-center">
                <img
                  src={solution_3}
                  alt="direkt_aufs_smartphone"
                  className="w-full h-[300px] object-cover rounded-t-2xl"
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
