import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ProgressScroller: React.FC = () => {
  return (
    <div className="w-fit rounded-full fixed right-4 bottom-4 bg-black p-4">
      <FaArrowUpLong className="text-primary" />
    </div>
  );
};

export default ProgressScroller;
