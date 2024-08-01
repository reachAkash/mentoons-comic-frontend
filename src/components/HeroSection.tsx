import { FaRegCirclePlay } from "react-icons/fa6";
// import comic1 from '@/assets/imgs/banner1.png'
import comic2 from "@/assets/imgs/banner2.png";
import Wordbreak from "./Wordbreak";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import User1 from "@/assets/imgs/user1.png";
import User2 from "@/assets/imgs/user2.png";
import User3 from "@/assets/imgs/user3.png";
import { ComicSlider } from "./Sliders";

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="container flex items-center justify-between pb-14"
    >
      <div className="w-[50%] space-y-6">
        <h1 className="text-red-500 text-3xl">The Ultimate</h1>
        <div className="font-bold text-8xl tracking-wide leading-[1.10]">
          Mentoons <Wordbreak /> Comics.
        </div>
        <div className="w-fit flex items-center justify-between gap-4">
          <button className="bg-red-500 text-white rounded-full px-4 py-2 text-xl">
            Read Now
          </button>
          <div>
            <FaRegCirclePlay className="text-red-500 text-5xl" />
          </div>
        </div>
        <div className="flex items-center justify-start gap-0">
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
            <div className="text-gray-500">(405k Reviews)</div>
          </div>
        </div>
      </div>
      <div className="w-[50%] relative flex items-center justify-center">
        {/* <img className='h-[74vh] w-[65%] absolute top-0 right-0' src={comic1} alt='comic image' /> */}
        <ComicSlider />
      </div>
    </div>
  );
};

export default HeroSection;
