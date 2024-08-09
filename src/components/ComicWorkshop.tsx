import React, { useState } from "react";
import WorkshopImg1 from "@/assets/imgs/comic workshop week 1.jpg";
import WorkshopImg2 from "@/assets/imgs/comic workshop week 2.jpg";
import WorkshopImg3 from "@/assets/imgs/comic workshop week 3.jpg";
import WorkshopImg4 from "@/assets/imgs/comic workshop week 4.jpg";

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

  const workshopImgs = [WorkshopImg1, WorkshopImg2, WorkshopImg3, WorkshopImg4];
  const handlePlayVideo = (idx: number) => {
    setPlayVideo({ play: true, index: idx });
  };

  return (
    <div className="container flex flex-col items-center justify-start py-20 pb-28 space-y-10">
      <div className="font-semibold text-5xl tracking-wide">
        Workshops in Mentoons
      </div>
      <div className="flex items-center justify-between w-full">
        {workshopGenres?.map((item: string) => {
          return (
            <button className="bg-green-400 text-white hover:text-green-500 px-3 py-1 rounded-full font-semibold border hover:bg-white transition-all ease-in-out duration-300">
              {item}
            </button>
          );
        })}
      </div>
      {/* images data */}
      <div className="flex items-center justify-around gap-8">
        {workshopImgs?.map((item) => {
          return (
            <div className="">
              {" "}
              <img className="rounded-md" src={item} />{" "}
            </div>
          );
        })}
      </div>
      {/* advance image data */}
      {/* <div className="w-full flex flex-col gap-10">
        {workshopImgs?.map((item, idx) => {
          return (
            <div
              className={`w-full flex ${
                idx % 2 != 0 && "flex-row-reverse"
              } items-center justify-start gap-10`}
            >
              <div className={`w-[40%]`}>
                {playVideo.play && idx === playVideo.index ? (
                  <video
                    className="rounded-lg w-[25rem] h-[32rem]"
                    src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/How+to+make+your+Own+Comic+Workshop+Trailer_01.mp4"
                    loop
                    autoPlay
                    controls
                    controlsList="nodownload"
                  ></video>
                ) : (
                  <img
                    onClick={() => handlePlayVideo(idx)}
                    className="w-[25rem] h-[32rem] rounded-3xl"
                    src={item}
                  />
                )}
              </div>
              <div className="w-[60%] space-y-4">
                <div className="font-semibold text-4xl leading-snug tracking-wide">
                  Workshop Week 1 Details
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
      </div> */}
    </div>
  );
};

export default ComicWorkshop;
