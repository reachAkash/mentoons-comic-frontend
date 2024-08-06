import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/imgs/logo.png";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-[90vh] flex flex-col items-center justify-center space-y-4">
      <img className="w-[20rem]" src={Logo} alt="Not Found" />
      <div className="font-semibold text-4xl">Page Not Found!</div>
      <button
        onClick={() => navigate("/")}
        className="bg-primary px-4 py-2 rounded-full border border-primary text-white hover:bg-white hover:text-primary transition-all ease-in-out duration-300"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
