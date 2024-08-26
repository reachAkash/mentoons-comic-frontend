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
            imgUrl: '/Comics_.jpg',
            title: 'Comics',
            description: 'Dive into a world of vibrant stories and characters. Create, share, and explore unique comics.',
            link: '/mentoons-comics',
        },
        {
            imgUrl: '/Podcast_.jpg',
            title: 'Podcasts',
            description: 'Tune into engaging conversations and stories. Discover a variety of podcasts for every interest.',
            link: '/mentoons-podcast',
        },
        {
            imgUrl: '/Workshops_.jpg',
            title: 'Workshops',
            description: 'Enhance your skills with interactive workshops. Learn from experts and grow your abilities.',
            link: '/mentoons-workshops',
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
            <div className="w-4/5 mx-auto flex flex-col items-center">
                {cardsData.map((item, index) => (
                    <Fade
                        key={index}
                        duration={400}
                        delay={index * 100}
                        direction="up"
                    >
                        <div
                            className={`flex flex-col items-center text-center lg:flex-row ${index % 2 === 0 ? 'lg:text-left' : 'lg:flex-row-reverse lg:text-right'} mb-8`}
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
                                <h3 className="text-4xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-white">{item.description}</p>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default ExploreMentoons;
