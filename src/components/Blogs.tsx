import React from "react";
import Wordbreak from "./Wordbreak";
import Comic1 from "@/assets/imgs/comic1.jpg";
import Comic2 from "@/assets/imgs/comic2.jpg";
import Comic3 from "@/assets/imgs/comic3.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Blogs: React.FC = () => {
  return (
    <div className="container bg-home py-20 space-y-7">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="space-y-3 border-b-[1px] pb-8 border-gray-500"
      >
        <div className=" text-3xl text-red-500 lineBefore uppercase">
          Blogs{" "}
        </div>
        <div className="text-7xl w-full font-extrabold leading-[1.10]">
          Our Top Trendy <Wordbreak /> Comic News.
        </div>
      </motion.div>
      <div className="space-y-7">
        <div className="flex flex-col lg:flex-row border-b border-gray-400 py-6 items-center justify-between">
          <div className="w-full lg:w-[44%] flex items-center justify-between gap-2 lg:gap-8">
            <div className="text-7xl text-primary mr-4">01</div>
            <div>
              <img
                className="w-full h-[20rem] lg:h-[30rem] grayscale hover:grayscale-0 rounded-md transition-all duration-300 ease-in-out"
                src={Comic1}
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] py-10">
            <div className="space-y-6">
              <div className="w-full flex items-center justify-start gap-8 lg:gap-4">
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <AiFillLike className="cursor-pointer text-2xl text-gray-500" />
                  140k
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <FaComment className="cursor-pointer text-2xl text-gray-500" />
                  890
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <IoIosShareAlt className="cursor-pointer text-2xl text-gray-500" />
                  3.5k
                </div>
              </div>
              <div className="text-gray-500 text-3xl lg:text-4xl tracking-[0.003]">
                The Evolution of Superhero <Wordbreak /> Costumes: From Golden
                Age <Wordbreak />
                To Modern Era.
              </div>
              <div className="w-fit border-2 rounded-full cursor-pointer group border-primary hover:bg-primary p-3">
                <MdOutlineArrowOutward className="group-hover:text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row border-b border-gray-400 py-6 items-center justify-between">
          <div className="w-full flex-row-reverse lg:w-[44%] flex items-center justify-between gap-2 lg:gap-8">
            <div className="text-7xl text-primary mr-4">02</div>
            <div>
              <img
                className="w-full h-[20rem] lg:h-[30rem] grayscale hover:grayscale-0 rounded-md transition-all duration-300 ease-in-out"
                src={Comic2}
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] py-10">
            <div className="space-y-6">
              <div className="w-full flex items-center justify-start gap-8 lg:gap-4">
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <AiFillLike className="cursor-pointer text-2xl text-gray-500" />
                  140k
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <FaComment className="cursor-pointer text-2xl text-gray-500" />
                  890
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <IoIosShareAlt className="cursor-pointer text-2xl text-gray-500" />
                  3.5k
                </div>
              </div>
              <div className="text-gray-500 text-3xl lg:text-4xl tracking-[0.003]">
                The Evolution of Superhero <Wordbreak /> Costumes: From Golden
                Age <Wordbreak />
                To Modern Era.
              </div>
              <div className="w-fit border-2 rounded-full cursor-pointer group border-primary hover:bg-primary p-3">
                <MdOutlineArrowOutward className="group-hover:text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row border-b border-gray-400 py-6 items-center justify-between">
          <div className="w-full lg:w-[44%] flex items-center justify-between gap-2 lg:gap-8">
            <div className="text-7xl text-primary mr-4">03</div>
            <div>
              <img
                className="w-full h-[20rem] lg:h-[30rem] grayscale hover:grayscale-0 rounded-md transition-all duration-300 ease-in-out"
                src={Comic3}
              />
            </div>
          </div>
          <div className="w-full lg:w-[50%] py-10">
            <div className="space-y-6">
              <div className="w-full flex items-center justify-start gap-8 lg:gap-4">
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <AiFillLike className="cursor-pointer text-2xl text-gray-500" />
                  140k
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <FaComment className="cursor-pointer text-2xl text-gray-500" />
                  890
                </div>
                <div className="flex items-center gap-2 hover:text-primary cursor-pointer">
                  <IoIosShareAlt className="cursor-pointer text-2xl text-gray-500" />
                  3.5k
                </div>
              </div>
              <div className="text-gray-500 text-3xl lg:text-4xl tracking-[0.003]">
                The Evolution of Superhero <Wordbreak /> Costumes: From Golden
                Age <Wordbreak />
                To Modern Era.
              </div>
              <div className="w-fit border-2 rounded-full cursor-pointer group border-primary hover:bg-primary p-3">
                <MdOutlineArrowOutward className="group-hover:text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-primary w-fit mx-auto text-white hover:bg-white hover:text-primary px-6 py-4 rounded-full font-medium cursor-pointer transition-all duration-300 ease-in-out">
        Browse More
      </div> */}
    </div>
  );
};

export default Blogs;
