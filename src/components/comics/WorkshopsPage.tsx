import React from "react";
import WorkshopHero from "@/assets/imgs/workshop_home.png";
import WorkshopAlarm from "@/assets/imgs/Workshops_Page_.png";
import workshopImg1 from "/Buddy camp.png";
import workshopImg2 from "/Teen camp .png";
import workshopImg3 from "/Family camp.png";
import workshopImg4 from "@/assets/imgs/Workshops_Page_ 8.png";
import workshopImg5 from "@/assets/imgs/Workshops_Page_ 9.png";

const ComicWorkshop: React.FC = () => {
  const workshopDetails = [
    { name: "Buddy Camp", img: workshopImg1 },
    { name: "Teen Camp", img: workshopImg2 },
    { name: "Family Camp", img: workshopImg3 },
    { name: "How to make your own Comic", img: workshopImg4 },
    { name: "How to make your own Character", img: workshopImg5 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div>
          <img
            className="h-[50vh] md:h-full w-full"
            src={WorkshopHero}
            alt="Workshop background"
          />
        </div>
        <div className="absolute w-1/2 text-white left-[27%] top-1/2 -translate-y-1/2 md:-translate-y-[60%] -translate-x-1/2 font-bold text-2xl md:text-5xl lg:text-7xl">
          Making mentoring accessible, engaging, and impactful for all.
          <div className="relative left-32">
            .<span className="font-extrabold">.</span>.
          </div>
        </div>
      </div>

      {/* Workshop Listing Section */}
      <div className="relative flex flex-col items-center bg-darkClouds bg-cover bg-no-repeat  py-20 gap-4">
        <div className="absolute -top-14 left-4 md:-top-44 md:left-20">
          <img
            className="w-1/3 md:w-2/3"
            src={WorkshopAlarm}
            alt="alarm image"
          />
        </div>
        {/* First row: 3 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          {workshopDetails.slice(0, 3).map((item, index) => (
            <div className="flex justify-center w-full" key={index}>
              <img className="w-[85%]" src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
        {/* Second row: 2 centered images */}
        <div className="flex justify-center w-full gap-4">
          {workshopDetails.slice(3).map((item, index) => (
            <div className="flex justify-center w-full lg:w-1/3" key={index}>
              <img className="w-[80%]" src={item.img} alt={item.name} />
            </div>
          ))}
        </div>
        {/* <img src={WorkshopBg} alt="dark clouds" /> */}
      </div>
    </div>
  );
};

export default ComicWorkshop;
