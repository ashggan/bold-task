import { motion } from "framer-motion";
import { ItemProb } from "../utils/types";
import SpanSection from "./SpanSection";

const Card = ({ item }: ItemProb) => {
  return (
    <div className="w-full dark:text-white flex   flex-col gap-y-7  my-12">
      <div className="w-full h-full rounded-sm image-wrapper relative  flex flex-col">
        <div className="">
          <motion.div className="w-full zoomImage  rounded-sm transform translate-y-10 translate-x-10  h-[40vh]">
            <img src={item.image} alt="" className="" />
          </motion.div>

          <div className="main-title my-24 mx-8">
            <h2 className="text-[42px] hover:text-mainColor cursor-pointer">
              <SpanSection>{item.title}</SpanSection>
            </h2>
            <div className="content flex justify-between mt-10 ">
              <div className="text-gray-300">02-3-2-22</div>
              <div className="relative flex  w-40 justify-between cursor-pointer">
                <div className="arrow right-8 ">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p className=" mt-2 hover:text-mainColor uppercase">
                  <SpanSection> read more</SpanSection>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
