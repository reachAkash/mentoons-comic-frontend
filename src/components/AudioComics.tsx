import React from "react";
import Wordbreak from "./Wordbreak";
import { FaCirclePlay } from "react-icons/fa6";
import Comic1 from "@/assets/imgs/comic6.jpg";
import Comic2 from "@/assets/imgs/comic7.jpg";
import Comic3 from "@/assets/imgs/comic8.jpg";
import Comic4 from "@/assets/imgs/comic4.jpg";
import Comic5 from "@/assets/imgs/comic5.jpg";
import Comic6 from "@/assets/imgs/comic2.jpg";
import { useNavigate } from "react-router-dom";

const PopularComics: React.FC = () => {
  const navigate = useNavigate();
  const arr = [
    {
      name: "Come Out Of Gaming",
      description:
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      thumbnail: Comic1,
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COME_OUT_OF_GAMING_02.mp4",
      category: "13-19",
    },
    {
      name: "Bet Your Life",
      description:
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      thumbnail: Comic2,
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/BET_YOUR_LIFE.mp4",
      category: "13-19",
    },
    {
      name: "Hungry For Likes, Not Life",
      description:
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      thumbnail: Comic3,
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/HUNGRY_FOR_LIKES_NOT_LIFE_01.mp4",
      category: "13-19",
    },
    {
      name: "How To Handle Relationships",
      description:
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      thumbnail: Comic6,
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/HOW+TO+HANDLE+RELATIONSHIP.mp4",
      category: "Book",
    },
    {
      name: "Don't Fade Away",
      description:
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      thumbnail: Comic5,
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/DONT_FADE_AWAY_02.mp4",
      category: "13-19",
    },
    {
      name: "Choose Wisely",
      description:
        "lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
      thumbnail: Comic4,
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CHOOSE_WISLEY_3.mp4",
      category: "13-19",
    },
  ];

  return (
    <div className="container bg-[#f0ebe5] space-y-5 py-14 lg:py-28">
      <div className="space-y-5 pb-8 text-center lg:text-start">
        <div className=" text-3xl text-red-500 lineBefore uppercase">
          Audio Comics{" "}
        </div>
        <div className="text-5xl lg:text-7xl text-black w-full font-extrabold leading-[1.10]">
          Our Top Trendy <Wordbreak /> Fun Audio Comic
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {arr?.map((item) => {
          return (
            <div
              onClick={() => navigate(`/audio-comic?${item.name}`)}
              className="bg-white shadow-lg group cursor-pointer text-black rounded-2xl px-5 py-5 space-y-3"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  className="w-full h-[23rem] lg:h-[16rem] rounded-2xl group-hover:scale-105 transition-all ease-in-out duration-300"
                  src={item?.thumbnail}
                  alt="comic image"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold tracking-wide">
                  {item?.name}
                </div>
                <div className="text-gray-400 text-sm tracking-wide">
                  {item?.description}
                </div>
              </div>
              <div className="text-end flex items-center justify-end gap-2 border-t border-gray-200 group-hover:text-red-500 group-hover:underline text-xl pt-4 cursor-pointer">
                Play{" "}
                <FaCirclePlay className="text-2xl text-red-700 group-hover:text-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularComics;
