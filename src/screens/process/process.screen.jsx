/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { FaPeoplePulling } from "react-icons/fa6";
import { MdTouchApp } from "react-icons/md";
import { IoCarSport, IoTimeSharp } from "react-icons/io5";
import { GiLightningFrequency, GiProgression } from "react-icons/gi";
import { SiNextra } from "react-icons/si";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { useGlowContext } from "../../context/glow/glowContext";
import { ProcessCard, TwoLinesSVG, ConnectorSvg } from "../../components";

import dein_report from "../../assets/images/your_report_diagram.jpg";
import "./process.screen.css";

export const ProcessDiagramScreen = () => {
  const { setGlow } = useGlowContext();
  return (
    <section className="px-3 h-auto md:px-6 py-20 md:py-25" id="prozess">
      <div className="text-center font-medium mb-10">
        <div className="relative inline-flex items-center gap-2 text-black font-medium">
          <h2 className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute -top-6 right-0 w-full flex justify-end"
            >
              <TwoLinesSVG color="#b6dd3e" />
            </motion.div>

            <span className="relative header-2">
              Unsere Daten - <br />
            </span>
          </h2>
        </div>
        <h2 className="text-black font-medium">Ihr Standortmatch!</h2>
      </div>

      <div className="process-parent relative flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="process-left flex justify-center">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2 justify-center">
              <ProcessCard
                title={"Passanten"}
                logo={<FaPeoplePulling height={30} width={30} />}
              />
              <ProcessCard
                title={"Fahrzeuge"}
                logo={<IoCarSport height={30} width={30} />}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 justify-center"
            >
              <ProcessCard
                title="Frequenzen"
                logo={<GiLightningFrequency height={30} width={30} />}
              />

              <ProcessCard
                title="Extrema"
                logo={<SiNextra height={30} width={30} />}
              />

              <ProcessCard
                title="Verlauf"
                logo={<GiProgression height={30} width={30} />}
              />
            </motion.div>
            <div className="flex flex-col gap-2 justify-center">
              <ProcessCard
                title={"Anzahl"}
                logo={<TbSortAscendingNumbers height={30} width={30} />}
              />

              <ProcessCard
                title={"Zeiten"}
                logo={<IoTimeSharp height={30} width={30} />}
              />
            </div>
          </div>
        </div>

        {/* Middle SVG - Fixed Size */}
        <div className="process-middle flex items-center justify-center h-[400px] md:h[200px] lg:w-[500px] overflow-hidden">
          <ConnectorSvg />
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          // Add right padding to account for the absolute element’s width
          className="process-right grid place-items-center relative pr-24"
        >
          <div className="buyer_card bg-white rounded-2xl p-1 w-[220px]">
            <div className="buyer_img max-w-[508px] w-[210px] aspect-3/2 h-[160px] overflow-hidden rounded-2xl">
              <img
                loading="lazy"
                src={dein_report}
                alt="dein_report"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="buyer_content_wrap flex flex-col justify-between mx-1 mb-1 mt-2 md:px-3 md:pb-3 md:pt-6">
              <div className="text-[#7b8794] font-medium">Stadtring 1</div>
              <div className="text-[#0d0d0c] text-2xl font-medium">
                Ihr Report
              </div>
              <a
                href="#location"
                className="text-white text-center bg-[#112233] py-3 rounded-4xl mt-6"
                onClick={() => setGlow(true)}
              >
                Jetzt anfordern!
              </a>
            </div>
          </div>

          {/* Reposition the transaction card */}
          <div className="transaktion_card flex flex-col items-center w-[170px] absolute px-1 pb-1 pt-4 top-[-2em] right-0 bg-white rounded-2xl">
            <div className="transaction_content_img size-20 p-4">
              <MdTouchApp className="w-full h-full" />
            </div>
            <div className="transaction_content_wrap">
              <div className="text-wrap text-center font-medium">
                2 Klicks entfernt!
              </div>
              <div className="transaction_message_wrap flex flex-col items-start p-2 mt-2 bg-[#e4e7eb80] rounded-xl">
                <div className="size-8 flex justify-center items-center bg-[#cbd2d9] rounded-4xl mb-2">
                  <MdOutlineEmail height={20} width={20} />
                </div>
                <div className="text-xs">
                  Erhalten Sie direkt in Ihr Mail Postfach
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
