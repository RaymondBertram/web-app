import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1.1,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

export const Card = ({ title, text, img, index }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={cardVariants}
      custom={index} // Übermittelt den Index für Verzögerung
    >
      <motion.img
        src={img}
        alt={title}
        className="mb-4 object-cover"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h3 className="text-lg font-bold text-gray-700">{title}</h3>
      <p className="text-gray-500 text-sm text-center">{text}</p>
    </motion.div>
  );
};
