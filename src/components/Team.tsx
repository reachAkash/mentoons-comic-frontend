import React from "react";
import Wordbreak from "./Wordbreak";
import Team1 from "@/assets/imgs/dhanasekar Illustration.jpg";
import Team2 from "@/assets/imgs/Dhinesh Illustration.jpg";
import Team3 from "@/assets/imgs/sankar Illustration.jpg";
import Team4 from "@/assets/imgs/ajay Illustration.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Team: React.FC = () => {
  return (
    <div
      id="team"
      className="container flex flex-col bg-primary text-white py-10 space-y-7"
    >
      <div className="border-b-[1px] border-slate-300 py-12 space-y-7">
        <div className="text-start space-y-4">
          <div className=" text-3xl lineBefore uppercase text-[#d71515]">
            Our Team{" "}
          </div>
          <div className="text-7xl w-full font-extrabold leading-[1.10]">
            Meet With Our <Wordbreak /> Comic Artist.
          </div>
        </div>
        <div className="flex items-center justify-between gap-20">
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team1}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Dhanashekar</div>
              <div className="text-base">Sketch Artist</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
                <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
                <FaTwitter className="cursor-pointer text-[#d71515]" />
                <FaLinkedin className="cursor-pointer text-[#d71515]" />
                <FaYoutube className="cursor-pointer text-[#d71515]" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team2}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Dhinesh</div>
              <div className="text-base">Graphics Designer</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
                <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
                <FaTwitter className="cursor-pointer text-[#d71515]" />
                <FaLinkedin className="cursor-pointer text-[#d71515]" />
                <FaYoutube className="cursor-pointer text-[#d71515]" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team3}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Sankar</div>
              <div className="text-base">Illustrator</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
                <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
                <FaTwitter className="cursor-pointer text-[#d71515]" />
                <FaLinkedin className="cursor-pointer text-[#d71515]" />
                <FaYoutube className="cursor-pointer text-[#d71515]" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team4}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Ajay</div>
              <div className="text-base">Animator / Video Editor</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
                <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
                <FaTwitter className="cursor-pointer text-[#d71515]" />
                <FaLinkedin className="cursor-pointer text-[#d71515]" />
                <FaYoutube className="cursor-pointer text-[#d71515]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[4rem] items-center">
        <div className="w-[40%] flex items-center justify-between">
          <div className="space-y-2">
            <div className="text-8xl font-semibold">97%</div>
            <div>Satisfaction Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-8xl font-semibold">12M</div>
            <div>Users Registration</div>
          </div>
        </div>
        <div className="w-[60%] font-medium text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus{" "}
          <Wordbreak />
          voluptatum, iusto assumenda. Rerum neque saepe commodi, iusto esse{" "}
          <Wordbreak />
          eius, ratione explicabo vitae, sunt aperiam a.
        </div>
      </div>
    </div>
  );
};

export default Team;
