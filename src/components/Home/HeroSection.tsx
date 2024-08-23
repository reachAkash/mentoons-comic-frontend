import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import AnimatedArtwork from '../common/AnimatedArtworks';
import plane from '../../animation/plane.json';
import SearchBar from '../common/SearchBar';
import { placeholders } from '@/constant/websiteConstants';

type HomeProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoType: React.Dispatch<React.SetStateAction<string>>;
};

const HeroSection: React.FC<HomeProps> = ({ setModalOpen, setVideoType }) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="h-full w-full flex flex-col-reverse lg:flex-col pb-10 lg:pb-0 overflow-hidden relative">
      <div className="w-[80%] lg:max-w-[30rem] m-auto lg:m-0 lg:absolute top-20 left-1/2 transform -translate-x-1/2 z-10 hidden lg:flex">
        <SearchBar input={input} setInput={setInput} placeholders={placeholders} />
      </div>
      <div className='flex flex-col items-center lg:items-start lg:flex-row lg:h-full lg:absolute lg:top-[20.5rem] left-[2rem] z-10 px-2 lg:px-20'>
        <div className='text-center lg:text-left w-full lg:w-3/5 flex flex-col items-left gap-5 '>
          <div className="flex items-center w-[80%] lg:max-w-[30rem] m-auto lg:m-0 lg:hidden">
            <SearchBar input={input} setInput={setInput} placeholders={placeholders} />
          </div>
          <h1 className='text-6xl text-black lg:text-white text-center lg:text-left '>
            <div className='hidden lg:block lg:absolute lg:top-[-160px] lg:left-[153px] w-[15rem] sm:w-[21rem] z-[-1]'>
              <AnimatedArtwork animationData={plane} />
            </div>
            <span className='text-men-blue font-bold text-6xl lg:text-8xl'>Mentoons,</span><br />
            <span className=''>welcome&apos;s you</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl text-black lg:text-white px-8 lg:px-0 text-left ml-0'>
            Welcome to Mentoons! Dive into a world where cartoons and stories pave the way for learning and growth. At Mentoons, we blend fun with education, offering a unique platform where children and teenagers can enjoy illustrated moral stories, engage with family-oriented comics, and participate in interactive activities designed to foster development and understanding.
          </p>
          <div className='flex items-center justify-center lg:justify-start gap-4 cursor-pointer ml-0 lg:ml-12 mt-10'
            onClick={() => {
              setModalOpen(true)
              setVideoType('HERO')
            }}>
            <button className='playBtn flex items-center justify-center bg-men-blue text-white p-3 rounded-full'>
              <FaPlay className='shadow-xl' />
            </button>
            <span className='text-black lg:text-white text-lg sm:text-2xl font-semibold'>Watch videos</span>
          </div>
        </div>
      </div>
      <div className='bg-hero-image lg:bg-center bg-contain md:bg-cover lg:bg-cover bg-no-repeat h-[32vh] lg:h-[100vh] relative mb-0 md:mb-8 lg:mb-0 '>
        <div className='absolute top-[-1rem] left-0 lg:left-[2rem] w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem]'>
          <img src="/crafted.png" alt="crafted by psychologist" className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
