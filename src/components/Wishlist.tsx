import React from "react";
import Wordbreak from "./Wordbreak";
import { MdDelete } from "react-icons/md";
// import Comic1 from "@/assets/imgs/comic1.jpg";
// import Comic2 from "@/assets/imgs/comic2.jpg";
// import Comic3 from "@/assets/imgs/comic6.jpg";
// import Comic4 from "@/assets/imgs/comic4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { v4 } from "uuid";
import { removeFromWishlistReducer } from "@/redux/comicSlice";

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((store: RootState) => store.comics.wishlist);
  // const wishlistData = [
  //   { name: "Electronic Gadgets & kids", image: Comic1 },
  //   { name: "How to handle relationships", image: Comic2 },
  //   { name: "One way trip", image: Comic3 },
  //   { name: "Choose Wisely", image: Comic4 },
  //   { name: "Choose Wisely", image: Comic4 },
  //   { name: "Choose Wisely", image: Comic4 },
  //   { name: "Choose Wisely", image: Comic4 },
  // ];

  const removeComic = (image: string) => {
    dispatch(removeFromWishlistReducer(image));
  };

  return (
    <div className="container py-20 pb-24 space-y-20">
      <div className="text-start pb-7 space-y-4 border-b border-black">
        <div className=" text-3xl lineBefore uppercase text-[#d71515]">
          Wishlist{" "}
        </div>
        <div className="text-4xl md:text-7xl w-full font-extrabold leading-[1.10]">
          Your Favourite <Wordbreak /> Comic Books.
        </div>
      </div>
      <div className="relative flex flex-wrap items-center justify-start gap-x-8 gap-y-12">
        {wishlistData.length <= 0 ? (
          <div className="lg:absolute lg:left-[50%] lg:top-[80%] lg:translate-x-[-50%] lg:translate-y-[0%] text-center space-y-4">
            <div className="text-4xl font-semibold">No Comics Found! 🥺</div>
            <div className="text-gray-500 text-lg">
              Try adding some comics in wishlist
            </div>
            <button className="bg-primary hover:scale-105 active:scale-95 transition-all ease-in-out duration-300 text-white px-6 py-3 rounded-full">
              View Comics
            </button>
          </div>
        ) : (
          wishlistData?.map((item) => {
            return (
              <div key={v4()} className="space-y-4">
                <div className="relative">
                  <img
                    className="w-[17rem]"
                    src={item?.image}
                    alt="comic image"
                  />
                  <div
                    onClick={() => removeComic(item?.image)}
                    className="absolute top-[-1.5rem] left-4 bg-red-500 rounded-full p-3 border-4 border-white"
                  >
                    <MdDelete className="text-2xl text-white" />
                  </div>
                </div>
                <div className="text-center text-xl font-semibold">
                  {item?.name}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Wishlist;
