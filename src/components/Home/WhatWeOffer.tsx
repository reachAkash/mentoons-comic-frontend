import { Fade, Slide } from "react-awesome-reveal";
import Cards from "./Cards";


type CardsData = {
    url: string;
    boxUrl: string;
    cardText: string;
    linkUrl: string;
    dsecription: string;
};

const WhatWeOffer = () => {

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
            dsecription: "Our flagship offering, featuring beautifully illustrated stories that tackle various mentoring themes.",
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
            dsecription: '"Mentor Moments," our weekly podcast, featuring inspiring conversations with mentors from various fields.',
        },
    ];

    return (
        <div className="w-full bg-[url('/assets/home/bg.png')] bg-no-repeat bg-top bg-contain pt-20 lg:pt-[28rem] ">
            <div className="w-full h-full flex flex-col gap-20 relative bg-[#ff6c6c] px-10 py-10">
                <div className="flex flex-col lg:flex-row z-30 items-center lg:text-left">
                    <div>
                        <Slide direction="left">
                            <h1 className="text-4xl md:text-5xl lg:text-8xl text-white font-bold mb-4 text-center lg:text-left">
                                What we offer?
                            </h1>
                            <h3 className="bg-men-blue text-white text-lg md:text-2xl lg:text-3xl px-4 sm:px-6 md:px-8 py-2 rounded-full max-w-fit">
                                Why choose mentoons?
                            </h3>
                        </Slide>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 z-30 relative">
                    {cards.map((item, index) => (
                        <Fade key={index} delay={index * 100}>
                            <Cards indexValue={index} items={item} />
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhatWeOffer;
