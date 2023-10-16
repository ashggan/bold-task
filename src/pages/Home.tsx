import officeImage from "../assets/images/office.webp";
import zurchuImage from "../assets/images/zurich.webp";
import SvgImage from "../assets/arrow.svg";
// import ImageCard from "../components/imageCard";
import { motion } from "framer-motion";
import Transition from "../transition";
import SpanSection from "../components/SpanSection";

const Home = () => {
  return (
    <>
      {/* // hero section */}
      <section className=" pl-[115px]  pt-[40px] mt-10 mx-auto h-[80vh] dark:text-white hero">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 h-full justify-around  ">
          <div className="col-span-6 ">
            <h1 className="text-[5vw] ">
              <SpanSection>We create brand</SpanSection>
              <SpanSection>identities and</SpanSection>
              <SpanSection>craft digital</SpanSection>
              <SpanSection>experiences</SpanSection>
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

      {/* selected work  
      <section className="my-20  h-[50vh] dark:text-white work">
        <div className="title">
          <p className=" text-center">selected work</p>
        </div>
        <div className="card grid grid-col-1 md:grid-cols-2 gap-5 justify-center my-48">
          <ImageCard />
        </div>
      </section>*/}
    </>
  );
};
export default Transition(Home);
