import LogoMini from "@/assets/imgs/logo mini.png";
import Logo from "@/assets/imgs/logo.png";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import Sidebar, { MiniSidebar } from "./Sidebar";
import { date } from "@/constant/websiteConstants";

const Navbar: React.FC = () => {
  const [showShadow, setShowShadow] = useState<boolean>(false);
  const cartItems = useSelector((store: RootState) => store.comics.cart);

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
    <>
      {/* for desktop & big devices */}
      <div
        className={`sticky top-0 ${
          showShadow && "shadow-xl"
        } hidden lg:flex items-center justify-between text-black bg-primary  transition-all duration-1000 ease-in-out z-[9999] px-5`}
      >
        <ul className="flex items-center justify-between">
          {/* <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer">
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
        </li> */}
          <DropdownMenu />
        </ul>
        <Link
          to="/"
          className="absolute hover:bg-red-500 rounded-b-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] pb-4 pt-8 px-10 bg-primary"
        >
          <img className="w-32 cursor-pointer" src={Logo} />
        </Link>
        <div className="w-[40%] pl-4 flex items-center justify-between ">
          <ul className="w-[60%] flex items-center justify-between">
            <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
              <Link to="/mentoons-podcast">Podcast</Link>
            </li>
            <li className="text-white hover:bg-red-500 hover:text-white h-full py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
              <Link to="/" className="whitespace-nowrap ">
                Mentoons Store
              </Link>
            </li>
            <li className="text-white flex items-center py-6 px-3 transition-all ease-in-out duration-300 cursor-pointer rounded-sm">
              <span className="bg-white text-primary rounded-full py-1 px-3 text-sm font-semibold shadow-md whitespace-nowrap">
                {date}
              </span>
            </li>
          </ul>
          <div className="hidden 2xl:flex items-center justify-between gap-3 bg-white rounded-full py-3 px-6">
            <Link to="/wishlist">
              <FaBookmark className="text-lg cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out" />
            </Link>
            <Link to="/cart">
              <div className="relative group">
                <IoCart className="text-2xl cursor-pointer text-gray-500 group-hover:text-black transition-all duration-300 ease-in-out" />
                <span className="absolute top-[-0.5rem] left-[-4px] text-white text-sm bg-red-500 rounded-full px-[6px]">
                  {cartItems?.length}
                </span>
              </div>
            </Link>
          </div>
          <Sidebar className="hidden md:block" />
          <MiniSidebar className="block md:hidden" />
        </div>
      </div>

      {/* for small devices */}
      <div
        className={`sticky top-0 ${
          showShadow && "shadow"
        } container flex lg:hidden items-center justify-between text-black bg-primary py-6 transition-all duration-1000 ease-in-out z-50`}
      >
        <div className="w-[65%] lg:w-[60%] flex items-center justify-between gap-4 lg:gap-8">
          <Link to="/">
            <h2 className="text-xl font-extrabold cursor-pointer">
              <img className="w-32 cursor-pointer" src={LogoMini} />
            </h2>
          </Link>
        </div>
        <div className="w-[35%] lg:w-[40%] flex items-center justify-end gap-2 lg:gap-8">
          <MiniSidebar className="block" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
