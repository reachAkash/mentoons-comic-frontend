import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Popus: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-black/60 fixed top-0 left-0 flex items-center justify-center z-[999999]">
      <div className="max-w-[25rem]  px-2 pt-1 pb-3 rounded-md bg-white backdrop-blur-sm z-[9999] transition-all ease-in-out">
        <div className="flex items-center justify-end">
          <IoCloseOutline className="cursor-pointer text-2xl text-black hover:text-red-500 duration-300 active:scale-75" />
        </div>
        <div className="px-4 space-y-3">
          <div className="w-[20rem] rounded-lg overflow-hidden h-[20rem] max-w-[35rem] max-h-[25rem]">
            <img
              className="w-full h-full rounded-2xl"
              src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-13.jpg"
              alt=""
            />
          </div>
          <div className="font-semibold text-lg text-center">
            Sign up & Get comic Free
          </div>
          <div
            onClick={() => navigate("/auth")}
            className="bg-primary text-white rounded-full border border-primary text-center cursor-pointer px-4 py-2 duration-300 hover:bg-white hover:text-primary"
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popus;
