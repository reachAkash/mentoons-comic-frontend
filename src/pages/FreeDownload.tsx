import React, { useState } from "react";
import { motion } from "framer-motion";
import Wordbreak from "@/components/comics/Wordbreak";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { MdCloudDownload } from "react-icons/md";
import FreeDownloadForm from "@/components/Home/FreeDownloadForm";

export interface GamesData {
  name: string;
  desc: string;
  image: string;
  imgStyling: string;
  cardStyling: string;
}

const FreeDownload: React.FC = () => {
  const navigate = useNavigate();

  const gamesData: GamesData[] = [
    {
      name: "Hangman",
      desc: "Hangman is a game",
      image: "/hangman.png",
      imgStyling: "bg-gradient-to-t from from-rose-200 to-white",
      cardStyling: "bg-purple-200",
    },
    {
      name: "Word Game",
      desc: "Word Game is a game",
      image: "/wordGame.png",
      imgStyling: "bg-gradient-to-b from from-purple-200 to-white",
      cardStyling: "bg-lime-200",
    },
    {
      name: "Insta Board",
      desc: "Instaboard is a game",
      image: "/wordGame.png",
      imgStyling: "bg-gradient-to-l from from-amber-200 to-white",
      cardStyling: "bg-rose-200",
    },
    {
      name: "Hangman",
      desc: "Hangman is a game",
      image: "/hangman.png",
      imgStyling: "bg-gradient-to-r from from-green-200 to-white",
      cardStyling: "bg-amber-200",
    },
  ];

  const [showFreeDownloadForm, setShowFreeDownloadForm] =
    useState<boolean>(false);
  return (
    <div className="container py-10 bg-[#00B0A5]">
      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="space-y-5 pb-8 text-center lg:text-start"
      >
        <motion.div
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" text-3xl text-red-500 lineBefore uppercase"
        >
          Free Download{" "}
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl lg:text-7xl text-white w-full font-extrabold leading-[1.10]"
        >
          Our Top Trendy <Wordbreak /> Games for{" "}
          <span className="text-primary">Free!</span>{" "}
        </motion.div>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {gamesData?.map((item) => {
          return (
            <motion.div
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={v4()}
              // onClick={() => navigate(`/mentoons-comics/audio-comics/${item.name}`)}
              className={`${
                item?.cardStyling && "bg-white"
              } shadow-2xl group cursor-pointer text-black rounded-2xl px-5 py-5 space-y-3`}
              onClickCapture={() => setShowFreeDownloadForm(true)}
            >
              <div
                className={`${item?.imgStyling} overflow-hidden rounded-2xl`}
              >
                <img
                  className="w-full h-[23rem] lg:h-[16rem] rounded-2xl group-hover:scale-105 transition-all ease-in-out duration-300"
                  src={item?.image}
                  alt="comic image"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold tracking-wide">
                  {item?.name}
                </div>
                <div className=" text-sm tracking-wide">{item?.desc}</div>
              </div>
              <div className="text-end flex items-center justify-end gap-2 border-t border-gray-200 group-hover:text-red-500 group-hover:underline text-xl pt-4 cursor-pointer">
                Download Now{" "}
                <MdCloudDownload className="text-2xl text-red-700 group-hover:text-500" />
              </div>
            </motion.div>
          );
        })}
      </div>
      {showFreeDownloadForm && (
        <FreeDownloadForm setShowFreeDownloadForm={setShowFreeDownloadForm} />
      )}
    </div>
  );
};

export default FreeDownload;
