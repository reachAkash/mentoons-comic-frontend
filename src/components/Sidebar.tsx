import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import React from "react";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import Search from "./Search";

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className={`${className} text-black text-3xl`} />
      </SheetTrigger>
      <SheetContent className="bg-[#F0EBE5] z-50">
        <Search />
      </SheetContent>
    </Sheet>
  );
};

export const MiniSidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu className={`${className} text-black text-3xl`} />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="bg-[#F0EBE5] z-50 text-center space-y-4 py-[4rem]"
      >
        <ul className=" w-full space-y-3">
          <li className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out">
            Home
          </li>
          <li className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out">
            About
          </li>
          <li className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out">
            Comics
          </li>
          <li className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out">
            Blog
          </li>
          <li className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out">
            Contact
          </li>
        </ul>
        <div className="w-full flex items-center justify-center gap-4">
          <SheetClose asChild>
            <Link to="/wishlist">
              <FaBookmark className="text-lg cursor-pointer text-gray-500 hover:text-black transition-all duration-300 ease-in-out" />
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/cart">
              <div className="relative group">
                <IoCart className="text-2xl cursor-pointer text-gray-500 group-hover:text-black transition-all duration-300 ease-in-out" />
                <span className="absolute top-[-0.5rem] left-[-4px] text-white text-sm bg-primary rounded-full px-[6px]">
                  2
                </span>
              </div>
            </Link>
          </SheetClose>
          <CiSearch className="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
