import React from "react";
import { motion } from "framer-motion";
import {
  ProcessCard,
  TwoLinesSVG,
  SuccessIcon,
  ConnectorSvg,
} from "../../components";
import { BiRepeat } from "react-icons/bi";

import "./process.screen.css";

import logo from "../../assets/logos/logo512.png";
import img_2 from "../../assets/images/image_2.jpg";

export const ProcessDiagramScreen = () => {
  return (
    <section className="px-3 py-20 h-auto md:px-6 md:py-35" id="process">
      <div className="text-center font-medium mb-10">
        <div className="relative inline-flex items-center gap-2">
          <h2>Unlock</h2>
          <span className="relative inline-block">
            <div className="absolute -top-6 right-0 w-full flex justify-end">
              <TwoLinesSVG />
            </div>
            <h2 className="relative">Your</h2>
          </span>
        </div>
        <h2>Location</h2>
      </div>

      <div className="process-parent relative flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side */}
        <div className="process-left flex justify-center">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2 justify-center">
              <ProcessCard title={"Company1"} logo={logo} />
              <ProcessCard title={"Company1"} logo={logo} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 justify-center"
            >
              <ProcessCard title="Company1" logo={logo} />
              <ProcessCard title="Company1" logo={logo} />
              <ProcessCard title="Company1" logo={logo} />
            </motion.div>
            <div className="flex flex-col gap-2 justify-center mt-10 lg:m-0">
              <ProcessCard title={"Company1"} logo={logo} />
              <ProcessCard title={"Company1"} logo={logo} />
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
          className="process-right flex justify-center relative pr-24"
        >
          <div className="buyer_card bg-white rounded-2xl p-1 w-[220px]">
            <div className="buyer_img max-w-[508px] w-[210px] aspect-3/2 h-[160px] overflow-hidden rounded-2xl">
              <img
                loading="lazy"
                src={img_2}
                alt="img_2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="buyer_content_wrap flex flex-col justify-between mx-1 mb-1 mt-2 md:px-3 md:pb-3 md:pt-6">
              <div className="text-[#7b8794] font-medium">Product_1</div>
              <div className="text-[#0d0d0c] text-2xl font-medium">
                € 500.00
              </div>
              <button className="text-white bg-[#1f2933] py-3 rounded-4xl mt-6">
                Pay
              </button>
            </div>
          </div>

          {/* Reposition the transaction card */}
          <div className="transaktion_card flex flex-col items-center w-[170px] absolute px-1 pb-1 pt-4 top-[-2em] right-0 bg-white rounded-2xl">
            <div className="transaction_content_img">
              <SuccessIcon />
            </div>
            <div className="transaction_content_wrap">
              <div className="text-wrap text-center font-medium">
                Successful something
              </div>
              <div className="transaction_message_wrap flex flex-col items-start p-2 mt-2 bg-[#e4e7eb80] rounded-xl">
                <div className="size-8 flex justify-center items-center bg-[#cbd2d9] rounded-4xl mb-2">
                  <BiRepeat />
                </div>
                <div className="text-xs">Transferred To Your Location!</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
