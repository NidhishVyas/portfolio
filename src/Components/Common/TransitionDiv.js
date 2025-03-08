import React from "react";
import { motion } from "framer-motion";

const TransitionDiv = ({ children, text }) => {
  return (
    <motion.div
      initial={text ? "textHidden" : "hidden"}
      whileInView={text ? "textVisible" : "visible"}
      animate={text ? "textVisible" : "visible"}
      viewport={{ amount: 0.1, once: false }}
      variants={{
        textHidden: { y: "100%" },
        textVisible: {
          y: 0,
          transition: { duration: 0.3 },
        },
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
