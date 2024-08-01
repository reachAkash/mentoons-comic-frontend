import React from "react";
import { useEffect, useState } from "react";
import Sidebar, { MiniSidebar } from "./Sidebar";
import { FaBookmark } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "@/assets/imgs/logo.png";

const Navbar: React.FC = () => {
  const [showShadow, setShowShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 ${
        showShadow && "shadow"
      } container flex items-center justify-between text-black bg-primary  transition-all duration-1000 ease-in-out z-50`}
    >
      <ul className="w-[35%] flex items-center justify-between">
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Comics
        </li>
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Latest
        </li>
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Audio Comics
        </li>
        <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
          Workshops
        </li>
      </ul>
      <div className="absolute hover:bg-red-500 rounded-b-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] pb-4 pt-8 px-10 bg-primary">
        <img className="w-32 cursor-pointer" src={Logo} />
      </div>
      <div className="w-[40%] pl-8 flex items-center justify-between">
        <ul className="w-[35%] flex items-center justify-between">
          <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
            About
          </li>
          <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="hidden custom:flex items-center justify-between gap-3 bg-white rounded-full py-3 px-6">
          <Link to="/wishlist">
            <FaBookmark className="text-lg cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out" />
          </Link>
          <Link to="/cart">
            <div className="relative group">
              <IoCart className="text-2xl cursor-pointer text-gray-500 group-hover:text-black transition-all duration-300 ease-in-out" />
              <span className="absolute top-[-0.5rem] left-[-4px] text-white text-sm bg-red-500 rounded-full px-[6px]">
                2
              </span>
            </div>
          </Link>
        </div>
        <Sidebar className="hidden md:block" />
        <MiniSidebar className="block md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
