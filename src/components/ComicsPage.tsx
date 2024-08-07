import { addToCartReducer, Comic } from "@/redux/comicSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { FaCartShopping, FaCirclePlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { IoFilterSharp } from "react-icons/io5";

const ComicsPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const comicsData = useSelector((store: RootState) => store.comics.comics);

  const addToCart = (image: string) => {
    const item = comicsData?.find((comic: Comic) => {
      return comic.thumbnail == image;
    });
    console.log(item);
    dispatch(addToCartReducer(item));
  };

  return (
    <div className="container py-10 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-white py-3 px-4 bg-blue-500">
          <div className="text-3xl font-semibold px-4 py-2 hover:bg-blue-200  rounded-md  ">
            Audio Comics
          </div>
          <div className="text-3xl font-semibold px-4 py-2 hover:bg-blue-200 rounded-md ">
            Comics
          </div>
        </div>
        <div className="flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-md">
          <div className="flex items-center gap-2">
            Filter <IoFilterSharp className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {comicsData?.map((item: Comic) => {
          return (
            <div
              key={v4()}
              className="bg-white shadow-lg group text-black rounded-2xl px-5 py-5 space-y-3"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  onClick={() => navigate(`/audio-comic?comic=${item.name}`)}
                  className="w-full h-[23rem] lg:h-[16rem] rounded-2xl group-hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
                  src={item?.thumbnail}
                  alt="comic image"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold tracking-wide">
                  {item?.name}
                </div>
                <div className="text-black text-sm tracking-wide">
                  {item?.desc}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-end flex items-center justify-end gap-2 border-t border-gray-200 group-hover:text-red-500 group-hover:underline text-xl pt-4 cursor-pointer">
                  Play Teaser{" "}
                  <FaCirclePlay className="text-2xl text-red-700 group-hover:text-500" />
                </div>
                <div
                  onClick={(e) => {
                    addToCart(item.thumbnail);
                    e.stopPropagation();
                  }}
                  className="border-2 cursor-pointer hover:rotate-[360deg] transition-all ease-in-out duration-1000 bg-primary active:scale-95 border-primary p-3 rounded-full"
                >
                  <FaCartShopping className="text-2xl text-white transition-all duration-300 ease-in-out" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicsPage;
