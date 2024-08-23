import React, { useState, useRef } from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { FaPlay, FaArrowLeft } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import {isMobile} from 'react-device-detect'

const HeroSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsVideoPlaying(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVideoPlaying(false);
  };
console.log(isMobile , 'pppoo')
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="relative w-full h-full">
        {!isVideoPlaying ? (
          <div className="relative w-full h-full">
            <figure className='h-1/2 w-full'>
              <img
                src="/file.png"
                alt="Video Thumbnail"
                className="w-full h-full object-contain"
              />
            </figure>
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-10"
              onClick={handlePlayClick}
            >
              <FaPlay className="text-white text-6xl" />
            </button>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-5" />
          </div>
        ) : (
          <div className="relative w-full h-screen">
            <video
              className="w-full object-cover"
              controls
              autoPlay
            >
              <source
                src="https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/What+is+Mentoons.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {!isVideoPlaying &&(
        <div className="bg-[#000000] py-5 lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 left-3 flex flex-col lg:flex-row lg:bg-transparent justify-between lg:w-full">
          <div className="text-left p-8 flex flex-col gap-4 font-montserrat lg:items-start">
            <p className="text-[#fff] text-sm lg:text-md lg:font-bold">Comics &#9679; Podcasts &#9679; Workshops</p>
            <h2 className="text-white text-3xl lg:font-bold">
              Welcome to Mentoons! Dive<br /> into a world where cartoons<br /> and stories pave the way for<br /> learning and growth.
            </h2>
            <p className="text-[#fff] text-sm lg:text-md lg:font-bold">Carefully crafted by Psychologists</p>
          </div>
          <div className="flex items-center justify-around px-10 lg:flex-col-reverse">
            <button 
              className="bg-transparent p-2 rounded-full flex flex-col items-center gap-1"
              onClick={openModal}
            >
              <BsArrowsFullscreen className="text-white text-3xl" />
              <span className="text-white text-sm">Cinema Mode</span>
            </button>
            <button 
              className="bg-transparent p-2 rounded-full flex flex-col items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <MdOutlineWatchLater className="text-white text-3xl" />
              <span className="text-white text-sm">Watch Later</span>
            </button>
          </div>
        </div>
      )}
      {
        isMobile && (
          <div className="bg-[#000000] py-5 lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 left-3 flex flex-col lg:flex-row lg:bg-transparent justify-between lg:w-full">
            <div className="text-left p-8 flex flex-col gap-4 font-montserrat lg:items-start">
              <p className="text-[#fff] text-sm lg:text-md lg:font-bold">Comics &#9679; Podcasts &#9679; Workshops</p>
              <h2 className="text-white text-3xl lg:font-bold">
                Welcome to Mentoons! Dive<br /> into a world where cartoons<br /> and stories pave the way for<br /> learning and growth.
              </h2>
              <p className="text-[#fff] text-sm lg:text-md lg:font-bold">Carefully crafted by Psychologists</p>
            </div>
            <div className="flex items-center justify-around px-10 lg:flex-col-reverse">
              <button 
                className="bg-transparent p-2 rounded-full flex flex-col items-center gap-1"
                onClick={openModal}
              >
                <BsArrowsFullscreen className="text-white text-3xl" />
                <span className="text-white text-sm">Cinema Mode</span>
              </button>
              <button 
                className="bg-transparent p-2 rounded-full flex flex-col items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <MdOutlineWatchLater className="text-white text-3xl" />
                <span className="text-white text-sm">Watch Later</span>
              </button>
            </div>
          </div>
        )
      }

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full h-full" ref={modalRef}>
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
            >
              <source
                src="https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/What+is+Mentoons.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button
              className="absolute top-[6rem] left-4 text-white text-2xl z-50"
              onClick={closeModal}
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
