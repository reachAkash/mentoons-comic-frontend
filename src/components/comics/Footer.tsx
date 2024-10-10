import GroupImg1 from "@/assets/imgs/groupImg1.jpg";
import GroupImg2 from "@/assets/imgs/groupImg2.jpg";
import GroupImg3 from "@/assets/imgs/groupImg3.jpg";
import GroupImg4 from "@/assets/imgs/groupImg4.jpg";
import Logo from "@/assets/imgs/logo mini.png";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoLogoWhatsapp, IoLogoYoutube, IoMdClose } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import MapComponent from "./MapComponent";

interface ImagePopupProps {
  isOpen: boolean;
  imageSrc: string;
  altText: string;
  onClose: () => void;
}

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
    { image: "/activeListeners.png", url: "https://www.activelisteners.in/" },
    { image: "/toonland.png", url: "https://toonland.in/" },
    { image: "/storyClub.png", url: "https://storyclub.in/" },
    { image: "/cxoBranding.png", url: "https://cxobranding.com/" },
    {
      image: "propellingStories.png",
      url: "http://www.propellingstories.com/",
    },
  ];
  const contactIcons = [
    { icon: ImLinkedin, color: "text-blue-700" },
    { icon: FaFacebookSquare, color: "text-blue-500" },
    { icon: RiTwitterXLine, color: "text-black" },
    { icon: AiFillInstagram, color: "text-rose-500" },
    { icon: IoLogoYoutube, color: "text-red-600" },
    { icon: IoLogoWhatsapp, color: "text-green-500" },
  ];

  const images = [
    { src: GroupImg1, alt: "Independence Day, 2023" },
    { src: GroupImg2, alt: "Independence Day, 2023" },
    { src: GroupImg3, alt: "Fun Moments, 2023" },
    { src: GroupImg4, alt: "Fun Moments, 2023" },
  ];

  const scrollToHomeSection = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("home-heroSection");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToHomeSection: true } });
    }
  };

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openPopup = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full pt-12 md:pt-0 text-white text-center">
      <img
        className="hidden md:block "
        src="/FooterBg.png"
        alt="footer image"
      />
      <img
        className="block md:hidden"
        src="/footerMobileVersion.png"
        alt="footer image"
      />
      {/* subscribe to newsletter form */}
      <form className="space-y-4 py-4">
        <h3 className="text-black text-4xl font-medium">
          Subscribe to our Newsletter
        </h3>
        <div className="space-x-4">
          <input
            className="text-black bg-gray-100 placeholder:text-gray-300 rounded-md outline-none px-6 py-2"
            placeholder="Enter your email"
          />
          <button
            className="text-white bg-primary hover:bg-primary/95 rounded-full px-6 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="container bg-[#FF7D00] w-full h-fit space-y-2 lg:space-y-5">
        {/* top section */}
        <div className="flex flex-wrap items-center justify-between pt-4 lg:pt-0 space-y-4 lg:space-y-0">
          <div>
            <Link to="/">
              <img className="w-60" src={Logo} alt="mentoons logo" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link to="/" onClick={scrollToHomeSection}>
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
                Podcasts
              </div>
            </Link>
            <Link to="/mentoons-workshops">
              <div className="px-4 cursor-pointer font-semibold">Workshops</div>
            </Link>
          </div>
          <div className="w-full lg:w-fit bg-[#662d0a94] uppercase font-semibold hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full">
            Contact Us
          </div>
        </div>
        {/* middle section */}
        <div className="flex flex-wrap justify-between space-y-2">
          {/* first div */}
          <div className="hidden space-y-2 w-full md:w-fit">
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
              Upcoming Meets
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
            <div
              onClick={() => navigate("/mentoons-comics/free-download")}
              className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
            >
              Free Downloads
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
              <div
                onClick={() => setShowInside((prev) => !prev)}
                className="w-full uppercase text-base md:text-lg font-semibold bg-[#662d0a94]  hover:text-[#f87218ea] hover:bg-white active:bg-gray-100 transition-all ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-full"
              >
                Inside Mentoons
              </div>
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
                <div className="flex flex-wrap gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => openPopup(image)}
                      className="w-fit rounded-full flex items-center border-4 border-white hover:border-green-300 cursor-pointer"
                    >
                      <img
                        className="w-12 rounded-full"
                        src={image.src}
                        alt={image.alt}
                      />
                    </div>
                  ))}

                  <ImagePopup
                    isOpen={selectedImage !== null}
                    imageSrc={selectedImage?.src || ""}
                    altText={selectedImage?.alt || ""}
                    onClose={closePopup}
                  />
                </div>
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
                <Link to={item?.url} className="overflow-hidden">
                  <img
                    className={`${
                      idx == 3 ? "w-16" : "w-20"
                    } cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out`}
                    src={item?.image}
                    alt="company image"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ImagePopup: React.FC<ImagePopupProps> = ({
  isOpen,
  imageSrc,
  altText,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-[425px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black cursor-pointer text-xl hover:text-red-400 active:scale-50 transition-all ease-in-out duration-300"
        >
          <IoMdClose />
        </button>
        <img className="w-full mt-4 rounded-md" src={imageSrc} alt={altText} />
        <div className="font-semibold text-black text-2xl mt-4">{altText}</div>
      </div>
    </div>
  );
};

export default Footer;
