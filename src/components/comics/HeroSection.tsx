import Wordbreak from "./Wordbreak";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full text-[#864747] h-[250vh] bg-comicsHome bg-no-repeat bg-cover bg-bottom bg-[#59B2DC]">
      <div className="relative md:px-14 text-center md:text-start py-20 space-y-4">
        <h1
          className="font-extrabold text-4xl lg:text-8xl"
          style={{
            WebkitTextStroke: "3px black",
            color: "transparent", // Optional, makes only the stroke visible
            textShadow: "4px 4px 4px #FBD33D",
          }}
        >
          Mentoons <Wordbreak /> Comics
        </h1>
        <p className="text-[#592828] text-3xl md:text-4xl font-semibold tracking-wider md:leading-snug">
          Welcome to a world of <Wordbreak /> meaningful stories and valuable{" "}
          <Wordbreak />
          life lessons.
        </p>
        {/*share image  */}
        <img className="w-32 relative left-16" src="/assets/comics/4.png" />
        {/* message image */}
        <img
          className="w-52 absolute top-0 left-[43%] transform scale-x-[-1]"
          src="/assets/comics/1.png"
        />
        {/* Don't fade away comic */}
        <img
          className="w-32 border-[3px] shadow-md shadow-black rounded-md border-black absolute top-8 left-[65%] -rotate-[25deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-04.jpg"
        />
        {/* black jalebi image */}
        <img
          className="w-32 absolute top-0 right-40"
          src="/assets/comics/3.png"
        />
        {/* one way trip comic */}
        <img
          className="w-32 border-[3px] shadow-md shadow-black rounded-md border-black absolute top-[28%] right-[10%] rotate-[25deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-22.jpg"
        />
        {/* power image */}
        <img
          className="w-36 absolute top-[33%] left-[67%]"
          src="/assets/comics/2.png"
        />
        {/* bet your life comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[56%] bottom-[30%] rotate-[25deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-09.jpg"
        />
        {/* come out of gaming comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-20 bottom-8 -rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-05.jpg"
        />
        {/* cell life of soniya comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[40%] bottom-12 -rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-12.jpg"
        />
        {/* cell life of soniya comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[20%] bottom-0 rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-06.jpg"
        />
        {/* live and let live comic */}
        <img
          className="w-[10.5rem] border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[10%] -bottom-[30%] -rotate-[35deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-21.jpg"
        />
        {/* i can manage comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[17%] -bottom-[65%] -rotate-[20deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-02.jpg"
        />
        {/* choose wisely comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[14%] -bottom-[30%] rotate-[20deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-08.jpg"
        />
        {/* rohan and puppies comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[25%] -bottom-[70%] rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-17.jpg"
        />
        {/* rishi and rohan comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[8%] -bottom-[62%] -rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-16.jpg"
        />
        {/* my daily routine comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[8%] -bottom-[95%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-01.jpg"
        />
        {/* stories on divorce comic */}
        <img
          className="w-40 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[18%] -bottom-[130%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-07.jpg"
        />
        {/* say sorry comic */}
        <img
          className="w-40 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[38%] -bottom-[130%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-10.jpg"
        />
        {/* say sorry comic */}
        <img
          className="w-40 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[38%] -bottom-[130%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-10.jpg"
        />
        {/* teenagers job 2 comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[58%] -bottom-[110%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-24.jpg"
        />
        {/* teenagers job 2 comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[58%] -bottom-[160%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-24.jpg"
        />
        {/* teenagers job 2 comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute left-[80%] -bottom-[110%] -rotate-[60deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-24.jpg"
        />
        {/* teenagers job 2 comic */}
        <img
          className="w-40 z-50 rounded-md absolute left-[78%] -bottom-[150%] -rotate-[60deg] cursor-pointer"
          src="/assets/images/flowerComics.png"
        />
      </div>
      {/* clement toonla image */}
      <div className="flex w-full h-full items-center justify-center">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[90deg] md:-rotate-45 w-[70rem] h-[35rem]"
          src="/klement_toonla.png"
          alt="klement toonla image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
