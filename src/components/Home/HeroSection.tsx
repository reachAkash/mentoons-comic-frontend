import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import AnimatedArtwork from '../common/AnimatedArtworks';
import plane from '../../animation/plane.json';
import SearchBar from '../common/SearchBar';
import { placeholders } from '@/constant/websiteConstants';

type HomeProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroSection: React.FC<HomeProps> = ({ setModalOpen }) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="h-full w-full flex flex-col-reverse lg:flex-col pb-10 lg:pb-0 overflow-hidden">
      <div className='flex flex-col items-center lg:items-start lg:flex-row lg:h-full lg:absolute lg:top-[20.5rem] left-[2rem] z-10 px-2 lg:px-20'>
        <div className='text-center lg:text-left w-full lg:w-2/4 flex flex-col items-left gap-5'>
          <div className="flex items-center w-[80%] lg:min-w-[30rem] m-auto lg:m-0">
            <SearchBar input={input} setInput={setInput} placeholders={placeholders} />
          </div>
          <h1 className='text-5xl text-black lg:text-white text-center lg:text-left'>
            <div className='hidden lg:block lg:absolute lg:top-[-160px] lg:left-[153px] w-[15rem] sm:w-[21rem] z-[-1]'>
              <AnimatedArtwork animationData={plane} />
            </div>
            <span className='text-men-blue font-bold text-6xl lg:text-8xl'>Mentoons,</span><br />
            <span className=''>welcomes you</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl text-black lg:text-white px-4 lg:px-0 text-left'>
            To a world of stories that inspire, educate and connect. Our unique collection of podcasts, comics, and workshops are designed to help children, teenagers, and their caregivers navigate life's important lessons.
          </p>
          <div className='flex items-center justify-center lg:justify-start gap-4 cursor-pointer' onClick={() => setModalOpen(true)}>
            <button className='playBtn flex items-center justify-center bg-men-blue text-white p-3 rounded-full'>
              <FaPlay className='shadow-xl' />
            </button>
            <span className='text-black lg:text-white text-lg sm:text-2xl font-semibold'>Watch videos</span>
          </div>
        </div>
      </div>
      <div className='bg-hero-image lg:bg-center bg-contain lg:bg-cover bg-no-repeat h-[32vh] lg:h-[100vh] relative'>
        <div className='absolute top-[-1rem] left-0 lg:left-[2rem] w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem]'>
          <img src="/crafted.png" alt="crafted by psychologist" className='w-full h-full object-contain'/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
