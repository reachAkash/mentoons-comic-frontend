import React, { useRef, useState } from "react";
import WorkshopImg1 from "@/assets/imgs/Kids_camp 2.jpg";
import WorkshopImg2 from "@/assets/imgs/Teen_camp 2.jpg";
import WorkshopImg3 from "@/assets/imgs/Family_camp 2.jpg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ComicWorkshop: React.FC = () => {
  // const [playVideo, setPlayVideo] = useState<{ index: number; play: boolean }>({
  //   index: 0,
  //   play: false,
  // });

  const video1Ref = useRef<HTMLVideoElement>(null);

  const [activeWorkshop, setActiveComic] = useState<string>("Key Features");
  const dataToDisplay =
    activeWorkshop === "Key Features"
      ? "features"
      : activeWorkshop === "What to Expect"
      ? "expectations"
      : "benefits";

  const workshopGenres: string[] = [
    "Age 6-12",
    "Age 13-19",
    "Above 20+ / Parents",
  ];

  // const handlePlayRef = () => {
  //   if (video1Ref.current) {
  //     video1Ref.current.play();
  //   }
  // };

  // const handleStopRef = () => {
  //   if (video1Ref.current) {
  //     video1Ref.current.pause();
  //   }
  // };

  const workshopData = [
    {
      name: "Kids Camp",
      img: WorkshopImg1,
      desc: "Buddy Camp is a fun and educational workshop designed to help children ages 6-12 build lasting friendships and develop important social skills.",
      video:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Kids+Camp_01.mp4",
      features: [
        "Engaging activities that promote friendship and teamwork",
        "Age-appropriate lessons on moral values and ethical decision-making",
        "Practical exercises to improve conversation skills",
        "Safe and supportive environment for children to practice social interactions",
        "Experienced facilitators trained in child development",
      ],
      expectations: [
        "Friendship-building games and exercises",
        "Discussions on moral values and their importance in daily life",
        "Role-playing scenarios to practice conversation starters",
        "Group projects that encourage collaboration and communication",
        "Reflection sessions to reinforce learned concepts",
      ],
      benefits: [
        "Increased self-confidence in social situations",
        "Better understanding of moral values and their application",
        "Improved ability to initiate and maintain friendships",
        "Enhanced communication skills for academic and personal success",
        "Positive peer interactions in a structured setting",
      ],
    },
    {
      name: "Teen Camp",
      img: WorkshopImg2,
      desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
      video:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Teen+Camp_01.mp4",
      features: [
        "Identity Exploration: Guides teens in understanding and developing their personal identity",
        "Hormonal Changes: Educates on physical and emotional changes during puberty",
        "Substance De-Addiction: Provides information and strategies to avoid or overcome substance use",
        "Scrolling De-Addiction: Teaches healthy digital habits and reducing screen time",
        "Age-Appropriate Content: Tailored for teenagers between 13-19 years old",
        "Expert-Led Sessions: Conducted by qualified professionals in adolescent development",
      ],
      expectations: [
        "Interactive group discussions",
        "Informative presentations",
        "Practical exercises and activities",
        "Safe and supportive environment",
        "Take-home resources for continued learning",
      ],
      benefits: [
        "Gain confidence in their changing bodies and emotions",
        "Learn to make informed decisions about substance use",
        "Develop healthier relationships with technology",
        "Improve communication skills with peers and adults",
        "Build a stronger sense of self",
      ],
    },
    {
      name: "Family Camp",
      img: WorkshopImg3,
      desc: "Help your teenager navigate the challenges of adolescence De-Addiction, Scrolling De-Addiction & Hormonal Changes with our comprehensive Teen Camp workshop.",
      video:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/Workshops/videos/Family+Camp_01.mp4",
      features: [
        "Engaging activities that promote friendship and teamwork",
        "Age-appropriate lessons on moral values and ethical decision-making",
        "Practical exercises to improve conversation skills",
        "Safe and supportive environment for children to practice social interactions",
        "Experienced facilitators trained in child development",
      ],
      expectations: [
        "Friendship-building games and exercises",
        "Discussions on moral values and their importance in daily life",
        "Role-playing scenarios to practice conversation starters",
        "Group projects that encourage collaboration and communication",
        "Reflection sessions to reinforce learned concepts",
      ],
      benefits: [
        "Increased self-confidence in social situations",
        "Better understanding of moral values and their application",
        "Improved ability to initiate and maintain friendships",
        "Enhanced communication skills for academic and personal success",
        "Positive peer interactions in a structured setting",
      ],
    },
  ];

  // const handlePlayVideo = (idx: number) => {
  //   setPlayVideo({ play: true, index: idx });
  // };

  const handleWorkshop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.innerText == activeWorkshop) return;
    setActiveComic(e.currentTarget.innerText);
  };

  return (
    <div className="container bg-[#00B0A5] flex flex-col items-center justify-start py-20 pb-28 space-y-10">
      <motion.div
        initial={{ y: 50, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-5xl tracking-wide text-white text-center"
      >
        Workshops in Mentoons
      </motion.div>
      <div className="flex items-center justify-center gap-2 lg:gap-8  w-full">
        {workshopGenres?.map((item: string) => {
          return (
            <motion.button
              initial={{ y: 20, opacity: 0.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-[#007770] text-white hover:text-[#007770] px-1 md:px-3 py-1 rounded-full font-semibold hover:bg-white transition-all ease-in-out duration-300"
            >
              {item}
            </motion.button>
          );
        })}
      </div>
      <div className="w-full flex flex-col gap-10 space-y-10 md:space-y-16">
        {workshopData?.map((item, idx) => {
          return idx !== 1 ? (
            <div
              className={`w-full flex ${
                idx % 2 != 0 && "flex-row-reverse"
              } flex-col md:flex-row items-center justify-start gap-10`}
            >
              <div className={`w-full md:w-[50%]`}>
                <video
                  ref={video1Ref}
                  className="rounded-lg shadow-2xl border-8 border-white bg-transparent w-full"
                  src={item.video}
                  loop
                  controls
                  autoPlay={idx == 0}
                  controlsList="nodownload"
                ></video>
              </div>
              <div className="w-full md:w-[50%]">
                <div className="w-full space-y-4">
                  <div className="font-semibold text-4xl leading-snug tracking-wide">
                    {item.name}
                  </div>
                  <div className="font-base text-lg text-green-800">
                    {item.desc}
                  </div>
                  <div className="w-full flex items-center justify-between gap-1 text-black py-2 px-2 bg-gray-100 shadow-sm rounded-md  ">
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 px-2 md:px-8 py-2 ${
                          activeWorkshop === "Key Features" &&
                          "bg-green-400 text-white"
                        }  rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      Key Features
                    </div>
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 ${
                          activeWorkshop === "What to Expect" &&
                          "bg-green-400 text-white"
                        } px-2 md:px-8 py-2 rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      What to Expect
                    </div>
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 ${
                          activeWorkshop === "Benefits" &&
                          "bg-green-400 text-white"
                        } px-2 md:px-8 py-2 rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      Benefits
                    </div>
                  </div>
                  <ul className="bg-white shadow-lg p-4 rounded-md space-y-2">
                    {item[dataToDisplay]?.map((item, index) => {
                      return (
                        <li>
                          <span className="font-bold text-lg">
                            <span className="text-[darkred]">{index + 1}.</span>{" "}
                            {item?.split(" ").slice(0, 2).join(" ")}{" "}
                          </span>
                          {item.split(" ").slice(2).join(" ")}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`w-full flex flex-col md:flex-row items-center justify-start gap-10`}
            >
              <div className="hidden md:flex flex-col w-full md:w-[50%] space-y-4">
                <div className="w-full space-y-4">
                  <div className="font-semibold text-4xl leading-snug tracking-wide">
                    {item.name}
                  </div>
                  <div className="font-base text-lg text-green-800">
                    {item.desc}
                  </div>
                  <div className="w-full flex items-center justify-between gap-1 text-black py-2 px-2 bg-gray-100 shadow-sm rounded-md  ">
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 px-8 py-2 ${
                          activeWorkshop === "Key Features" &&
                          "bg-green-400 text-white"
                        }  rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      Key Features
                    </div>
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 ${
                          activeWorkshop === "What to Expect" &&
                          "bg-green-400 text-white"
                        } px-8 py-2 rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      What to Expect
                    </div>
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 ${
                          activeWorkshop === "Benefits" &&
                          "bg-green-400 text-white"
                        } px-8 py-2 rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      Benefits
                    </div>
                  </div>
                  <ul className="bg-white shadow-lg p-4 rounded-md space-y-2">
                    {item[dataToDisplay]?.map((item, index) => {
                      return (
                        <li>
                          <span className="font-bold text-lg">
                            <span className="text-[darkred]">{index + 1}.</span>{" "}
                            {item?.split(" ").slice(0, 2).join(" ")}{" "}
                          </span>
                          {item.split(" ").slice(2).join(" ")}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={`hidden md:flex w-full md:w-[50%]`}>
                <video
                  className="rounded-lg border-8 border-white shadow-2xl bg-transparent w-full"
                  src={item.video}
                  loop
                  controls
                  controlsList="nodownload"
                ></video>
              </div>
              <div className={`block md:hidden w-full md:w-[40%]`}>
                <video
                  className="rounded-lg bg-transparent w-full"
                  src={item.video}
                  loop
                  controls
                  controlsList="nodownload"
                ></video>
              </div>
              <div className="block md:hidden flex-col w-full md:w-[50%] space-y-4">
                <div className="w-full space-y-4">
                  <div className="font-semibold text-4xl leading-snug tracking-wide">
                    {item.name}
                  </div>
                  <div className="font-base text-lg text-green-800">
                    {item.desc}
                  </div>
                  <div className="w-full flex items-center justify-between gap-1 text-black py-2 px-2 bg-gray-100 shadow-sm rounded-md  ">
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 px-2 md:px-8 py-2 ${
                          activeWorkshop === "Key Features" &&
                          "bg-green-400 text-white"
                        }  rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      Key Features
                    </div>
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 ${
                          activeWorkshop === "What to Expect" &&
                          "bg-green-400 text-white"
                        } px-2 md:px-8 py-2 rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      What to Expect
                    </div>
                    <div
                      onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                        handleWorkshop(e)
                      }
                      className={cn(
                        ` cursor-pointer text-gray-400 ${
                          activeWorkshop === "Benefits" &&
                          "bg-green-400 text-white"
                        } px-2 md:px-8 py-2 rounded-md transition-all ease-in-out duration-300`
                      )}
                    >
                      Benefits
                    </div>
                  </div>
                  <ul className="bg-white shadow-lg p-4 rounded-md space-y-2">
                    {item[dataToDisplay]?.map((item, index) => {
                      return (
                        <li>
                          <span className="font-bold text-lg">
                            <span className="text-[darkred]">{index + 1}.</span>{" "}
                            {item?.split(" ").slice(0, 2).join(" ")}{" "}
                          </span>
                          {item.split(" ").slice(2).join(" ")}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicWorkshop;
