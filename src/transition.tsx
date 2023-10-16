import { motion } from "framer-motion";
import { ComponentType } from "react";
// import whiteLogo from "./assets/whiteLogo.svg";

const mainVariants1 = {
  initial: {
    width: 0,
    scaleY: 1,
  },
  animate: {
    width: 10000,
    scaleY: 0,
    transition: {
      width: { duration: 0.5, delay: 0.5, when: "beforeChildren" },
      scaleY: { duration: 0.5 },
    },
  },
};

const mainVariants2 = {
  initial: {
    width: 0,
    scaleY: 1,
  },
  animate: {
    width: 10000,
    scaleY: 0,
    transition: {
      width: { duration: 0.5, delay: 0.5, when: "beforeChildren" },
      scaleY: { duration: 0.5 },
    },
  },
};

const Transition = (Component: ComponentType) => {
  return () => (
    <>
      <Component />

      <motion.div
        className="fixed top-0 bg-mainColor right-0 h-screen w-screen z-50 flex justify-center items-center flex-col gap-y-5 transform origin-top transition-container-2"
        variants={mainVariants2}
        initial="initial"
        animate="animate"
      ></motion.div>
    </>
  );
};

export default Transition;
