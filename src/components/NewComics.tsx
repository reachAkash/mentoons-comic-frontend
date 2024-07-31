import Wordbreak from "./Wordbreak";
import NewComic1 from "@/assets/imgs/comic1.png";
import NewComic2 from "@/assets/imgs/comic2.png";
import NewComic3 from "@/assets/imgs/comic3.png";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const NewComics: React.FC = () => {
  return (
    <div className="bg-primary text-white pt-20">
      <div className="container space-y-10">
        <div className="text-center space-y-4">
          <div className="text-white text-3xl whitelineBefore">New Comics</div>
          <div className="text-7xl w-full font-extrabold leading-[1.10]">
            Enjoy Newest <Wordbreak /> Comic Books.
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="bg-white shadow-sm relative top-[4rem] rounded-xl cursor-pointer group px-4 py-3 space-y-3">
            <div className="relative">
              <img
                className="group-hover:grayscale transition-all duration-500 ease-in-out"
                src={NewComic1}
                alt="new comics"
              />
              <div className="absolute hidden group-hover:block p-3 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <IoMdAdd className="text-4xl text-white " />
              </div>
            </div>
            <div className="flex items-center justify-between text-black">
              <div className="space-y-1">
                <h2 className="font-bold text-3xl tracking-wide">
                  Super Knight
                </h2>
                <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                  <FaRegEye />
                  250.6K Reviews
                </p>
              </div>
              <div className="border-2 border-primary p-3 rounded-full">
                <MdOutlineArrowOutward className="text-2xl text-primary group-hover:rotate-45 transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-xl cursor-pointer group px-4 py-3 space-y-3">
            <div className="relative">
              <img
                className="group-hover:grayscale transition-all duration-500 ease-in-out"
                src={NewComic2}
                alt="new comics"
              />
              <div className="absolute hidden group-hover:block p-3 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <IoMdAdd className="text-4xl text-white " />
              </div>
            </div>
            <div className="flex items-center justify-between text-black">
              <div className="space-y-1">
                <h2 className="font-bold text-3xl tracking-wide">
                  Super Knight
                </h2>
                <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                  <FaRegEye />
                  250.6K Reviews
                </p>
              </div>
              <div className="border-2 border-primary p-3 rounded-full">
                <MdOutlineArrowOutward className="text-2xl text-primary group-hover:rotate-45 transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm relative top-[4rem] rounded-xl cursor-pointer group px-6 py-4 space-y-3">
            <div className="relative">
              <img
                className="group-hover:grayscale transition-all duration-500 ease-in-out"
                src={NewComic3}
                alt="new comics"
              />
              <div className="absolute hidden group-hover:block p-3 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out">
                <IoMdAdd className=" text-4xl text-white " />
              </div>
            </div>
            <div className="flex items-center justify-between text-black">
              <div className="space-y-1">
                <h2 className="font-bold text-3xl tracking-wide">
                  Super Knight
                </h2>
                <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                  <FaRegEye />
                  250.6K Reviews
                </p>
              </div>
              <div className="border-2 border-primary p-3 rounded-full">
                <MdOutlineArrowOutward className="text-2xl text-primary group-hover:rotate-45 transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComics;
