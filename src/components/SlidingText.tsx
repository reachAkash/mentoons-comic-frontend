import React from "react";
import Star from "@/assets/imgs/star.png";
import { Link } from "react-router-dom";

const SlidingText: React.FC = () => {
  return (
    <div className="marquee">
      <span className="marquee1">
        <Link to="/contact">
          <span className="text cursor-pointer">
            Comic Making Contest
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </Link>
        <Link to="/contact">
          <span className="text cursor-pointer">
            Comic Making Contest
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </Link>
        <Link to="/contact">
          <span className="text cursor-pointer">
            Comic Making Contest
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </Link>
        <Link to="/contact">
          <span className="text cursor-pointer">
            Comic Making Contest
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </Link>
        <Link to="/contact">
          <span className="text cursor-pointer">
            Comic Making Contest
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </Link>
        <Link to="/contact">
          <span className="text cursor-pointer">
            Comic Making Contest
            <img className="w-[15%]" src={Star} alt="star" />
          </span>
        </Link>
        <span className="marquee2">
          <Link to="/contact">
            <span className="text cursor-pointer">
              Comic Making Contest
              <img className="w-[15%]" src={Star} alt="star" />
            </span>
          </Link>
          <Link to="/contact">
            <span className="text cursor-pointer">
              Comic Making Contest
              <img className="w-[15%]" src={Star} alt="star" />
            </span>
          </Link>
          <Link to="/contact">
            <span className="text cursor-pointer">
              Comic Making Contest
              <img className="w-[15%]" src={Star} alt="star" />
            </span>
          </Link>
          <Link to="/contact">
            <span className="text cursor-pointer">
              Comic Making Contest
              <img className="w-[15%]" src={Star} alt="star" />
            </span>
          </Link>
          <Link to="/contact">
            <span className="text cursor-pointer">
              Comic Making Contest
              <img className="w-[15%]" src={Star} alt="star" />
            </span>
          </Link>
          <Link to="/contact">
            <span className="text cursor-pointer">
              Comic Making Contest
              <img className="w-[15%]" src={Star} alt="star" />
            </span>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default SlidingText;
