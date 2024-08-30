import Sidebar from "../comics/Sidebar";
import Cards from "./Cards";
import { Fade, Slide } from "react-awesome-reveal";

type CardsData = {
    url: string;
    boxUrl: string;
    cardText: string;
    linkUrl: string;
    dsecription: string;
};

const HeroBanner = () => {
    const cards: CardsData[] = [
        {
            url: "/assets/home/workshop-n.png",
            boxUrl: "/assets/home/workshop-btn.png",
            cardText: "Workshops",
            linkUrl: "/mentoons-workshops",
            dsecription: "Interactive sessions led by industry experts, designed to enhance mentoring skills and foster personal growth.",
        },
        {
            url: "/assets/home/Comic-n.png",
            boxUrl: "/assets/home/comic-btn.png",
            cardText: "Comics",
            linkUrl: "/mentoons-comics",
            dsecription:"Our flagship offering, featuring beautifully illustrated stories that tackle various mentoring themes.",
        },
        {
            url: "/assets/home/audioComic.png",
            boxUrl: "/assets/home/acomic-btn.png",
            cardText: "Audio comics",
            linkUrl: "/mentoons-comics/audio-comics",
            dsecription: "An innovative fusion of traditional comics and audio storytelling, perfect for on-the-go learning."
        },
        {
            url: "/assets/home/Podcast-n.png",
            boxUrl: "/assets/home/pod-btn.png",
            cardText: "Podcasts",
            linkUrl: "/mentoons-podcast",
            dsecription:'"Mentor Moments," our weekly podcast, featuring inspiring conversations with mentors from various fields.',
        },
        // {
        //     url: "/slide1.jpg",
        //     boxUrl: "/assets/home/revive-btn.png",
        //     cardText: "Something",
        //     linkUrl: "/mentoons-workshops",
        //     dsecription:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        // },
        // {
        //     url: "/slide1.jpg",
        //     boxUrl: "/assets/home/un-btn.png",
        //     cardText: "Let's revive",
        //     linkUrl: "/",
        //     dsecription:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        // },
        // {
        //     url: "/slide1.jpg",
        //     boxUrl: "/assets/home/un2-btn.png",
        //     cardText: "Let's revive",
        //     linkUrl: "/",
        //     dsecription:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        // },
        // {
        //     url: "/slide1.jpg",
        //     boxUrl: "/assets/home/cc-btn.png",
        //     cardText: "Career corner",
        //     linkUrl: "/",
        //     dsecription:
        //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        // },
    ];

    return (
        <div className="h-full w-full relative mb-[2rem] bg-[url('/assets/home/background.png')] bg-center bg-no-repeat bg-cover ">        
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
            <Fade duration={1000} triggerOnce>
                <img
                    loading="lazy"
                    src="/assets/home/home-banner.png"
                    alt="hero-banner"
                    className="w-full object-cover"
                />
            </Fade>
            <div className="w-full h-full pb-[10rem] lg:pb-[30rem] px-4 sm:px-10 lg:px-40 z-20 flex flex-col gap-20 relative">
                <Slide direction="right" duration={1000} triggerOnce>
                    <figure className="w-[26rem] max-w-xs sm:max-w-md lg:max-w-lg mx-auto absolute top-[-10rem] right-[20rem] hidden lg:block">
                        <img
                            loading="lazy"
                            src="/assets/home/specs.png"
                            alt="specs-asset"
                            className="w-full h-full object-contain"
                        />
                    </figure>
                </Slide>
                <div className="flex flex-col lg:flex-row z-30 items-center lg:text-left">
                    <Fade direction="up" duration={1000} triggerOnce>
                        <div className="">
                            <h1 className="text-4xl md:text-5xl lg:text-8xl text-white font-bold mb-4 text-center lg:text-left">
                                What we offer?
                            </h1>
                            <h3 className="bg-men-blue text-white text-lg md:text-2xl lg:text-3xl px-4 sm:px-6 md:px-8 py-2 rounded-full max-w-fit">
                                Why choose mentoons?
                            </h3>
                        </div>
                    </Fade>
                </div>
                <Slide cascade direction="up" duration={1000} triggerOnce>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 z-30 relative">
                        {cards.map((item, index) => (
                            <Cards key={index} indexValue={index} items={item} />
                        ))}
                    </div>
                </Slide>
            </div>
            <Slide direction="right" duration={1000} triggerOnce>
                <figure className="w-[16rem] max-w-xs sm:max-w-md lg:max-w-lg mx-auto absolute bottom-[7rem] right-[10rem] hidden lg:block">
                    <img
                        loading="lazy"
                        src="/assets/home/football.png"
                        alt="football-asset"
                        className="w-full h-full object-contain"
                    />
                </figure>
            </Slide>
        </div>
    );
};

export default HeroBanner;
