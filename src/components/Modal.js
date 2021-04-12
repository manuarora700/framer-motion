import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export default function Modal({ showModal, setShowModal }) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {showModal && (
          <motion.div
            className="backdrop"
            variants={backdropVariants}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            <motion.div
              className="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
            >
              <p>Want to make another pizza?</p>
              <Link to="/">
                <button>Create Pizza</button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
