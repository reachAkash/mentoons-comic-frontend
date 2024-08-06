// import { RootState } from "@/redux/store";
import React from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const AudioComicPage: React.FC = () => {
  const data = useQuery();
  const comic = data.get("comic");
  //   const comic = useSelector((store:RootState)=>store.comics.cart)
  return (
    <div className="container flex flex-col items-center justify-center py-10 space-y-4">
      <div className="w-full flex items-center justify-between">
        <div className="border px-4 py-2 rounded-md bg-black text-white">
          Age 6 - 12
        </div>
        <div>Akash</div>
      </div>
      <div className="text-center space-y-2">
        <div className="font-medium text-lg">Mentoons Presents</div>
        <div className="font-semibold text-5xl">{comic}</div>
      </div>
      <div>
        <video
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COME_OUT_OF_GAMING_02.mp4"
          width="700"
          height="200"
          muted
          loop
          controls
        ></video>
      </div>
    </div>
  );
};

export default AudioComicPage;
