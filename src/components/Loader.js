import { motion } from "framer-motion";
import React from "react";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

export default function Loader() {
  return (
    <div>
      <motion.div
        variants={loaderVariants}
        animate="animationOne"
        className="loader"
      ></motion.div>
    </div>
  );
}
