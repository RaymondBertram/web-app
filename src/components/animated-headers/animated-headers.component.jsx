import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const AnimatedHeaders = ({ headers }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headers.length);
    }, 3000); // Wechselt alle 3 Sekunden

    return () => clearInterval(interval);
  }, [headers.length]);

  return (
    <div className="h-10 md:h-16 overflow-hidden">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="absolute text-4xl lg:text-[70px] text-[#2d1f6b]"
      >
        {headers[index]}
      </motion.h1>
    </div>
  );
};
