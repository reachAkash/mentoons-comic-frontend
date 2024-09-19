import { useEffect, useState } from "react";

const Struggles = () => {
  const [videoSize, setVideoSize] = useState<number>(600); // Initial size

  const updateScreenSize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setVideoSize(600); // Set video size to 600px if screen width is 1200px or more
    } else {
      setVideoSize(400); // Set video size to 400px if screen width is smaller than 1200px
    }
  };

  useEffect(() => {
    updateScreenSize(); // Update video size on component mount
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize); // Cleanup the event listener on unmount
    };
  }, []);
  return (
    <>
      <div className="w-full h-full bg-red">
        <div className="bg-[url('/assets/home/Group 2.png')] lg:bg-cover bg-bottom bg-no-repeat  h-full w-full px-2 ">
          <div className="relative flex flex-col md:flex-row items-center justify-around space-y-4">
            <h1 className="text-3xl lg:text-7xl text-start px-4">
              We know
              <br />
              <span className="font-extrabold">THE STRUGGLES</span>
              <br />
              our youth is facing
            </h1>
            <div>
              <video
                src="https://mentoons-website.s3.ap-northeast-1.amazonaws.com/miscellaneous/Team+Video_02.mp4"
                className="rounded-xl"
                autoPlay
                muted
                loop
                width={videoSize}
              />
            </div>
          </div>
          <div className="w-full mt-8">
            <img
              src="/assets/home/Assets .png"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full flex bg-[url('/assets/images/blue-wave.png')] bg-top bg-no-repeat bg-cover pt-[5rem] md:pt-[8rem] lg:pt-40">
          <div className="w-ful  flex flex-1 justify-center">
            <img
              src="/assets/images/here-how-we-help.png"
              alt="negative effects of mobile"
              className=" w-[90%] lg:w-[70%]  object-cover py-4"
            />
          </div>
          <div className="flex flex-1  items-center">
            <img
              src="/assets/home/Assets-2.png"
              alt="negative effects of mobile"
              className=" w-full object-contain  p-12 pt-24"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Struggles;
