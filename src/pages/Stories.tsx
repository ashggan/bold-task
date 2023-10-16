import Transition from "../transition";
import monkeyImg from "../assets/images/monkey.webp";
import storiesItems from "../assets/stories.json";
import Card from "../components/Card";
import SpanSection from "../components/SpanSection";

const Stories = () => {
  return (
    <>
      <div className="h-[60px] w-full"></div>
      <div className="w-screen dark:text-white flex px-[115px]  flex-col gap-y-7">
        <h1 className="text-[5vw] capitalize ">
          <SpanSection>stories</SpanSection>{" "}
        </h1>
        <p className="subtitle">
          <SpanSection>from Riangle Team</SpanSection>
        </p>
      </div>

      <div className="w-full dark:text-white flex px-[115px]  flex-col gap-y-7  my-12">
        <div className="w-full h-full rounded-sm image-wrapper relative  flex flex-col">
          <div className="">
            <div className="">
              <div className="m-w-full zoomImage rounded-sm transform translate-y-10 translate-x-10 h-[70vh] ">
                <img src={monkeyImg} className="" />
              </div>
            </div>

            <div className="main-title my-24 mx-8">
              <h2 className="text-[42px] hover:text-mainColor cursor-pointer">
                <SpanSection>
                  How to open a crypto wallet and buy your first NFT
                </SpanSection>
              </h2>
              <div className="content flex justify-between mt-10 ">
                <div className="text-gray-300">
                  <SpanSection>02-3-2-22</SpanSection>
                </div>
                <div className="relative flex  w-40 justify-between cursor-pointer">
                  <div className="arrow right-8 ">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className=" mt-2 hover:text-mainColor uppercase">
                    <SpanSection>read more</SpanSection>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full dark:text-white grid px-[115px]  grid-col-1 gap-x-5  md:grid-cols-2">
        {storiesItems &&
          storiesItems.map((item) => <Card key={item.title} item={item} />)}
      </div>

      <div className="w-full dark:text-white  flex justify-center items-center my-48">
        <div className="text-5xl capitalize basix hover:text-mainColor cursor-pointer">
          <SpanSection>Load more</SpanSection>
        </div>
      </div>
    </>
  );
};

export default Transition(Stories);
