import Transition from "../transition";

const About = () => {
  return (
    <div className="h-screen w-screen dark:text-white flex justify-center items-center top-60">
      <h1 className="text-4xl uppercase">About</h1>
    </div>
  );
};

export default Transition(About);
