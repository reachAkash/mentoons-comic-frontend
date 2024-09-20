import React from "react";
import AirplaneBg from "@/assets/imgs/airplaneBgHome.svg";
import FlyingBook from "@/assets/imgs/bookBgHome.svg";
import ComicPodcastHome from "@/assets/imgs/comic-podcastHome.png";
import PortalImgHome from "@/assets/imgs/portalBgHome.svg";
import WorkshopBgHome from "@/assets/imgs/workshopBgHome.png";
import ComicsBgHome from "@/assets/imgs/comicsBgHome.svg";
import StoreBgHome from "@/assets/imgs/storeHome.png";
import Klement_Toonla_Home from "@/assets/imgs/klement_toonlaBgHome.svg";
import BuddyWorkshopHome from "@/assets/imgs/kidsWorkshopHome.svg";
import TeenWorkshopHome from "@/assets/imgs/teenWorkshopHome.svg";
import ElderWorkshopHome from "@/assets/imgs/elderWorkshopHome.svg";
import ParentWorkshopHome from "@/assets/imgs/parentsWorkshopHome.png";
import workshopTextHome from "@/assets/imgs/workshopTextHome.svg";
import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ComicButton from "@/assets/imgs/comicButton.png";
import AudioComicButton from "@/assets/imgs/audioComicButton.png";
import PodcastButton from "@/assets/imgs/podcastButton.png";
import ReadButton from "@/assets/imgs/readButton.png";
import ListenButton from "@/assets/imgs/listenButton.png";
import TransformButton from "@/assets/imgs/transformButton.png";

const ComicsSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative space-y-10 mt-20 mb-[75rem] md:mb-[145rem] lg:mb-[280rem]">
      <div className="relative">
        <img src={ComicsBgHome} alt="comics background" />
        <img
          className="absolute w-[40%] lg:w-[30%] top-[-2rem] lg:top-0 left-[20%]"
          src="/assets/home/box 3.png"
          alt="comics background"
        />
        <div className="absolute top-[45%] lg:top-[40%] flex items-center justify-center">
          <motion.img
            initial={{ x: -400 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.5 }}
            className="hidden md:block md:w-[70%] lg:w-[80%]"
            src={AirplaneBg}
            alt="airplane image"
          />
          <motion.img
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.5 }}
            className="block md:hidden w-[100%]"
            src={AirplaneBg}
            alt="airplane image"
          />
        </div>
        <div className="hidden lg:block absolute top-[30%] lg:top-[50%]">
          <motion.img
            initial={{ rotateX: 10, y: -200, scale: 0 }}
            whileInView={{ rotateX: 0, y: 300, scale: 1.2 }}
            transition={{ delay: 0.5, duration: 2, ease: easeInOut }}
            className="w-[50%] z-[50] relative -top-14 lg:left-[65%]"
            src={Klement_Toonla_Home}
            alt="klement and toonla"
          />
        </div>
        <div className="hidden md:block lg:hidden absolute top-[60%]">
          <motion.img
            initial={{ rotateX: 10, y: -200, scale: 0 }}
            whileInView={{ rotateX: 0, y: 100, scale: 1.2 }}
            transition={{ delay: 0.8, duration: 2, ease: easeInOut }}
            className="w-[30%] z-[50] relative -top-14 left-[35%]"
            src={Klement_Toonla_Home}
            alt="klement and toonla"
          />
        </div>
        <div className="block md:hidden absolute top-[60%]">
          <motion.img
            initial={{ rotateX: 10, y: -70, scale: 0 }}
            whileInView={{ rotateX: 0, y: 100, scale: 1.2 }}
            transition={{ delay: 0.8, duration: 2, ease: easeInOut }}
            className="w-[30%] z-[50] relative -top-14 left-[35%]"
            src={Klement_Toonla_Home}
            alt="klement and toonla"
          />
        </div>
        <div className="absolute flex items-center justify-start top-[35%] lg:top-[30%] left-[10%]">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: [-20, -10, -20] }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            className="w-1/3 md:w-1/2 lg:w-full"
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute flex items-center justify-around top-[35%] lg:top-[30%] right-0 lg:right-[10%]">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: [-20, -10, -20] }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            className="w-1/3 md:w-1/2 lg:w-full"
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute top-[70%] lg:top-[60%] left-[10%]">
          <motion.img
            initial={{ y: -20, rotate: -25 }}
            animate={{ y: [-20, -10, -20], rotate: -25 }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            className="rotate-[-25deg] w-1/3 md:w-1/2 lg:w-full"
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute flex items-center justify-around top-[70%] lg:top-[60%] right-0 lg:right-[10%]">
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: [-20, -10, -20] }} // Smooth movement between values
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror", // Ensures a seamless back-and-forth motion
            }}
            className="-rotate-[25deg] w-1/3 md:w-1/2 lg:w-full"
            src={FlyingBook}
            alt="books image"
          />
        </div>
        <div className="absolute -bottom-[98%]">
          <img src={ComicPodcastHome} alt="comics shelf" />
        </div>
        <div className="absolute left-0 -bottom-[15%]">
          <img
            // onClick={() => navigate("/mentoons-comics/comics")}
            className="z-50 w-[30%] lg:w-2/3 cursor-pointer hover:scale-110 active:scale-105 transition-all ease-in-out duration-300"
            src={ReadButton}
            alt="comic button"
          />
        </div>
        <div className="absolute left-1/3 -bottom-[45%]">
          <img
            onClick={() => navigate("/mentoons-comics/comics")}
            className="z-50 md:w-[40%] lg:w-2/3 cursor-pointer hover:scale-110 active:scale-105 transition-all ease-in-out duration-300"
            src={ComicButton}
            alt="comic button"
          />
        </div>
        <div className="absolute left-1/2 -bottom-[45%]">
          <img
            onClick={() => navigate("/mentoons-comics/audio-comics")}
            className="z-50 md:w-[40%] lg:w-2/3 cursor-pointer hover:scale-110 active:scale-105 transition-all ease-in-out duration-300"
            src={AudioComicButton}
            alt="comic button"
          />
        </div>
        <div className="absolute left-2/3 -bottom-[86%]">
          <img
            onClick={() => navigate("/mentoons-podcast")}
            className="z-50 w-2/3 cursor-pointer hover:scale-110 active:scale-105 transition-all ease-in-out duration-300"
            src={PodcastButton}
            alt="comic button"
          />
        </div>
        <div className="absolute left-0 -bottom-[75%]">
          <img
            // onClick={() => navigate("/mentoons-comics/comics")}
            className="z-50 w-[30%] lg:w-2/3 cursor-pointer hover:scale-110 active:scale-105 transition-all ease-in-out duration-300"
            src={ListenButton}
            alt="comic button"
          />
        </div>
      </div>
      <div className="absolute bottom-[-144%]">
        <img src={WorkshopBgHome} alt="workshop" />
        <div>
          <img
            className="absolute w-[45%] -left-[1%] top-[12%]"
            src={workshopTextHome}
            alt="workshop"
          />
        </div>
        <div className="absolute left-0 bottom-[42%]">
          <img
            // onClick={() => navigate("/mentoons-comics/comics")}
            className="z-50 w-[15%] md:w-[30%] lg:w-2/3 cursor-pointer hover:scale-110 active:scale-105 transition-all ease-in-out duration-300"
            src={TransformButton}
            alt="comic button"
          />
        </div>
        <div className="w-full absolute rotate-180 flex items-center justify-center right-4 top-0 ">
          <img className="w-1/3" src={PortalImgHome} alt="portal" />
        </div>
        <div className="">
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=buddy")}
            className="absolute right-[38%] top-[26%] w-[13%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={BuddyWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=teen")}
            className="absolute right-[13%] top-[30%] w-[15%] hover:scale-105 cursor-pointer rotate-2 transition-all ease-in-out duration-300"
            src={TeenWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=family")}
            className="absolute right-[33%] top-[50%] w-[15%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={ElderWorkshopHome}
            alt="workshop poster"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/mentoons-workshops?workshop=family")}
            className="absolute right-[14%] top-[50%] w-[13%] hover:scale-105 cursor-pointer transition-all ease-in-out duration-300"
            src={ParentWorkshopHome}
            alt="workshop poster"
          />
        </div>
      </div>
      <div className="absolute bottom-[-215%]">
        <img
          onClick={() => navigate("/mentoons-workshops?workshop=family")}
          className=""
          src={StoreBgHome}
          alt="workshop poster"
        />
      </div>
    </div>
  );
};

export default ComicsSection;
