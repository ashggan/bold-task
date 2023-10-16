import officeImage from "../assets/images/office.webp";
import zurchuImage from "../assets/images/zurich.webp";
import SvgImage from "../assets/arrow.svg";
import ImageCard from "../components/imageCard";
import { motion, useInView } from "framer-motion";
import Transition from "../transition";
import { useRef } from "react";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Home = () => {
  return (
    <>
      {/* // hero section */}
      <section className=" pl-[115px]  pt-[40px] mt-10 mx-auto h-[80vh] dark:text-white hero">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 h-full justify-around  ">
          <div className="col-span-6 ">
            <h1 className="text-[5vw] ">
              <Section>We create brand</Section>
              <Section>identities and</Section>
              <Section>craft digital</Section>
              <Section>experiences</Section>
              {/* <motion.span
                variants={variants}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                We create brand
              </motion.span>
              <br />
              <motion.span
                variants={variants}
                transition={{ delay: 1, duration: 0.5 }}
              >
                identities and
              </motion.span>
              <br />
              <motion.span
                variants={variants}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                craft digital
              </motion.span>
              <br /> <motion.span variants={variants}>experiences.</motion.span> */}
            </h1>
          </div>
          <div className="images col-span-6  flex flex-col relative">
            <img src={officeImage} alt="office" className="h-[80%] w-[75%]" />
            <img
              src={zurchuImage}
              alt=""
              className="h-[50%] w-[80%] absolute top-[300px] right-0 "
            />
          </div>
        </div>
      </section>
      {/* // list section */}
      <section className=" px-[115px]    h-[50vh] dark:text-white  list">
        <div className="intro-list">
          <ul>
            <li>
              <img src={SvgImage} alt="SVG Image" />
              <span aria-label="Brand Identity">Brand Identity</span>
            </li>
            <li>
              <img src={SvgImage} alt="SVG Image" />

              <span aria-label="Websites">Websites</span>
            </li>
            <li>
              <img src={SvgImage} alt="SVG Image" />
              <span aria-label="Products">Products</span>
            </li>
          </ul>
        </div>
        <div className="description grid gap-y-5 grid-cols-1 md:grid-cols-12 justify-around">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-6 "
            viewport={{ once: true }}
          >
            <section>
              Riangle is a digital-first design studio based in Zürich,
              Switzerland. We create award-winning brand identities, websites,
              and products. With more than 10 years of experience in design and
              web development, we close the gap between design and technology by
              delivering exceptional results.
            </section>
          </motion.div>
          <div className="col-span-6 scrolling-circles mx-20 relative">
            <div className="h-full bg-black stick absolute top-0 left-0"></div>
          </div>
        </div>
      </section>

      {/* selected work  */}
      <section className="my-20  h-[50vh] dark:text-white work">
        <div className="title">
          <p className=" text-center">selected work</p>
        </div>
        <div className="card grid grid-col-1 md:grid-cols-2 gap-5 justify-center my-48">
          <ImageCard />
        </div>
      </section>
    </>
  );
};
export default Transition(Home);
