import React, { useState } from "react";
import WorkshopImg1 from "@/assets/imgs/Kids_camp 2.jpg";
import WorkshopImg2 from "@/assets/imgs/Teen_camp 2.jpg";
import WorkshopImg3 from "@/assets/imgs/Family_camp 2.jpg";
import { motion } from "framer-motion";

const ComicWorkshop: React.FC = () => {
  const [playVideo, setPlayVideo] = useState<{ index: number; play: boolean }>({
    index: 0,
    play: false,
  });

  const workshopGenres: string[] = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Historical",
    "Thriller",
    "Horror",
    "Biography",
  ];

  const workshopImgs = [
    {
      name: "Kids Camp",
      img: WorkshopImg1,
      video:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Kids+Camp_01.mp4",
    },
    {
      name: "Teen Camp",
      img: WorkshopImg2,
      video:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Teen+Camp_01.mp4",
    },
    {
      name: "Family Camp",
      img: WorkshopImg3,
      video:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Family+Camp_01.mp4",
    },
  ];
  const handlePlayVideo = (idx: number) => {
    setPlayVideo({ play: true, index: idx });
  };

  return (
    <div className="container flex flex-col items-center justify-start py-20 pb-28 space-y-10">
      <motion.div
        initial={{ y: 50, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-5xl tracking-wide"
      >
        Workshops in Mentoons
      </motion.div>
      <div className="flex flex-wrap items-center justify-start gap-x-1 gap-y-3 lg:gap-0 md:justify-between w-full">
        {workshopGenres?.map((item: string) => {
          return (
            <motion.button
              initial={{ y: 50, opacity: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-green-400 text-white hover:text-green-500 px-3 py-1 rounded-full font-semibold border hover:bg-white transition-all ease-in-out duration-300"
            >
              {item}
            </motion.button>
          );
        })}
      </div>
      {/* images data */}
      {/* <div className="flex items-center justify-around gap-8">
        {workshopImgs?.map((item) => {
          return (
            <div className="">
              {" "}
              <img className="rounded-md" src={item} />{" "}
            </div>
          );
        })}
      </div> */}
      {/* advance image data */}
      <div className="w-full flex flex-col gap-10">
        {workshopImgs?.map((item, idx) => {
          return idx !== 1 ? (
            <div
              className={`w-full flex ${
                idx % 2 != 0 && "flex-row-reverse"
              } flex-col md:flex-row items-center justify-start gap-10`}
            >
              <div className={`w-full md:w-[40%]`}>
                {playVideo.play && idx === playVideo.index ? (
                  <video
                    className="rounded-lg w-full h-[20rem] lg:w-[25rem] lg:h-[32rem]"
                    src={item.video}
                    loop
                    autoPlay
                    controls
                    controlsList="nodownload"
                  ></video>
                ) : (
                  <img
                    onClick={() => handlePlayVideo(idx)}
                    className="w-full h-[20rem] lg:w-[25rem] lg:h-[32rem] rounded-3xl"
                    src={item.img}
                  />
                )}
              </div>
              <div className="w-full md:w-[60%] space-y-4">
                <div className="font-semibold text-4xl leading-snug tracking-wide">
                  {item.name}
                </div>
                <div className="text-gray-500 text-xl font-semibold">
                  Contents :
                </div>
                <div className="space-y-4">
                  <div>0. Lorem ipsum dolor sit amet.</div>
                  <div>1. Lorem ipsum dolor sit amet.</div>
                  <div>2. Lorem ipsum dolor sit amet.</div>
                  <div>3. Lorem ipsum dolor sit amet.</div>
                  <div>4. Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`w-full flex flex-col md:flex-row items-center justify-start gap-10`}
            >
              <div className="hidden md:flex flex-col w-full md:w-[60%] space-y-4">
                <div className="font-semibold text-4xl leading-snug tracking-wide">
                  {item.name}
                </div>
                <div className="text-gray-500 text-xl font-semibold">
                  Contents :
                </div>
                <div className="space-y-4">
                  <div>0. Lorem ipsum dolor sit amet.</div>
                  <div>1. Lorem ipsum dolor sit amet.</div>
                  <div>2. Lorem ipsum dolor sit amet.</div>
                  <div>3. Lorem ipsum dolor sit amet.</div>
                  <div>4. Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
              <div className={`hidden md:flex w-full md:w-[40%]`}>
                {playVideo.play && idx === playVideo.index ? (
                  <video
                    className="rounded-lg w-full h-[20rem] lg:w-[25rem] lg:h-[32rem]"
                    src={item.video}
                    loop
                    autoPlay
                    controls
                    controlsList="nodownload"
                  ></video>
                ) : (
                  <img
                    onClick={() => handlePlayVideo(idx)}
                    className="w-full h-[20rem] lg:w-[25rem] lg:h-[32rem] rounded-3xl"
                    src={item.img}
                  />
                )}
              </div>
              <div className={`block md:hidden w-full md:w-[40%]`}>
                {playVideo.play && idx === playVideo.index ? (
                  <video
                    className="rounded-lg w-full h-[20rem] lg:w-[25rem] lg:h-[32rem]"
                    src={item.video}
                    loop
                    autoPlay
                    controls
                    controlsList="nodownload"
                  ></video>
                ) : (
                  <img
                    onClick={() => handlePlayVideo(idx)}
                    className="w-full h-[20rem] lg:w-[25rem] lg:h-[32rem] rounded-3xl"
                    src={item.img}
                  />
                )}
              </div>
              <div className="flex flex-col md:hidden w-full md:w-[60%] space-y-4">
                <div className="font-semibold text-4xl leading-snug tracking-wide">
                  {item.name}
                </div>
                <div className="text-gray-500 text-xl font-semibold">
                  Contents :
                </div>
                <div className="space-y-4">
                  <div>0. Lorem ipsum dolor sit amet.</div>
                  <div>1. Lorem ipsum dolor sit amet.</div>
                  <div>2. Lorem ipsum dolor sit amet.</div>
                  <div>3. Lorem ipsum dolor sit amet.</div>
                  <div>4. Lorem ipsum dolor sit amet.</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicWorkshop;
