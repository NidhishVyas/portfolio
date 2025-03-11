import React from "react";
import { motion } from "framer-motion";

const TransitionDiv = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionDiv;
