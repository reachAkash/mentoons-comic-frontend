import React from "react";
import AirplaneBg from "@/assets/imgs/airplaneBgHome.svg";
import FlyingBook from "@/assets/imgs/bookBgHome.svg";
import ComicsBgShelf from "@/assets/imgs/comics_audioComicsBgHome.svg";
import PortalImgHome from "@/assets/imgs/portalBgHome.svg";
import WorkshopBgHome from "@/assets/imgs/workshopBgHome.svg";
import comicsBgHome from "@/assets/imgs/comicsBgHome.svg";
import { motion } from "framer-motion";

const ComicsSection: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="relative h-full w-full">
        <img src={comicsBgHome} alt="comics background" />
        <div className="absolute top-[40%] flex items-center justify-center">
          <motion.img
            initial={{ x: -400 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 3.5 }}
            className="w-[80%]"
            src={AirplaneBg}
            alt="airplane image"
          />
        </div>

        <div className="absolute top-[30%] left-[10%]">
          <img src={FlyingBook} alt="books image" />
        </div>
        <div className="absolute top-[30%] right-[10%]">
          <img src={FlyingBook} alt="books image" />
        </div>
        <div className="absolute top-[60%] left-[20%]">
          <img className="rotate-[2d0eg]" src={FlyingBook} alt="books image" />
        </div>
        <div className="absolute top-[60%] right-[20%]">
          <img className="-rotate-[25deg]" src={FlyingBook} alt="books image" />
        </div>
        <div className="absolute -bottom-12">
          <img src={ComicsBgShelf} alt="comics shelf" />
        </div>
        <div className="w-full absolute flex items-center justify-center -bottom-12">
          <img className="w-1/3" src={PortalImgHome} alt="portal" />
        </div>
      </div>
      <div className="relative">
        <img src={WorkshopBgHome} alt="workshop" />
        <div className="w-full absolute rotate-180 flex items-center justify-center right-4 top-[14rem] ">
          <img className="w-1/3" src={PortalImgHome} alt="portal" />
        </div>
      </div>
    </div>
  );
};

export default ComicsSection;
