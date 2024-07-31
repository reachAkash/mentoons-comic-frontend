import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
// import comic1 from '@/assets/imgs/banner1.png'
import comic2 from "@/assets/imgs/banner2.png";
import Wordbreak from "./Wordbreak";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import User1 from "@/assets/imgs/user1.png";
import User2 from "@/assets/imgs/user2.png";
import User3 from "@/assets/imgs/user3.png";
import AboutSection from "./AboutSection";
import NewComics from "./NewComics";
import PopularComics from "./Popular";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

const Home: React.FC = () => {
  return (
    <div className="bg-[#f0ebe5]">
      <HeroSection />
      <AboutSection />
      <NewComics />
      <PopularComics />
      <Team />
      <Testimonials />
      <Pricing />
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div
      id="home"
      className="container flex-1 flex items-center justify-between pb-10"
    >
      <div className="space-y-6">
        <h1 className="text-primary text-3xl">The Ultimate</h1>
        <div className="font-bold text-8xl tracking-wide leading-[1.10]">
          Mentoons <Wordbreak /> Comics.
        </div>
        <div className="w-fit flex items-center justify-between gap-4">
          <button className="bg-primary text-white rounded-full px-4 py-2 text-xl">
            Read Now
          </button>
          <div>
            <FaRegCirclePlay className="text-primary text-5xl" />
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
      <div className="w-full flex-1 relative flex items-center justify-end">
        {/* <img className='h-[74vh] w-[65%] absolute top-0 right-0' src={comic1} alt='comic image' /> */}
        <img
          className="hidden md:block h-[80vh] w-[75%] relative top-6"
          src={comic2}
          alt="comic image 2"
        />
      </div>
    </div>
  );
};

export default Home;
