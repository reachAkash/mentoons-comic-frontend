import { FaPlay } from 'react-icons/fa';
import AnimatedArtwork from '../common/AnimatedArtworks';
import plane from '../../animation/plane.json'
import bicycle from '../../animation/bicycle.json'
import SearchBar from '../common/SearchBar';


type HomeProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
    <div className="h-[145vh] lg:h-[100vh] py-10 bg-hero-image bg-bottom lg:bg-center bg-contain lg:bg-cover bg-no-repeat">
      <div className='flex flex-col items-center'>
        <div className='text-center lg:text-left w-full lg:w-2/4 flex flex-col items-center gap-7 lg:absolute lg:top-1/2 lg:left-10 lg:-translate-y-1/2 pb-[5rem]'>
          <div className="flex items-center justify-center w-full">
            <SearchBar placeholders={placeholders} />
          </div>
          <div className='lg:absolute lg:top-[-153px] lg:left-[153px] w-[21rem]'>
            <AnimatedArtwork animationData={plane} />
          </div>
          <h1 className='text-7xl text-black lg:text-white lg:whitespace-nowrap'>
            Welcome to <span className='text-men-blue font-bold'>Mentoons</span>
          </h1>
          <p className='text-3xl'>
            Those teenagers out there in need of guidance on touchy areas like good-touch, bad-touch, dealing with hormonal changes, or breaking free from social media, our resources are your rescue.
          </p>
          <div className='flex items-center justify-between gap-4'>

            <button className='playBtn flex items-center justify-center bg-men-blue text-white p-3 rounded-full'
              onClick={() => setModalOpen(true)}
            >
              <FaPlay className='shadow-xl' />
            </button>
            <span className='text-black lg:text-white text-2xl font-semibold'>Watch videos</span>
          </div>
          <div className='w-12 h-12 hidden lg:block absolute top-[20rem] left-[29rem]'>
            <AnimatedArtwork animationData={bicycle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
