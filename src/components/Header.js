import { motion } from "framer-motion";
import React from "react";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* <motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg> */}

        <motion.svg
          width="80"
          viewBox="0 0 366 385"
          strokeWidth={10}
          stroke="#fff"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M111.888 240.769L113.444 144.658L197.882 193.686L111.888 240.769Z"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M187.166 188.391L65.2489 109.876C63.9179 109.019 62.166 109.975 62.166 111.558V193.891L61.166 275.391"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M106.166 298.891C90.6661 307.039 61.166 297.391 61.166 274.891"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M69.666 54.3909C79.0318 30.3506 114.666 20.8909 134.666 33.8909"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M251.666 167.391C269.666 178.891 271.166 210.891 246.666 223.891"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M11.1666 100.391C11.1664 56.3907 63.6665 47.3908 85.6658 61.3907"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M118.666 348.391C62.729 378.337 10.1861 322.74 10.6663 287.891"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M287.666 131.391C345.666 168.391 321.166 240.391 291.166 256.391"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M105.166 299.391L246.666 223.891"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M251.666 167.391L85.666 61.3909"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M11.166 100.391L10.666 288.391"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M118.667 348.391L291.167 256.391"
            stroke="white"
            stroke-width="16"
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M287.666 131.391L134.518 33.7655"
            stroke="white"
            stroke-width="16"
          />
        </motion.svg>
      </div>
      <motion.div
        className="title"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
      >
        <h1>Paaji's Burger</h1>
      </motion.div>
    </header>
  );
};

export default Header;
