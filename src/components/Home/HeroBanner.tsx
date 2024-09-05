import Sidebar from "../comics/Sidebar";
import { Fade } from "react-awesome-reveal";
type detailsData = {
    url: string;
    title: string;
    description: string;
}
const HeroBanner = () => {

    const details:detailsData[] = [
        {
            url: '/assets/home/box 1.png',
            title: 'Join Us',
            description: 'Sign up and browse through our interactive sessions, books, games, and videos.'
        },
        {
            url: '/assets/home/box 2.png',
            title: 'Join Us',
            description: 'Sign up and browse through our interactive sessions, books, games, and videos.'
        },
        {
            url: '/assets/home/box 3.png',
            title: 'Join Us',
            description: 'Sign up and browse through our interactive sessions, books, games, and videos.'
        },
    ];

    return (
        <div className="h-full w-full relative mb-[2rem] bg-[url('/assets/home/background.png')] bg-botttom bg-no-repeat bg-cover pb-[2.5rem] lg:pb-40">
            <div className="absolute top-[20rem] right-0 z-50 hidden lg:block">
                <div className="relative group">
                    <div className="bg-primary text-white w-8 h-40 rounded-l-lg flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:w-14 group-hover:rounded-lg">
                        <div className="flex flex-col items-center group-hover:items-start transition-all duration-300 ">
                            <Sidebar className="hidden md:block" />
                        </div>
                    </div>
                    <div className="absolute top-[10.2rem] right-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black text-white text-xs font-bold py-2 px-4 rounded-lg shadow-lg whitespace-nowrap">
                            View Sidebar
                        </div>
                    </div>
                </div>
            </div>
            <Fade>
                <img
                    loading="lazy"
                    src="/assets/home/home-banner.png"
                    alt="hero-banner"
                    className="w-full object-cover hidden lg:block"
                />
            </Fade>

            <Fade>
                <img
                    loading="lazy"
                    src="/assets/home/mv.png"
                    alt="hero-banner"
                    className="w-full object-cover lg:hidden"
                />
            </Fade>
            <div className="flex flex-row flex-nowrap w-full items-center justify-around  gap-4 sm:gap-6 px-3">
                {details.map((item, index) => (
                    <div
                        key={index}
                        className="h-[10rem] w-[10rem] sm:h-[12rem] sm:w-[12rem] md:h-[15rem] md:w-[15rem] relative top-[-3rem] flex flex-col items-center justify-center text-center"
                    >
                        <img
                            src={item.url}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-contain"
                        />
                        {/* <div className="relative z-10 px-4 sm:px-6">
                            <h1 className="font-bold text-sm lg:text-2xl text-black">{item.title}</h1>
                            <p className="text-xs lg:text-xl text-black mt-2">{item.description}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroBanner;

