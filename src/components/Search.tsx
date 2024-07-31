import React from "react";
import Popular1 from "@/assets/imgs/popular1.png";
import Popular2 from "@/assets/imgs/popular2.png";
import Popular3 from "@/assets/imgs/popular3.png";
import Popular4 from "@/assets/imgs/popular4.png";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const popularComics = [Popular1, Popular2, Popular3, Popular4];

  return (
    <div className="py-10 space-y-8">
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
              className="cursor-pointer w-full md:w-[15rem] md:h-[14rem]"
              key={idx}
              src={item}
            />
          );
        })}
      </div>
      <button className="bg-primary font-medium hover:bg-white hover:text-primary transition-all duration-300 ease-in-out px-3 py-3 w-full text-center m-auto text-white">
        Browse All
      </button>
    </div>
  );
};

export default Search;
