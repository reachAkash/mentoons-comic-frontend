// import { FaRegCirclePlay } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa6";
// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import User1 from "@/assets/imgs/user1.png";
// import User2 from "@/assets/imgs/user2.png";
// import User3 from "@/assets/imgs/user3.png";
// import { ComicSlider } from "./Sliders";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

import Wordbreak from "./Wordbreak";

const HeroSection: React.FC = () => {
  // const navigate = useNavigate();
  return (
    // <motion.div
    //   initial={{ opacity: 0.5 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    //   id="home"
    //   className="container relative bg-rose-500 flex flex-col lg:flex-row text-center lg:text-start items-center justify-between py-10 lg:pb-14"
    // >
    //   <motion.div
    //     initial={{ opacity: 0.5 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 2 }}
    //     className=" w-full lg:w-[50%] space-y-6"
    //   >
    //     <h1 className="text-men-blue font-bold text-4xl lg:text-5xl ">
    //       Mentoons Comics
    //     </h1>
    //     <div className=" text-white text-2xl md:text-6xl font-semibold tracking-wider leading-tight">
    //       Welcome to a world of meaningful stories and valuable life lessons.
    //     </div>
    //     <div className="mx-auto lg:mx-0 w-fit flex items-center justify-between gap-4">
    //       <button
    //         onClick={() => navigate("/mentoons-comics/comics-list")}
    //         className="bg-red-500 hover:bg-white hover:text-red-500 border-white  border-2 text-white rounded-full px-4 py-2 text-xl transition-all ease-in-out duration-300"
    //       >
    //         Browse Our Collection
    //       </button>
    //       <div onClick={() => navigate("/mentoons-comics/comics-list")}>
    //         <FaRegCirclePlay className="text-white text-5xl cursor-pointer" />
    //       </div>
    //     </div>
    //     <div className="flex text-center w-full lg:w-fit items-center justify-center lg:justify-start gap-0">
    //       <div className="flex items-center justify-between w-fit">
    //         <img
    //           className="rounded-full w-14 border-4 border-white"
    //           src={User1}
    //           alt="user 1"
    //         />
    //         <img
    //           className="relative right-4 rounded-full w-14 border-4 border-white"
    //           src={User2}
    //           alt="user 2"
    //         />
    //         <img
    //           className="relative right-8 rounded-full w-14 border-4 border-white"
    //           src={User3}
    //           alt="user 3"
    //         />
    //       </div>
    //       <div className="space-y-2">
    //         <div className="flex items-center justify-between w-fit gap-2 text-xl">
    //           <FaStar className="text-yellow-500 text-xl" />
    //           <FaStar className="text-yellow-500 text-xl" />
    //           <FaStar className="text-yellow-500 text-xl" />
    //           <FaStar className="text-yellow-500 text-xl" />
    //           <FaRegStarHalfStroke className="text-yellow-500" />
    //         </div>
    //         <div className="text-gray-300">(5k Reviews)</div>
    //       </div>
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0.5 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 2 }}
    //     className="w-full lg:w-[50%] relative flex items-center justify-center"
    //   >
    //     <ComicSlider />
    //   </motion.div>
    // </motion.div>

    // <div className="w-full h-[91vh] bg-comicsHome bg-cover bg-bottom bg-no-repeat">
    //   Akash
    // </div>

    <div className="relative w-full h-[250vh] bg-comicsHome bg-no-repeat bg-cover bg-bottom bg-[#59B2DC]">
      <div className="relative md:px-14 text-center md:text-start py-20 space-y-4">
        <h1 className="font-extrabold text-4xl lg:text-8xl">
          Mentoons <Wordbreak /> Comics
        </h1>
        <p className=" text-3xl md:text-5xl font-semibold tracking-wider md:leading-snug">
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
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[28%] -bottom-[65%] rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-17.jpg"
        />
        {/* rishi and rohan comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[8%] -bottom-[62%] -rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-16.jpg"
        />
        {/* my daily routine comic */}
        <img
          className="w-32 border-[3px] z-50 shadow-md shadow-black rounded-md border-black absolute right-[8%] -bottom-[62%] -rotate-[40deg] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-16.jpg"
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
