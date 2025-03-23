import { motion } from "framer-motion";

export const UnderlineSVG = ({ duration }) => {
  return (
    <svg
      className="absolute left-0 bottom-[-10px] w-full h-[16px]"
      viewBox="0 0 100 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M5 4C20 6 40 7 60 5C80 3 95 2 100 2"
        stroke="#8247FF"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-50px" }}
      />

      <motion.path
        d="M0 14C15 12 35 13 55 12C75 10 90 9 100 9"
        stroke="#8247FF"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: duration || 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        viewport={{ once: true, margin: "-50px" }}
      />
    </svg>
  );
};
