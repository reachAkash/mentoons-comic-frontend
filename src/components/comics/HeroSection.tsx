import { FaRegCirclePlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import User1 from "@/assets/imgs/user1.png";
import User2 from "@/assets/imgs/user2.png";
import User3 from "@/assets/imgs/user3.png";
import { ComicSlider } from "./Sliders";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
      className="container relative bg-rose-500 flex flex-col lg:flex-row text-center lg:text-start items-center justify-between py-10 lg:pb-14 space-y-5"
    >
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className=" w-full lg:w-[50%] space-y-6"
      >
        <h1 className="text-men-blue font-bold text-4xl lg:text-5xl ">
          Mentoons Comics
        </h1>
        <div className=" text-white text-2xl md:text-6xl font-semibold tracking-wider leading-tight">
          Welcome to a world of meaningful stories and valuable life lessons.
        </div>
        <div className="mx-auto lg:mx-0 w-fit flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("/mentoons-comics/comics-list")}
            className="bg-red-500 hover:bg-white hover:text-red-500 border-white  border-2 text-white rounded-full px-4 py-2 text-xl transition-all ease-in-out duration-300"
          >
            Browse Our Collection
          </button>
          <div onClick={() => navigate("/mentoons-comics/comics-list")}>
            <FaRegCirclePlay className="text-white text-5xl cursor-pointer" />
          </div>
        </div>
        <div className="flex text-center w-full lg:w-fit items-center justify-center lg:justify-start gap-0">
          <div className="flex items-center justify-between w-fit">
            <img
              className="rounded-full w-14 border-4 border-white"
              src={User1}
              alt="user 1"
            />
            <img
              className="relative right-4 rounded-full w-14 border-4 border-white"
              src={User2}
              alt="user 2"
            />
            <img
              className="relative right-8 rounded-full w-14 border-4 border-white"
              src={User3}
              alt="user 3"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between w-fit gap-2 text-xl">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaRegStarHalfStroke className="text-yellow-500" />
            </div>
            <div className="text-gray-300">(5k Reviews)</div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full lg:w-[50%] relative flex items-center justify-center"
      >
        <ComicSlider />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
