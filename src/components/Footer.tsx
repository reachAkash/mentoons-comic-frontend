import React from "react";
import FooterIcon from "@/assets/imgs/footer-icon.png";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

const Footer: React.FC = () => {
  const quickLinks = ["Home page", "About Us", "Our Team", "Blog", "Contact"];
  const socialLinks = [
    FaFacebookSquare,
    RiInstagramFill,
    FaTwitter,
    FaYoutube,
    FaTiktok,
  ];

  return (
    <div className="container hidden bg-black space-y-4 py-6">
      <div className="flex items-center justify-between text-white border-b border-gray-400 py-10">
        <div className="flex flex-col">
          <div className="text-3xl font-extrabold cursor-pointer">
            MENTOONS COMICS<span className="text-primary">.</span>
          </div>
          <div>
            <img src={FooterIcon} alt="Footer icon" />
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
        &copy; Made by Akash Gupta. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
