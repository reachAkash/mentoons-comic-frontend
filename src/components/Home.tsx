import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
// import comic1 from '@/assets/imgs/banner1.png'
import comic2 from "@/assets/imgs/banner2.png";
import Wordbreak from "./Wordbreak";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import comic3 from "@/assets/imgs/comic3.png";
import User1 from "@/assets/imgs/user1.png";
import User2 from "@/assets/imgs/user2.png";
import User3 from "@/assets/imgs/user3.png";
import { TiTick } from "react-icons/ti";
import CompanySlider from "./CompanySlider";

const Home: React.FC = () => {
  return (
    <div className="bg-[#f0ebe5] ">
      <HeroSection />;
      <Section2 />
      <Section3 />
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="container flex-1 flex items-center justify-between pb-10">
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

const Section2: React.FC = () => {
  const data: string[] = [
    " We Offer Unique Comic Books & Arts",
    "Get Collection Of Creative Series",
    "Watch Cartoon And Kid Animation",
  ];

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <div className="relative w-[50%]">
          <img className="rounded-full w-[80%]" src={comic3} />
          <div className="absolute top-0 left-0 bg-white rounded-full h-[10rem] w-[10rem]">
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-full text-gray-500 font-medium tracking-wider text-center">
              <span className="text-primary text-4xl font-extrabold">3M </span>{" "}
              <Wordbreak /> Users
            </div>
          </div>
          <div className="absolute bottom-0 left-0 bg-primary text-white rounded-full h-[13rem] w-[13rem]">
            <div className="w-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  rounded-full font-medium tracking-wider text-center px-4">
              <span className=" text-5xl font-extrabold">25+ </span>{" "}
              <Wordbreak /> Years of comic journey
            </div>
          </div>
        </div>
        <div className="space-y-5 w-[50%]">
          <div className="text-primary text-3xl lineBefore">About Us</div>
          <h2 className="text-7xl w-full font-semibold leading-[1.10]">
            Digital Books <Wordbreak /> Arts <Wordbreak /> Company.
          </h2>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet, consectetur <Wordbreak /> adipisicing
            elit. Dolore molestiae eius <Wordbreak /> accusamus fuga a tenetur.
          </p>
          <div className="space-y-2">
            {data?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <TiTick className="text-primary text-2xl" />
                  {item}
                </div>
              );
            })}
          </div>
          <div className="w-fit flex items-center justify-between gap-4">
            <div>
              <FaRegCirclePlay className="text-primary text-6xl" />
            </div>
            <button className="text-primary text-3xl">Watch Story</button>
          </div>
        </div>
      </div>
      <CompanySlider />
    </div>
  );
};

const Section3: React.FC = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container">
        <div>
          <div className="text-primary text-3xl lineBefore">New Comics</div>
          <div className="text-7xl w-full font-semibold leading-[1.10]">
            Enjoy Newest Comic Books.
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
