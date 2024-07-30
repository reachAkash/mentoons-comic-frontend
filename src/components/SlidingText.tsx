import React from "react";
import Star from "@/assets/imgs/star.png";

const SlidingText: React.FC = () => {
  return (
    <div className="marquee">
      <span className="marquee1">
        <span className="text">
          Mentoons Comics
          <img className="w-[15%]" src={Star} alt="star" />
        </span>
        <span className="text">
          Mentoons Comics
          <img className="w-[15%]" src={Star} alt="star" />
        </span>
        <span className="text">
          Mentoons Comics
          <img className="w-[15%]" src={Star} alt="star" />
        </span>
        <span className="text">
          Mentoons Comics
          <img className="w-[15%]" src={Star} alt="star" />
        </span>
        <span className="text">
          Mentoons Comics
          <img className="w-[15%]" src={Star} alt="star" />
        </span>
        <span className="text">
          Mentoons Comics
          <img className="w-[15%]" src={Star} alt="star" />
        </span>
        <span className="marquee2">
          <span className="text">
            Mentoons Comics
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
          <span className="text">
            Mentoons Comics
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
          <span className="text">
            Mentoons Comics
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
          <span className="text">
            Mentoons Comics
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
          <span className="text">
            Mentoons Comics
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
          <span className="text">
            Mentoons Comics
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </span>
      </span>
    </div>
  );
};

export default SlidingText;
