import Cards from "./Cards";
import { Fade, Slide } from "react-awesome-reveal";

type CardsData = {
    url: string;
    boxUrl: string;
    cardText: string;
    dsecription: string;
};

const HeroBanner = () => {
    const cards: CardsData[] = [
        {
            url: "/slide1.jpg",
            boxUrl: "/assets/home/workshop-btn.png",
            cardText: "Workshop",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/Comics_.jpg",
            boxUrl: "/assets/home/comic-btn.png",
            cardText: "Comic",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/Audio-comics.jpg",
            boxUrl: "/assets/home/acomic-btn.png",
            cardText: "Audio comic",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/Podcast_.jpg",
            boxUrl: "/assets/home/pod-btn.png",
            cardText: "Podcast",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/Workshops_.jpg",
            boxUrl: "/assets/home/revive-btn.png",
            cardText: "Workshop",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/slide1.jpg",
            boxUrl: "/assets/home/un-btn.png",
            cardText: "Let's revive",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/slide1.jpg",
            boxUrl: "/assets/home/un2-btn.png",
            cardText: "Let's revive",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
        {
            url: "/slide1.jpg",
            boxUrl: "/assets/home/cc-btn.png",
            cardText: "Career corner",
            dsecription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eligendi cumque vero consectetur, nulla nam aut porro quisquam. Quia molestias architecto amet mollitia, vero maiores voluptates quisquam esse quis.",
        },
    ];

    return (
        <div className="h-full w-full relative mb-[2rem] bg-[url('/assets/home/background.png')] bg-center bg-no-repeat bg-cover ">
            <Fade duration={1000} triggerOnce>
                <img
                    src="/assets/home/home-banner.png"
                    alt="hero-banner"
                    className="w-full object-cover"
                />
            </Fade>
            <div className="w-full h-full pb-[10rem] lg:pb-[30rem] px-4 sm:px-10 lg:px-40 z-20 flex flex-col gap-20 relative">
                <Slide direction="right" duration={1000} triggerOnce>
                    <figure className="w-[26rem] max-w-xs sm:max-w-md lg:max-w-lg mx-auto absolute top-[-10rem] right-[20rem] hidden lg:block">
                        <img
                            src="/assets/home/specs.png"
                            alt="specs-asset"
                            className="w-full h-full object-contain"
                        />
                    </figure>
                </Slide>
                <div className="flex flex-col lg:flex-row z-30 items-center lg:text-left">
                    <Fade direction="up" duration={1000} triggerOnce>
                        <div className="">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl text-white font-bold mb-4 text-center lg:text-left">
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
                            src="/assets/home/football.png"
                            alt="specs-asset"
                            className="w-full h-full object-contain"
                        />
                    </figure>
                </Slide>
        </div>
    );
};
export default HeroBanner;
