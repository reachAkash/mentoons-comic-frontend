import React from "react";
import { useNavigate } from "react-router-dom";
// import Logo from "@/assets/imgs/logo.png";
import NotFoundImg from "/404page.png";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    // <div className="w-screen h-[90vh] flex flex-col items-center justify-center space-y-4">
    //   <img className="w-[20rem]" src={Logo} alt="Not Found" />
    //   <div className="font-semibold text-4xl">Page Not Found!</div>
    //   <button
    //     onClick={() => navigate("/")}
    //     className="bg-primary px-4 py-2 rounded-full border border-primary text-white hover:bg-white hover:text-primary transition-all ease-in-out duration-300"
    //   >
    //     Go to Home
    //   </button>
    // </div>
    <div className="flex flex-col items-center justify-evenly h-[93vh] md:h-full space-y-5">
      <img
        className="w-full h-[40%] md:w-[70%] md:h-[70%]"
        src={NotFoundImg}
        alt="page not found!"
      />
      <div
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-full font-medium cursor-pointer bg-rose-500 text-white hover:text-rose-500 hover:bg-white border active:scale-95 border-rose-500 transition-all duration-300 ease-in-out"
      >
        Return to Home
      </div>
    </div>
  );
};

export default NotFound;
