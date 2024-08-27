import React, { useState } from "react";
import Logo from "@/assets/imgs/logo mini.png";
import GroupImg1 from "@/assets/imgs/groupImg1.jpg";
import GroupImg2 from "@/assets/imgs/groupImg2.jpg";
import GroupImg3 from "@/assets/imgs/groupImg3.jpg";
import GroupImg4 from "@/assets/imgs/groupImg4.jpg";
import { Link, useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import MapComponent from "./MapComponent";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const [showWorkshop, setshowWorkshop] = useState<boolean>(false);
  const [showInside, setShowInside] = useState<boolean>(false);
  const [showShop, setShowShop] = useState<boolean>(false);
  const comicData = [
    "Don't Fade Away",
    "Hungry For Likes not Life",
    "Choose Wisely",
  ];
  const companyImg = [
    "/activeListeners.png",
    "/toonland.png",
    "/storyClub.png",
    "/cxoBranding.png",
    "propellingStories.png",
  ];
  const contactIcons = [
    { icon: ImLinkedin, color: "text-blue-700" },
    { icon: FaFacebookSquare, color: "text-blue-500" },
    { icon: RiTwitterXLine, color: "text-black" },
    { icon: AiFillInstagram, color: "text-rose-500" },
    { icon: IoLogoYoutube, color: "text-red-600" },
    { icon: IoLogoWhatsapp, color: "text-green-500" },
  ];

  return (
    <div className="text-white text-center">
      <img className="hidden md:block" src="/FooterBg.png" alt="footer image" />
      <img
        className="block md:hidden"
        src="/footerMobileVersion.png"
        alt="footer image"
      />
      <div className="container bg-[#FF7D00] w-full h-fit space-y-2 lg:space-y-5">
        {/* top section */}
        <div className="flex flex-wrap items-center justify-between pt-4 lg:pt-0 space-y-4 lg:space-y-0">
          <div>
            <Link to="/">
              <img className="w-60" src={Logo} alt="mentoons logo" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/">
              <div className="px-4 cursor-pointer border-r-2 border-white font-semibold">
                Home
              </div>
            </Link>
            <Link to="/mentoons-comics">
              <div className="px-4 cursor-pointer border-r-2 border-white font-semibold">
                Comics
              </div>
            </Link>
            <Link to="/mentoons-podcast">
              {" "}
              <div className="px-4 cursor-pointer border-r-2 border-white font-semibold">
                Podcast
              </div>
            </Link>
            <Link to="/mentoons-workshops">
              <div className="px-4 cursor-pointer font-semibold">Workshop</div>
            </Link>
          </div>
          <div className="w-full lg:w-fit bg-[#662d0a94] uppercase font-semibold hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full">
            Contact Us
          </div>
        </div>
        {/* middle section */}
        <div className="flex flex-wrap justify-between space-y-2">
          {/* first div */}
          <div className="space-y-2 w-full md:w-fit">
            <div className="w-full">
              <div
                onClick={() => setShowEvents((prev) => !prev)}
                className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
              >
                Upcoming Events
              </div>
              {/* children div */}
              <div
                className={`transition-all ease-in-out duration-500 overflow-hidden ${
                  showEvents
                    ? "max-h-0 opacity-0"
                    : "max-h-[500px] opacity-100 mt-2 space-y-2"
                }`}
                style={{
                  visibility: showEvents ? "hidden" : "visible",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-base md:text-lg font-semibold bg-white  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer py-2">
                    <img className="w-16" src="/Family camp.png" alt="" />
                  </div>
                  <div>
                    <div className="">15 September, 2024</div>
                    <div className="text-base md:text-lg font-semibold tracking-wide">
                      Introducing Mentoons
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className=" text-base md:text-lg font-semibold bg-white  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer py-2">
                    <img className="w-16" src="/Family camp.png" alt="" />
                  </div>
                  <div>
                    <div>30 September, 2024</div>
                    <div className="text-lg font-bold tracking-wide">
                      Introducing Active Listeners
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full">
              Upcoming Meet
            </div>
            <div className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full">
              Upcoming Webinars
            </div>
          </div>
          {/* second div */}
          <div className="space-y-2 w-full md:w-fit">
            <div className="w-full">
              <div
                onClick={() => navigate("/faq")}
                className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
              >
                FAQ's
              </div>
            </div>
            <div className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full">
              Free Download
            </div>
            <div
              onClick={() => setshowWorkshop((prev) => !prev)}
              className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
            >
              Workshops
            </div>
            {/* children div */}
            <div
              className={`transition-all ease-in-out duration-500 flex items-center overflow-hidden ${
                showWorkshop
                  ? "max-h-0 opacity-0"
                  : "max-h-[500px] opacity-100 mt-2 space-x-4"
              }`}
              style={{
                visibility: showWorkshop ? "hidden" : "visible",
              }}
            >
              <div className="group cursor-pointer">
                <img
                  onClick={() => navigate("/mentoons-workshops?workshop=buddy")}
                  className="w-20 rounded-full"
                  src="/Buddy camp.png"
                  alt="comic image"
                />
                <div className="group-hover:text-green-300 transition-all ease-in-out duration-300">
                  Buddy Camp
                </div>
              </div>
              <div className="group cursor-pointer">
                <img
                  onClick={() => navigate("/mentoons-workshops?workshop=teen")}
                  className="w-20 rounded-full"
                  src="/Teen camp .png"
                  alt="comic image"
                />
                <div className="group-hover:text-green-300 transition-all ease-in-out duration-300">
                  Teen Camp
                </div>
              </div>
              <div className="group cursor-pointer">
                <img
                  onClick={() =>
                    navigate("/mentoons-workshops?workshop=family")
                  }
                  className="w-20 rounded-full"
                  src="/Family camp.png"
                  alt="comic image"
                />
                <div className="group-hover:text-green-300 transition-all ease-in-out duration-300">
                  Family Camp
                </div>
              </div>
            </div>
          </div>
          {/* third div */}
          <div className="space-y-2 w-full md:w-fit">
            <div className="">
              <Link to="#insideMentoons">
                <div
                  onClick={() => {
                    setShowInside((prev) => !prev);
                  }}
                  className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white active:bg-gray-100 transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
                >
                  Inside Mentoons
                </div>
              </Link>
              {/* children div */}
              <div
                className={`transition-all ease-in-out duration-500 flex items-center gap-1 overflow-hidden ${
                  showInside
                    ? "max-h-0 opacity-0"
                    : "max-h-[500px] opacity-100 mt-2"
                }`}
                style={{
                  visibility: showInside ? "hidden" : "visible",
                }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-fit rounded-full flex items-center border-4 border-white hover:border-green-300 gap-2">
                      <img
                        className="w-12 rounded-full"
                        src={GroupImg1}
                        alt="group image 1"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] outline-none rounded-lg shadow-md bg-white shadow-white sm:max-w-[425px] md:max-w-[600px]">
                    <div className="flex flex-col items-center justify-center px-4 py-4">
                      <img
                        className="w-full rounded-md md:w-[80%]"
                        src={GroupImg1}
                        alt="group image 1"
                      />
                      <div className="font-semibold text-black text-2xl">
                        Independence Day
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-fit rounded-full flex items-center border-4 border-white hover:border-green-300 gap-2">
                      <img
                        className="w-12 rounded-full"
                        src={GroupImg2}
                        alt="group image 1"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] outline-none rounded-lg shadow-md bg-white shadow-white sm:max-w-[425px] md:max-w-[600px]">
                    <div className="flex flex-col items-center justify-center px-4 py-4">
                      <img
                        className="w-full rounded-md md:w-[80%]"
                        src={GroupImg2}
                        alt="group image 1"
                      />
                      <div className="font-semibold text-black text-2xl">
                        Independence Day
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-fit rounded-full flex items-center border-4 border-white hover:border-green-300 gap-2">
                      <img
                        className="w-12 rounded-full"
                        src={GroupImg3}
                        alt="group image 1"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] outline-none rounded-lg shadow-md bg-white shadow-white sm:max-w-[425px] md:max-w-[600px]">
                    <div className="flex flex-col items-center justify-center px-4 py-4">
                      <img
                        className="w-full rounded-md md:w-[80%]"
                        src={GroupImg3}
                        alt="group image 1"
                      />
                      <div className="font-semibold text-black text-2xl">
                        Independence Day
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="w-fit rounded-full flex items-center border-4 border-white hover:border-green-300 gap-2">
                      <img
                        className="w-12 rounded-full"
                        src={GroupImg4}
                        alt="group image 1"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] outline-none rounded-lg shadow-md bg-white shadow-white sm:max-w-[425px] md:max-w-[600px]">
                    <div className="flex flex-col items-center justify-center px-4 py-4">
                      <img
                        className="w-full rounded-md md:w-[80%]"
                        src={GroupImg4}
                        alt="group image 1"
                      />
                      <div className="font-semibold text-black text-2xl">
                        Independence Day
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div
              onClick={() => setShowShop((prev) => !prev)}
              className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
            >
              Shop
            </div>
            <div
              className={`transition-all ease-in-out duration-500 overflow-hidden ${
                showShop
                  ? "max-h-0 opacity-0"
                  : "max-h-[500px] opacity-100 mt-2"
              }`}
              style={{
                visibility: showShop ? "hidden" : "visible",
              }}
            >
              {comicData?.map((item: string) => {
                return (
                  <div
                    onClick={() =>
                      navigate("/mentoons-comics/audio-comics/" + item)
                    }
                    className="font-semibold cursor-pointer text-lg hover:text-green-300 transition-all ease-in-out duration-300"
                  >
                    - {item}
                  </div>
                );
              })}
            </div>
          </div>
          {/* fourth div */}
          <div className="space-y-2 w-full md:w-fit">
            <MapComponent />
            <div className="flex items-center justify-start tracking-wide font-medium text-lg">
              <MdLocationOn />
              Domlur, Bangalore
            </div>
            <div className="flex items-center justify-center md:justify-between gap-4 md:gap-1">
              {contactIcons?.map((item) => {
                return (
                  <div className="bg-white p-2 rounded-full">
                    <item.icon className={`text-xl ${item.color}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="flex flex-wrap items-center justify-between pb-10">
          <Link to="/privacy-policy">
            <div className="font-semibold text-base md:text-lg tracking-wide">
              Privacy policy , Terms & conditions
            </div>
          </Link>
          <div>
            <img className="w-28" src="/flowers.png" alt="flower image" />
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full py-2 px-4">
            {companyImg?.map((item, idx) => {
              return (
                <div className="overflow-hidden">
                  <img
                    className={`${
                      idx == 3 ? "w-16" : "w-20"
                    } cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out`}
                    src={item}
                    alt="company image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
