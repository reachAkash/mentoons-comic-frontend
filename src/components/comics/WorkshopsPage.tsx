import React, { useEffect, useRef, useState } from "react";
import WorkshopHero from "@/assets/imgs/workshop_home.png";
import WorkshopHeroSmall from "@/assets/imgs/workshop-home-small.png";
import WorkshopAlarm from "@/assets/imgs/Workshops_Page_.png";
import workshopStar from "@/assets/imgs/Workshops_Page_ 7.png";
import workshopBlueBg from "@/assets/imgs/workshop-bg1.png";
import workshopArrow from "@/assets/imgs/workshop-arrow.png";
import { workshopDetails } from "@/constant/comicsConstants";
import { useQuery } from "@/pages/AudioComicPage";

export interface WorkshopItems {
  name: string;
  desc: string;
  img: string;
  video: string;
}

const ComicWorkshop: React.FC = () => {
  const currType = useQuery();
  const workshop = currType.get("workshop");
  const activeWorkshop =
    workshop == "buddy"
      ? 0
      : workshop == "teen"
      ? 1
      : workshop == "family"
      ? 2
      : workshop == "comic"
      ? 3
      : 4;

  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItems>(
    workshopDetails[activeWorkshop]
  );

  const workshopRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (item: WorkshopItems) => {
    setSelectedWorkshop(item);
    if (workshopRef.current) {
      workshopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleCardClick(workshopDetails[activeWorkshop]);
  }, [workshop]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div>
          <img
            className="hidden md:block h-full w-full"
            src={WorkshopHero}
            alt="Workshop background"
          />
          <img
            className="block md:hidden w-full"
            src={WorkshopHeroSmall}
            alt="Workshop background"
          />
        </div>
        <div className="absolute w-[70%] md:w-1/2 text-white md:left-[27%] top-10 pl-6 md:pl-0 text-start md:top-1/2 md:-translate-y-[60%] md:-translate-x-1/2 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Making mentoring accessible, engaging, and impactful for all.
          <div className="relative right-14 md:left-32">
            .<span className="font-extrabold">.</span>.
          </div>
          <div>
            <img
              className="hidden md:block w-14 absolute -bottom-14 left-2/3"
              src={workshopArrow}
              alt="fun icon"
            />
            <img
              className="block md:hidden w-14 absolute top-10 left-[110%]"
              src={workshopArrow}
              alt="fun icon"
            />
          </div>
        </div>
      </div>

      {/* Workshop Listing Section */}
      <div className="relative flex flex-col items-center bg-darkClouds bg-cover bg-no-repeat pt-20  gap-4">
        {/* styling images */}
        <div className="absolute -top-14 left-4 md:-top-32 lg:-top-44 md:left-20">
          <img
            className="w-1/3 md:w-[50%] lg:w-2/3"
            src={WorkshopAlarm}
            alt="alarm image"
          />
        </div>
        {/* First row: 3 images */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-12 md:gap-4">
          {workshopDetails.slice(0, 3).map((item, index) => (
            <div
              onClick={() => handleCardClick(item)}
              className="flex justify-center w-full"
              key={index}
            >
              <img
                className="w-[70%] md:w-[85%] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))}
        </div> */}
        {/* Second row: 2 centered images */}
        {/* <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-0 w-full gap-12 md:gap-4">
          {workshopDetails.slice(3).map((item, index) => (
            <div
              onClick={() => handleCardClick(item)}
              className="flex justify-center w-full lg:w-1/3"
              key={index}
            >
              <img
                className="w-[70%] md:w-[80%] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))}
        </div> */}
        {/* <img src={WorkshopBg} alt="dark clouds" /> */}
        <div
          ref={workshopRef}
          className="relative flex flex-col w-full h-full max-w-7xl pt-10 space-y-10"
        >
          {/* workshop seperate section */}
          <img className="w-full h-full" src={workshopBlueBg} alt="blue bg" />
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] space-y-5">
            <div className="font-base text-4xl md:text-5xl text-white flex items-center justify-center m-auto">
              <img src={workshopStar} alt="star" /> {selectedWorkshop.name}{" "}
              <img src={workshopStar} alt="star" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between px-14 gap-8">
              <div className="w-[60%]">
                <video
                  className="rounded-lg pl-4"
                  src={selectedWorkshop.video}
                  width="800"
                  height="400"
                  controls
                  controlsList="nodownload"
                ></video>
              </div>
              <div className="w-[60%] space-y-4">
                <div className="font-medium leading-tight tracking-wide text-2xl">
                  {selectedWorkshop.desc}
                </div>
                <div className="bg-button bg-contain bg-no-repeat relative left-32 px-8 py-3 w-full h-full cursor-pointer scale-105  hover:scale-110 transition-all duration-300 ease-in-out">
                  <div className="w-full relative text-2xl text-white bg-cover pl-2">
                    Talk to us!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicWorkshop;
