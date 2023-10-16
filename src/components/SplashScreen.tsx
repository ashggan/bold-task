import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter < 100) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 40);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div className="wrapper ">
      <motion.div
        className="top-0 bg-[#F43333] right-0 h-[100vh] w-[100vw] index-1 absolute flex justify-center items-center "
        animate={{ y: [0, -200], scaleY: [1, 0.003] }}
        transition={{ duration: 0.4, ease: "linear" }}
      ></motion.div>
      <div className="counter text-mainColor text-center text-5xl top-[50%] left-50">
        {counter}%
      </div>
    </div>
  );
}
