import { useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import HowToUse from '../components/Home/HowToUse';
import MentoonsBenifit from '../components/Home/MentoonsBenifit';
import Workshops from '../components/Home/Workshops';
import VideoModal from '../components/videoModal';
import InsideMentoons from '../components/Home/InsideMentoons';
import CallToAction from '../components/Home/CallToAction';
// import GoToTop from '../components/common/GoToTop';
import { CiPause1, CiPlay1 } from 'react-icons/ci';
import JoinAcademy from '@/components/Home/JoinAcademy';

type videoData = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const WebHome: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const storedMuteState = localStorage.getItem('isMuted');
    return storedMuteState ? JSON.parse(storedMuteState) : false;
  });

  const videos: videoData[] = [
    { id: '1', title: 'Olivia', thumbnail: '/olivia.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Olivia%2C+28+Years%2C+Psychologist(2)/Olivia%2C+28+Years%2C+Psychologist(2).mp4' },
    { id: '2', title: 'Raj', thumbnail: '/raj.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Raj%2C+42+Years%2C+IT+Manager%2C+Podcast+%26+Convo+Card/Raj%2C+42+Years%2C+IT+Manager%2C+Podcast+%26+Convo+Car.mp4' },
    { id: '3', title: 'Rajesh', thumbnail: '/rajesh.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Rajesh+K+42+Years+old+(IT+Manager)/Rajesh+K+42+Years+old+(IT+Manager).mp4' },
    { id: '4', title: 'Samantha', thumbnail: '/samantha.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Samantha%2C+35+Years%2C+Elementary+School+Teacher(1)/Samantha%2C+35+Years%2C+Elementary+School+Teacher(1).mp4' },
    { id: '5', title: 'Sarah', thumbnail: '/sarah.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Sarah%2C+35+Years%2C+Elementary+School+Teacher(1)/Sarah%2C+35+Years%2C+Elementary+School+Teacher(1).mp4' },
  ];

  const audio = new Audio('/audio.mp3');

  useEffect(() => {
    audio.volume = isMuted ? 0 : 1;
    audio.play().catch((error) => console.error('Error playing audio:', error));

    return () => {
      audio.pause();
    };
  }, [isMuted]);

  useEffect(() => {
    localStorage.setItem('isMuted', JSON.stringify(isMuted));
  }, [isMuted]);

  const handleMuteToggle = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <div className='h-full w-full overflow-hidden '>
      <VideoModal videos={videos} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <HeroSection setModalOpen={setModalOpen} />
      <HowToUse />
      <MentoonsBenifit />
      <Workshops />
      <InsideMentoons />
      <CallToAction />
      <JoinAcademy/>
      {/* <GoToTop /> */}

      <button
        onClick={handleMuteToggle}
        className='absolute top-[7rem] left-4 bg-transparent border-2 p-2 rounded-full shadow-md border-black lg:border-white text-black lg:text-white'
        aria-label="Toggle mute"
      >
        {isMuted ? <CiPause1 size={24} /> : <CiPlay1 size={24} />}
      </button>
    </div>
  );
}

export default WebHome;
