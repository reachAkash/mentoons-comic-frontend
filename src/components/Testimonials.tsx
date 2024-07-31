import React from "react";
import Wordbreak from "./Wordbreak";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials: React.FC = () => {
  return (
    <div className="container bg-[#f0ebe5] py-20">
      <div className="space-y-4">
        <div className="text-primary lineBefore text-2xl">User Reviews</div>
        <div className="font-semibold text-5xl">
          Reviews From <Wordbreak /> Comic Fans.
        </div>
        <div className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          blanditi.
        </div>
        <button className="bg-primary text-lg font-medium hover:bg-white hover:text-primary transition-all duration-300 ease-in-out text-white py-3 px-7 rounded-full">
          All Reviews
        </button>
      </div>
      <TestimonialsSlider />
    </div>
  );
};

export default Testimonials;
