import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import SearchSidebar from "../components/SearchSidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface SidebarProps {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <RxHamburgerMenu className={`${className} text-white text-3xl`} />
      </SheetTrigger>
      <SheetContent className="bg-[#F0EBE5] z-[99999] overflow-y-scroll h-screen noScrollbar">
        <SearchSidebar />
      </SheetContent>
    </Sheet>
  );
};

export const MiniSidebar: React.FC<SidebarProps> = ({ className }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((store: RootState) => store.comics.cart);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <RxHamburgerMenu
          className={`${className} text-white text-3xl cursor-pointer`}
        />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="bg-[#F0EBE5] z-50 text-center space-y-4 py-[4rem]"
      >
        <ul className=" w-full py-2 space-y-3">
          <SheetClose asChild>
            <li
              onClick={() => navigate("/mentoons-comics")}
              className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out"
            >
              Comics
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li
              onClick={() => navigate("/comics-list?comic=Audio Comics")}
              className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out"
            >
              Audio Comics
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li
              onClick={() => navigate("/mentoons-podcast")}
              className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out"
            >
              Podcasts
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li
              onClick={() => navigate("/workshops")}
              className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out"
            >
              Workshops
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li
              onClick={() => navigate("/mentoons-store")}
              className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out"
            >
              Mentoons Store
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li
              onClick={() => navigate("/contests")}
              className="hover:text-red-500 uppercase cursor-pointer font-semibold text-gray-500 transition-all duration-300 ease-in-out"
            >
              Contests
            </li>
          </SheetClose>
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
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link to="/search">
              <CiSearch className="text-2xl cursor-pointer" />
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
