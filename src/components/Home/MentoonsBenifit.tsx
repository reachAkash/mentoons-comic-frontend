import Slider from "react-slick";
import Heading from "../common/Heading";
import { Fade, Zoom } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";

type SliderImages = {
  imgUrl: string;
  altText: string;
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
};

const MentoonsBenifit: React.FC = () => {
  const sliderImages: SliderImages[] = [
    {
      imgUrl: "/slide1.jpg",
      altText: "Slide 1",
    },
    {
      imgUrl: "/slide2.jpg",
      altText: "Slide 2",
    },
    {
      imgUrl: "/slide3.jpg",
      altText: "Slide 3",
    },
  ];

  return (
    <div className="h-full w-full lg:h-screen py-8 bg-light-yellow relative">
      <Fade direction="up" triggerOnce>
        <Heading heading="Mentoons Benefits" />
      </Fade>

      <div className="flex flex-col lg:flex-row lg:gap-10 items-center ">
        <div className="w-full lg:w-1/3 flex flex-col mb-10 relative">
          <img src="/clouds.png" alt="clouds asset" className="absolute top-0 left-[7rem] h-[80%] w-full object-contain" />

          <Zoom triggerOnce>
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <img
                    src={image.imgUrl}
                    alt={image.altText}
                    style={{
                      boxShadow: '6px 6px 0px rgba(103, 102, 102, 0.2)',
                    }}
                    className="w-80 h-80 border-4 border-men-blue object-cover rounded-full shadow-roundedSlider-shadow lg:relative lg:left-1/2 lg:transform lg:-translate-x-1/2 ml-[1.7rem] lg:ml-0 md:ml-0"
                  />
                </div>
              ))}
            </Slider>
          </Zoom>
        </div>

        <div className="w-full lg:w-2/3 mt-8 lg:mt-0 text-center lg:text-left flex flex-col items-center px-10">
          <Fade direction="up" triggerOnce>
            <h1 className="text-5xl font-semibold mb-6">Our Unique Solution</h1>
          </Fade>

          <Fade delay={100} direction="up" triggerOnce>
            <p className="text-left lg:text-center text-2xl">
              We believe in transforming children's lives by changing maladaptive behavior, enhancing self-awareness, and taking a stance against social media addiction. Our evidence-based methodology combines concepts of social human development and learning through engaging, fun elements like cartoons, games, books, and videos. Through our in-depth workshops, we provide resources that foster social interactions, healthy reactions, and forming lasting friendships. We're here to support children, teenagers, and adults as they navigate life's challenges.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MentoonsBenifit;
