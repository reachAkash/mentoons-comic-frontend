import Heading from "../common/Heading";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa6';

type CampDetails = {
  id: number;
  imgUrl: string;
  CornerImgUrl: string;
  title: string;
  description: string[];
  ageGroup: string;
  timetable: string;
};

const Workshops = () => {
  const campDetails: CampDetails[] = [
    {
      id: 1,
      imgUrl: "/Kids_camp.jpg",
      CornerImgUrl: "/Buddy camp.png",
      title: "Kids Camp",
      description: [
        "Break free from the grip of social media through our holistic laughter workshops...",
        "Gaming De-Addiction: Overcome gaming addiction with Hasyaras's therapeutic laughter sessions...",
        "Cell Phone de-addiction for teenagers: Reclaim real connections beyond screens through our engaging laughter therapy...",
      ],
      ageGroup: "6-12 years",
      timetable: "Monday - Friday, 9 AM - 12 PM",
    },
    {
      id: 2,
      imgUrl: "/Teen_camp.jpg",
      CornerImgUrl: "/Teen camp .png",
      title: "Teen Camp",
      description: [
        "Our workshops offer a multitude of benefits...",
        "Ditch the Screens: Escape from the addictive cycle of social media...",
        "Improve Communication Skills: Boost your personal and professional interactions...",
        "Enhance Creative Thinking: Unlock your creative potential...",
      ],
      ageGroup: "13-18 years",
      timetable: "Monday - Friday, 1 PM - 4 PM",
    },
    {
      id: 3,
      imgUrl: "/Family_camp.jpg",
      CornerImgUrl: "/Family camp.png",
      title: "Family Camp",
      description: [
        "Art Workshops for Reducing Negative Moods...",
        "Social Media De-Addiction...",
        "Gaming De-Addiction...",
      ],
      ageGroup: "All ages",
      timetable: "Saturday - Sunday, 10 AM - 2 PM",
    },
    {
      id: 4,
      imgUrl: "/Family_camp.jpg",
      CornerImgUrl: "/Family camp.png",
      title: "20+ Camp",
      description: [
        "Art Workshops for Reducing Negative Moods...",
        "Social Media De-Addiction...",
        "Gaming De-Addiction...",
      ],
      ageGroup: "20+ years",
      timetable: "Monday - Friday, 3 PM - 6 PM",
    },
  ];

  const [selectedCamp, setSelectedCamp] = useState<CampDetails | null>(
    campDetails[0]
  );
  const [showDescription, setShowDescription] = useState(false);
  const [showAgeGroup, setShowAgeGroup] = useState(false);
  const [showTimetable, setShowTimetable] = useState(false);

  const handleCampClick = (id: number) => {
    const camp = campDetails.find((camp) => camp.id === id);
    setSelectedCamp(camp || null);
  };

  return (
    <div className="w-full h-full py-10 relative">
      <Heading heading="Workshops" />
      <div className="h-[3rem]"></div>
      <div className="h-[10rem] w-[20rem] absolute right-0 top-20 hidden lg:block">
        <img src={selectedCamp?.CornerImgUrl} alt="Corner" />
      </div>
      <div className="w-4/5 m-auto relative">
        <div className="flex flex-col lg:flex-row mb-10 lg:mb-0 gap-4 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-[-4rem]">
          {campDetails.map((camp) => (
            <button
              key={camp.id}
              onClick={() => handleCampClick(camp.id)}
              className="bg-men-blue text-white p-2 lg:p-5 font-bold rounded-lg lg:rounded-none lg:rounded-t-2xl"
            >
              {camp.title}
            </button>
          ))}
        </div>

        {selectedCamp && (
          <div className="text-center bg-light-yellow flex flex-col lg:flex-row items-center justify-center gap-6 py-10 px-4 w-full rounded-xl">
            <div
              className="w-[15rem] h-[15rem] rounded-full overflow-hidden border-4 border-white"
              style={{
                backgroundImage: `url(${selectedCamp.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "6px 6px 0px rgba(103, 102, 102, 0.2)",
              }}
            ></div>
            <div className="w-3/4">
              <h2 className="text-5xl font-extrabold mt-4 text-men-blue">
                {selectedCamp.title}
              </h2>

              <div className="mt-4 flex flex-col gap-5">
                <div>
                  <button
                    onClick={() => setShowDescription((prev) => !prev)}
                    className="bg-men-blue text-white p-2 rounded mx-2 w-full font-bold flex items-center justify-between lg:px-5"
                  >
                    <span>Description</span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {showDescription && (
                    <Fade>
                      <ul className="text-lg mt-2 list-disc list-inside text-left px-5 py-2">
                        {selectedCamp.description.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </Fade>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setShowAgeGroup((prev) => !prev)}
                    className="bg-men-blue text-white p-2 rounded mx-2 w-full font-bold flex items-center justify-between lg:px-5"
                  >
                    <span>Age group</span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {showAgeGroup && (
                    <Fade>
                      <p className="text-lg mt-2 text-left">
                        {selectedCamp.ageGroup}
                      </p>
                    </Fade>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setShowTimetable((prev) => !prev)}
                    className="bg-men-blue text-white p-2 rounded mx-2 w-full font-bold flex items-center justify-between lg:px-5"
                  >
                    <span>Time Table</span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {showTimetable && (
                    <Fade>
                      <p className="text-lg mt-2 text-left">
                        {selectedCamp.timetable}
                      </p>
                    </Fade>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshops;
