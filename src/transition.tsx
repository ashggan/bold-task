import { motion } from "framer-motion";
import { ComponentType } from "react";
import whiteLogo from "./assets/whiteLogo.svg";

const mainVariants = {
  initial: {
    width: 0,
    scaleY: 1,
  },
  animate: {
    width: 10000,
    scaleY: 0,
    transition: {
      width: { duration: 0.5, when: "beforeChildren" },
      scaleY: { duration: 0.5, delay: 0.5 },
    },
  },
};

const Transition = (Component: ComponentType) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed top-0 bg-mainColor right-0 h-screen w-screen z-50 flex justify-center items-center flex-col gap-y-5 transform origin-top"
        variants={mainVariants}
        initial="initial"
        animate="animate"
      >
        <img src={whiteLogo} alt="" />
      </motion.div>
    </>
  );
};

export default Transition;
