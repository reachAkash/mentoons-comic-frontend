import { RootState } from "@/redux/store";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SheetClose } from "./ui/sheet";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const comicsData = useSelector((store: RootState) => store.comics.comics);
  const popularComics = comicsData.slice(0, 4);
  return (
    <div className="py-10 space-y-6">
      <div className="bg-white flex items-center justify-between rounded-md py-1 px-3">
        <input
          className="bg-transparent w-full h-12 outline-none border-none"
          placeholder="Search by Comic Name"
        />
        <CiSearch className="text-2xl" />
      </div>
      <div className="grid w-full place-items-center md:grid-cols-2 gap-6">
        {popularComics?.map((item, idx) => {
          return (
            <img
              onClick={() => navigate("/audio-comics/comic=" + item.name)}
              className="cursor-pointer w-full md:w-[15rem] md:h-[14rem]"
              key={idx}
              src={item.thumbnail}
            />
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
