import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import HoverCardComic from "./HoverCardComic";

export interface ShowButtonInterface {
  index: number | null;
  show: boolean;
}
const Search: React.FC = () => {
  const navigate = useNavigate();
  const comicsData = useSelector((store: RootState) => store.comics.comics);
  const popularComics = comicsData.slice(0, 12);
  const [showButton, setShowButton] = useState<ShowButtonInterface>();
  return (
    <div className="py-10 pb-0 space-y-6">
      <div className="bg-white flex items-center justify-between rounded-md py-1 px-3">
        <input
          className="bg-transparent w-full h-12 outline-none border-none"
          placeholder="Search by Comic Name"
        />
        <CiSearch className="text-2xl" />
      </div>
      <div className="grid w-full place-items-center md:grid-cols-2 gap-6">
        {popularComics?.map((item, index) => {
          return (
            <div
              onMouseOver={() => setShowButton({ index, show: true })}
              onMouseLeave={() => setShowButton({ index: null, show: false })}
              className="relative flex flex-col items-center justify-center transition-all ease-in-out"
            >
              <SheetClose>
                <img
                  onClick={() => navigate("/audio-comic?comic=" + item.name)}
                  className={`cursor-pointer ${
                    index === showButton?.index && "grayscale-[80%]"
                  } w-full md:w-[15rem] md:h-[14rem] duration-700`}
                  key={index}
                  src={item.thumbnail}
                />
              </SheetClose>
              {index === showButton?.index && showButton.show === true && (
                <SheetClose>
                  {" "}
                  <Button
                    onClick={() => navigate("/audio-comic?comic=" + item.name)}
                    className="absolute left-0 font-semibold bottom-0 w-full bg-primary text-white hover:text-primary hover:bg-white duration-500"
                  >
                    View Sample
                  </Button>
                </SheetClose>
              )}
            </div>
          );
        })}
      </div>
      <SheetClose asChild>
        <button
          onClick={() => navigate("comics-list")}
          className="bg-primary font-medium hover:bg-white hover:text-primary transition-all duration-300 ease-in-out px-3 py-3 w-full text-center m-auto text-white"
        >
          View All
        </button>
      </SheetClose>
    </div>
  );
};

export default Search;
