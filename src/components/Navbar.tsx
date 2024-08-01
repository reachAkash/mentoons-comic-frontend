import React from "react";
import { useEffect, useState } from "react";
import Sidebar, { MiniSidebar } from "./Sidebar";
import { FaBookmark } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

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
      } container flex items-center justify-between text-black bg-primary py-4 transition-all duration-1000 ease-in-out z-50`}
    >
      <div className="w-[65%] lg:w-[60%] flex items-center justify-between gap-4 lg:gap-8">
        <Link to="/">
          <h2 className="text-3xl font-extrabold text-white cursor-pointer">
            MENTOONS COMICS<span className="text-red-500">.</span>
          </h2>
        </Link>
        <ul className="hidden md:flex w-full items-center justify-evenly gap-2 text-lg text-white">
          <Link to="#home">
            <li className="hover:text-red-500 uppercase cursor-pointer font-semibold transition-all duration-300 ease-in-out">
              Home
            </li>
          </Link>
          <Link to="#about">
            <li className="hover:text-red-500 uppercase cursor-pointer font-semibold transition-all duration-300 ease-in-out">
              About
            </li>
          </Link>
          <Link to="#new-comics">
            <li className="hover:text-red-500 uppercase cursor-pointer font-semibold transition-all duration-300 ease-in-out">
              Comics
            </li>
          </Link>
          <Link to="#blog">
            <li className="hover:text-red-500 uppercase cursor-pointer font-semibold transition-all duration-300 ease-in-out">
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-red-500 uppercase cursor-pointer font-semibold transition-all duration-300 ease-in-out">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-[35%] lg:w-[40%] flex items-center justify-end gap-2 lg:gap-8">
        <div className="hidden custom:flex items-center justify-between gap-3 bg-white rounded-full pl-6">
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
          <button className="w-full text-base lg:text-lg py-3 px-6 font-medium rounded-full bg-[#333333] text-white hover:bg-red-500 transition-all duration-300 ease-in-out">
            Free Comics
          </button>
        </div>
        <Sidebar className="hidden md:block" />
        <MiniSidebar className="block md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
