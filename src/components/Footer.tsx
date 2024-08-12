import React from "react";
import Logo from "@/assets/imgs/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Comic } from "@/redux/comicSlice";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const quickLinks = ["Home page", "About Us", "Our Team", "Blog", "Contact"];
  const socialLinks = [
    FaFacebookSquare,
    RiInstagramFill,
    FaTwitter,
    FaYoutube,
    FaTiktok,
  ];

  const comicsData = useSelector((store: RootState) => store.comics.comics);
  const PopularComics = comicsData.slice(0, 5);
  const NewReleasesComics = comicsData.slice(4, 9);

  return (
    <div className="container bg-black space-y-4 py-6">
      <div className="grid grid-cols-2 place-items-center gap-8 md:gap-0 md:flex items-center justify-between text-white border-b border-gray-400 py-10">
        <div className="flex flex-col">
          {/* <div className="text-3xl font-extrabold cursor-pointer">
            MENTOONS COMICS<span className="text-primary">.</span>
          </div> */}
          <div>
            <img className="w-[10rem]" src={Logo} alt="Footer icon" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl underline">Quick Links</h2>
          <div className="text-center space-y-1">
            {quickLinks?.map((item: string) => {
              return (
                <div
                  key={uuidv4()}
                  className="hover:text-gray-200 cursor-pointer relative hover:scale-[0.98] transition-all duration-300 ease-in-out"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-2xl underline">Popular Comics</h2>
          <div className="text-center space-y-1">
            {PopularComics?.map((item: Comic) => {
              return (
                <div
                  key={uuidv4()}
                  className="hover:text-gray-200 cursor-pointer relative hover:scale-[0.98] transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-2xl underline">Latest Comics</h2>
          <div className="text-center space-y-1">
            {NewReleasesComics?.map((item: Comic) => {
              return (
                <div
                  key={uuidv4()}
                  className="hover:text-gray-200 cursor-pointer relative hover:scale-[0.98] transition-all duration-300 ease-in-out"
                >
                  <Link to={`/audio-comic?comic=${item.name}`}>
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-2xl underline uppercase">
            Connect Us
          </h2>
          <div className="flex  items-center justify-center gap-3 text-center space-y-1">
            {socialLinks?.map((Item: any) => {
              return <Item key={uuidv4()} className="text-xl" />;
            })}
          </div>
        </div>
      </div>
      <div className="text-center text-white pb-16">
        &copy; Mentoons 2024. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
