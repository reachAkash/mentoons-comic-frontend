import React from "react";
import Wordbreak from "./Wordbreak";
// import NewComic1 from "@/assets/imgs/comic1.jpg";
// import NewComic2 from "@/assets/imgs/comic2.jpg";
// import NewComic4 from "@/assets/imgs/comic4.jpg";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCartReducer, addToWishlistReducer } from "@/redux/comicSlice";
import { v4 as uuidv4 } from "uuid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NewComics: React.FC = () => {
  const dispatch = useDispatch();
  const comicData = [
    {
      image: "https://i.postimg.cc/CxyN5F56/comic1.jpg",
      name: "Electronic Gadgets and Kids",
    },
    {
      image: "https://i.postimg.cc/W4TwmXMG/comic2.jpg",
      name: "How to handle relationships",
    },
    {
      image: "https://i.postimg.cc/Nj1xrWrG/comic4.jpg",
      name: "Choose Wisely",
    },
  ];

  const addToWishlist = (image: string) => {
    const item = comicData?.find((comic) => {
      return comic.image == image;
    });
    dispatch(addToWishlistReducer(item));
  };
  const addToCart = (image: string) => {
    const item = comicData?.find((comic) => {
      return comic.image == image;
    });
    dispatch(addToCartReducer(item));
  };

  return (
    <div className="bg-primary text-white pt-20 pb-14 lg:pb-0">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <div className="text-[#d71515] text-3xl lineBefore">New Comics</div>
          <div className="text-4xl lg:text-7xl w-full font-extrabold leading-[1.10]">
            Enjoy Newest <Wordbreak /> Comic Books.
          </div>
        </div>
        <div className="flex flex-wrap flex-row space-y-8 items-center justify-between gap-6">
          {comicData?.map((item, idx) => {
            return (
              <div
                key={uuidv4()}
                className={`bg-white m-auto shadow-sm w-[20rem] md:w-[45%] lg:w-[30%] relative ${
                  idx != 1 ? "lg:top-[5rem]" : "lg:top-[1.5rem]"
                } rounded-xl group px-4 py-3 space-y-3`}
              >
                <div className="relative">
                  <img
                    className="group-hover:grayscale transition-all duration-500 ease-in-out h-[20rem] md:h-[30rem] w-full"
                    src={item?.image}
                    alt="new comics"
                  />
                  {/* <div
                    onClick={() => addToWishlist(item.image)}
                    className="absolute hidden group-hover:block cursor-pointer p-4 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  >
                    <FaHeart className="text-2xl text-white active:text-red-500" />
                  </div> */}
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            onClick={() => addToWishlist(item.image)}
                            className=" hidden group-hover:block cursor-pointer p-4 bg-primary rounded-full"
                          >
                            <FaHeart className="text-2xl text-white active:text-red-500" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#59B2DC] text-white">
                          <p className="font-semibold">Add to Wishlist</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="flex items-center justify-between text-black">
                  <div className="space-y-1">
                    <h2 className="font-bold text-2xl italic tracking-wide">
                      {item?.name}
                    </h2>
                    <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                      <FaRegEye />
                      250.6K Views
                    </p>
                  </div>
                  <div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div
                            onClick={() => addToCart(item.image)}
                            className="border-2 cursor-pointer group-hover:bg-primary active:scale-95 border-primary p-3 rounded-full"
                          >
                            <FaCartShopping className="text-2xl text-primary group-hover:text-white transition-all duration-300 ease-in-out" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#59B2DC] text-white">
                          <p className="font-semibold">Add to library</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
            );
          })}
          {/* hardcode comics */}
          {/* <div className="bg-white shadow-sm relative top-[4rem] rounded-xl cursor-pointer group px-4 py-3 space-y-3">
            <div className="relative">
              <img
                className="group-hover:grayscale transition-all duration-500 ease-in-out h-[30rem] w-full"
                src={NewComic1}
                alt="new comics"
              />
              <div className="absolute hidden group-hover:block p-3 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <IoMdAdd className="text-4xl text-white " />
              </div>
            </div>
            <div className="flex items-center justify-between text-black">
              <div className="space-y-1">
                <h2 className="font-bold text-2xl italic tracking-wide">
                  Electronic Gadgets and Kids
                </h2>
                <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                  <FaRegEye />
                  250.6K Views
                </p>
              </div>
              <div className="border-2 group-hover:bg-primary border-primary p-3 rounded-full">
                <MdOutlineArrowOutward className="text-2xl text-primary group-hover:rotate-45 group-hover:text-white transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm relative top-[1.5rem] rounded-xl cursor-pointer group px-4 py-3 space-y-3">
            <div className="relative">
              <img
                className="group-hover:grayscale transition-all duration-500 ease-in-out h-[30rem] w-full"
                src={NewComic2}
                alt="new comics"
              />
              <div className="absolute hidden group-hover:block p-3 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <IoMdAdd className="text-4xl text-white " />
              </div>
            </div>
            <div className="flex items-center justify-between text-black">
              <div className="space-y-1">
                <h2 className="font-bold text-2xl italic tracking-wide">
                  How to handle relationships
                </h2>
                <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                  <FaRegEye />
                  250.6K Views
                </p>
              </div>
              <div className="border-2 group-hover:bg-primary border-primary p-3 rounded-full">
                <MdOutlineArrowOutward className="text-2xl text-primary group-hover:rotate-45 group-hover:text-white transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm relative top-[4rem] rounded-xl cursor-pointer group px-6 py-4 space-y-3">
            <div className="relative">
              <img
                className="group-hover:grayscale transition-all duration-500 ease-in-out h-[30rem] w-full"
                src={NewComic4}
                alt="new comics"
              />
              <div className="absolute hidden group-hover:block p-3 bg-primary rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out">
                <IoMdAdd className=" text-4xl text-white " />
              </div>
            </div>
            <div className="flex items-center justify-between text-black">
              <div className="space-y-1">
                <h2 className="font-bold text-2xl italic tracking-wide">
                  Choose Wisely
                </h2>
                <p className="flex items-center gap-2 text-medium text-gray-500 text-xl">
                  <FaRegEye />
                  250.6K Views
                </p>
              </div>
              <div className="border-2 group-hover:bg-primary border-primary p-3 rounded-full">
                <MdOutlineArrowOutward className="text-2xl text-primary group-hover:rotate-45 group-hover:text-white transition-all duration-300 ease-in-out" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewComics;
