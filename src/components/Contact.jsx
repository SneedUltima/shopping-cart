import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        easeIn: [0, 0.71, 0.2, 1.01],
        easeOut: [0, 0.71, 0.2, 1.01],
      }}
    ></motion.div>
  );
};

export default Contact;
