import { FaPlay } from 'react-icons/fa';
import AnimatedArtwork from '../common/AnimatedArtworks';
import plane from '../../animation/plane.json';
import bicycle from '../../animation/bicycle.json';
import SearchBar from '../common/SearchBar';

type HomeProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroSection: React.FC<HomeProps> = ({ setModalOpen }) => {
  const placeholders = [
    "Search for Comics...",
    "Search for Audio Comics...",
    "Search for Podcast...",
    "Search for Moral Stories...",
    "Search for 6-12 years...",
    "Search for 13-14 years...",
    "Search for Workshops...",
  ];

  return (
    <div className="h-[100vh] lg:h-[100vh] py-10 bg-hero-image bg-bottom lg:bg-center bg-contain lg:bg-cover bg-no-repeat">
      <div className='flex flex-col items-center lg:items-start lg:flex-row lg:h-full'>
        <div className='text-center lg:text-left w-full lg:w-2/4 flex flex-col items-center lg:items-start gap-7 lg:pl-10 lg:relative lg:top-1/2 lg:-translate-y-1/2 pb-10 lg:pb-0'>
          <div className="flex items-center justify-center w-full lg:w-auto">
            <SearchBar placeholders={placeholders} />
          </div>
          <div className='lg:absolute lg:top-[-153px] lg:left-[153px] w-[15rem] sm:w-[21rem]'>
            <AnimatedArtwork animationData={plane} />
          </div>
          <h1 className='text-4xl sm:text-6xl md:text-7xl text-black lg:text-white lg:whitespace-nowrap'>
            Welcome to <span className='text-men-blue font-bold'>Mentoons</span>
          </h1>
          <p className='text-lg sm:text-2xl md:text-3xl text-black lg:text-white px-4 lg:px-0'>
            Those teenagers out there in need of guidance on touchy areas like good-touch, bad-touch, dealing with hormonal changes, or breaking free from social media, our resources are your rescue.
          </p>
          <div className='flex items-center justify-center lg:justify-start gap-4 cursor-pointer'  onClick={() => setModalOpen(true)}>
            <button className='playBtn flex items-center justify-center bg-men-blue text-white p-3 rounded-full'
            >
              <FaPlay className='shadow-xl' />
            </button>
            <span className='text-black lg:text-white text-lg sm:text-2xl font-semibold'>Watch videos</span>
          </div>
          <div className='w-10 h-10 sm:w-12 sm:h-12 hidden lg:block absolute top-[20rem] left-[29rem]'>
            <AnimatedArtwork animationData={bicycle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
