import { useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import MentoonsBenifit from '../components/Home/MentoonsBenifit';
import Workshops from '../components/Home/Workshops';
import VideoModal from '../components/videoModal';
import InsideMentoons from '../components/Home/InsideMentoons';
import CallToAction from '../components/Home/CallToAction';
import ExploreMentoons from '@/components/Home/ExploreMentoons';

type videoData = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

const WebHome: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [videoType, setVideoType] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const storedMuteState = localStorage.getItem('isMuted');
    return storedMuteState ? JSON.parse(storedMuteState) : false;
  });
  const [audio] = useState(new Audio('/audio.mp3'));

  const videos: videoData[] = [
    { id: '1', title: 'Olivia', thumbnail: '/olivia.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Olivia%2C+28+Years%2C+Psychologist(2)/Olivia%2C+28+Years%2C+Psychologist(2).mp4' },
    { id: '2', title: 'Raj', thumbnail: '/raj.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Raj%2C+42+Years%2C+IT+Manager%2C+Podcast+%26+Convo+Card/Raj%2C+42+Years%2C+IT+Manager%2C+Podcast+%26+Convo+Car.mp4' },
    { id: '3', title: 'Rajesh', thumbnail: '/rajesh.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Rajesh+K+42+Years+old+(IT+Manager)/Rajesh+K+42+Years+old+(IT+Manager).mp4' },
    { id: '4', title: 'Samantha', thumbnail: '/samantha.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Samantha%2C+35+Years%2C+Elementary+School+Teacher(1)/Samantha%2C+35+Years%2C+Elementary+School+Teacher(1).mp4' },
    { id: '5', title: 'Sarah', thumbnail: '/sarah.jpg', url: 'https://mentoons-website.s3.ap-northeast-1.amazonaws.com/Flat+Image+Stories+for+Mentoons/Sarah%2C+35+Years%2C+Elementary+School+Teacher(1)/Sarah%2C+35+Years%2C+Elementary+School+Teacher(1).mp4' },
  ];

  const InsideMentoonsVideos: videoData[] = [
    { id: '1', title: "Career Fraudstar Trailer", thumbnail: '/career.jpg', url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/FRAUD'S_TRAILER_FINAL.mp4" },
    { id: '2', title: 'Stop Swiping video song', thumbnail: '/swiping.jpg', url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/STOP_SWIPING_LYRICS.mp4" },
    { id: '3', title: 'Team Celebration', thumbnail: '/life-mentoons.png', url: "https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/Team+Celebration+Video_01.mp4" },
  ];

  useEffect(() => {
    audio.volume = isMuted ? 0 : 1;
  }, [isMuted, audio]);

 

  const handleMuteToggle = () => {
    if (audio.paused) {
      audio.play().catch((error) => console.error('Error playing audio:', error));
    } else {
      audio.pause();
    }
    setIsMuted(prev => !prev);
  };

  useEffect(() => {
    localStorage.setItem('isMuted', JSON.stringify(isMuted));
  }, [isMuted]);

  return (
    <div className='h-full w-full overflow-hidden'>
      <VideoModal videos={videoType === 'HERO' ? videos : InsideMentoonsVideos} isOpen={modalOpen} onClose={() => setModalOpen(false)} type={videoType} />
      <HeroSection />
      <ExploreMentoons />
      <MentoonsBenifit />
      <Workshops />
      <InsideMentoons setModalOpen={setModalOpen} setVideoType={setVideoType} />
      <CallToAction />

      <div className='fixed top-[6rem] right-2 flex flex-col items-center'>
        <button
          onClick={handleMuteToggle}
          className='bg-transparent border-2 p-2 rounded-full shadow-md border-black text-black'
          aria-label="Toggle mute"
        >
          {isMuted ? 
            <figure className='h-8 lg:h-16 w-8 lg:w-16'><img src='/assets/images/play.png' className='h-full w-full object-contain' /></figure> 
            : 
            <figure className='h-8 lg:h-16 w-8 lg:w-16'><img src='/assets/images/pause.png' className='h-full w-full object-contain' /></figure>
          }
        </button>
      </div>
    </div>
  );
}

export default WebHome;
