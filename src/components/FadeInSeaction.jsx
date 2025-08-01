// FadeInSection.jsx
import { motion } from "framer-motion";
import React from "react";
const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;