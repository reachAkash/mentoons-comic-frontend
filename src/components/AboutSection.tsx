import React from "react";
import AboutComic from "@/assets/imgs/aboutComic.png";
import { TiTick } from "react-icons/ti";
import CompanySlider from "./CompanySlider";
import Wordbreak from "./Wordbreak";
import { FaRegCirclePlay } from "react-icons/fa6";

const AboutSection: React.FC = () => {
  const data: string[] = [
    " We Offer Unique Comic Books & Arts",
    "Get Collection Of Creative Series",
    "Watch Cartoon And Kid Animation",
  ];

  return (
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <div className="relative w-[50%]">
          <img className="rounded-full w-[80%]" src={AboutComic} />
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

export default AboutSection;
