import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const ProgressScroller: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the page has been scrolled more than 100px
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function to scroll to top
  const scrollToTop = (duration = 1000) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start * (1 - progress));
      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <>
      {isVisible && (
        <div
          className="w-fit rounded-full fixed right-4 bottom-16  p-4 cursor-pointer z-[9999]"
          onClick={() => scrollToTop(1000)}
        >
          <img className="w-20" src="/Pencile up.png" alt="pencil up" />
        </div>
      )}
    </>
  );
};

export default ProgressScroller;
