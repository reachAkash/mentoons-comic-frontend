import React from "react";
import Wordbreak from "./Wordbreak";
import Team1 from "@/assets/imgs/team1.png";
import Team2 from "@/assets/imgs/team2.png";
import Team3 from "@/assets/imgs/team3.png";
import Team4 from "@/assets/imgs/team4.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  return (
    <div className="container flex flex-col bg-primary text-white py-10 space-y-7">
      <div className="border-b-[1px] border-slate-300    py-12 space-y-7">
        <div className="text-start space-y-4">
          <div className=" text-3xl whitelineBefore">New Comics</div>
          <div className="text-7xl w-full font-extrabold leading-[1.10]">
            Enjoy Newest <Wordbreak /> Comic Books.
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team1}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Akash</div>
              <div className="text-base">Web Developer</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 ">
                <FaFacebookSquare className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team2}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Akash</div>
              <div className="text-base">Web Developer</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 ">
                <FaFacebookSquare className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team3}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Akash</div>
              <div className="text-base">Web Developer</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 ">
                <FaFacebookSquare className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-1 group">
            <div className="overflow-hidden relative rounded-full">
              <img
                className="rounded-full group-hover:scale-110 transition-all duration-300 ease-in-out"
                src={Team4}
                alt=""
              />
            </div>
            <div>
              <div className="font-semibold text-2xl">Akash</div>
              <div className="text-base">Web Developer</div>
              <div className="invisible group-hover:visible flex items-center justify-center gap-4 ">
                <FaFacebookSquare className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaLinkedin className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
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
