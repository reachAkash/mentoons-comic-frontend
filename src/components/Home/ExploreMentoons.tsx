import React from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../common/Heading";
import { FaEye } from "react-icons/fa";

type CardData = {
  imgUrl: string;
  title: string;
  description: string;
  link: string;
};

const ExploreMentoons: React.FC = () => {
  const navigate = useNavigate();

  const cardsData: CardData[] = [
    {
      imgUrl: "/create.jpg",
      title: "Comics",
      description: "Quick and easy sign-up to access all features.",
      link: "/mentoons-comics",
    },
    {
      imgUrl: "/plan.jpg",
      title: "Podcasts",
      description: "Select the subscription that best fits your needs.",
      link: "/mentoons-podcast",
    },
    {
      imgUrl: "/explore.jpg",
      title: "Workshops",
      description: "Start exploring all the content and activities available.",
      link: "/workshops",
    },
  ];

  const handleImageClick = (link: string) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="h-full w-full py-16 bg-light-blue relative">
      <Heading heading="Explore Mentoons" />
      <div className="h-[6rem] w-[6rem] absolute top-[2rem] left-[0rem] lg:h-[10rem] lg:w-[10rem] lg:top-[4rem] lg:left-[15rem]">
        <img src="/handprints.png" alt="icons" className="h-full w-full" />
      </div>
      <div className="h-[6rem] w-[6rem] absolute top-[2rem] right-[0rem] lg:h-[10rem] lg:w-[10rem] lg:top-[4rem] lg:right-[15rem]">
        <img src="/handprints2.png" alt="icons" className="h-full w-full" />
      </div>
      <div className="w-4/5 m-auto">
        {cardsData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0
                ? "lg:flex-row "
                : "lg:flex-row-reverse lg:text-right"
            } mb-8`}
          >
            <div
              className="w-[15rem] h-[15rem] rounded-full overflow-hidden border-4 border-white relative cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backgroundImage: `url(${item.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "6px 6px 0px rgba(103, 102, 102, 0.2)",
              }}
              onClick={() => handleImageClick(item.link)}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 h-[4rem] flex items-center justify-center transition-all duration-300 ease-in-out">
                <span className="text-white text-lg font-bold flex items-center gap-3">
                  <FaEye />
                  View {item.title}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:pl-8 lg:w-1/2 p-4 lg:p-8">
              <h3 className="text-4xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMentoons;
