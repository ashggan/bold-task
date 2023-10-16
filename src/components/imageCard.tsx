// import { motion } from "framer-motion";
import { motion } from "framer-motion";
import zurchuImage from "../assets/images/zurich.webp";

export default function ImageCard() {
  return (
    <>
      <div className="relative bg-pink-200">
        <motion.img src={zurchuImage} className="w-full" />
        <motion.div
          className="overlay"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0, transition: { duration: 1 } }}
          // exit={{ y: "-100%" }}
        ></motion.div>

        {/* <motion.div
          className="overlay"
          initial={{ y: "100%" }}
          animate={{ y: 0, transition: { duration: 2 } }}
          exit={{ y: "100%" }}
        ></motion.div> */}
        {/* <div className="overlay"></div> */}
      </div>
      <div className="flex ml-24 h-full flex-col justify-between">
        <div className="text">
          <h2 className="text-5xl capitalize">test</h2>
          <p className="desc w-[40%] mt-6">
            A foundation for your design system, from design to code.
          </p>
        </div>
        <div className="read-more text-right self-end">
          <a href="#">Read more</a>
        </div>
      </div>
    </>
  );
}
