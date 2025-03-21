import { motion } from "framer-motion";

export const SuccessIcon = () => {
  return (
    <motion.svg
      className="icon-success"
      width="100%"
      height="98"
      viewBox="0 0 97 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="48.5"
        cy="49"
        r="45"
        stroke="#CBD2D9"
        strokeWidth="5"
        fill="none"
        initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="48.5"
        cy="49"
        r="45"
        stroke="#F5F7FA"
        strokeWidth="5"
        fill="none"
        initial={{ strokeDasharray: 283, strokeDashoffset: 283 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.2,
          ease: "linear",
        }}
      />
      <motion.path
        className="check-mark"
        d="M70.219 37L44.063 63.156L42.0005 65.3123L27.8445 51.1563L25.6882 49.0001L30.0007 44.7813L32.0632 46.9376L42.0007 56.7813L63.8447 34.9373L66.0009 32.781L70.219 37Z"
        fill="#8247FF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </motion.svg>
  );
};
