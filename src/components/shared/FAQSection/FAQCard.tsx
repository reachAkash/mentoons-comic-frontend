import React from "react";
import { IoChevronDown } from "react-icons/io5";
const FAQCard = () => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const handleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={` ${
        isExpanded ? "max-h-96" : "max-h-16"
      } border border-slate-300 rounded-xl flex flex-col items-center justify-between overflow-hidden transition-all duration-300 `}
    >
      <div className=' w-full flex items-center justify-between p-4'>
        <span>What is Mentoons Podcast?</span>
        <span
          className={`p-1 rounded-full border flex items-center transition-all duration-300  ${
            isExpanded && "rotate-180"
          }`}
          onClick={handleIsExpanded}
        >
          <IoChevronDown />
        </span>
      </div>
      <span className='p-4'>
        The Mentoons Podcast is a part of Mentoons, a platform focused on
        leveraging animation and creative content to address issues like social
        media, cellphone, and gaming addiction. The podcast delves into stories
        and experiences from their workshops, providing listeners with an inside
        look at the transformative activities they offer. These workshops are
        aimed at helping people, especially teenagers, disconnect from digital
        distractions and build healthier lifestyles. The podcast features
        behind-the-scenes moments, success stories, and enriching lessons from
        their various initiatives.
      </span>
    </div>
  );
};

export default FAQCard;
