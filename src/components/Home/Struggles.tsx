const Struggles = () => {
  return (
    <>
      <div className="w-full h-full bg-red">
        <div className="bg-[url('/assets/home/Group 2.png')] lg:bg-cover bg-bottom bg-no-repeat  h-full w-full px-2 ">
          <div className="relative flex items-center justify-around">
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
                width="600px"
                height="600px"
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
        <div className="w-full flex bg-[url('/assets/images/blue-wave.png')] bg-top bg-no-repeat bg-cover lg:pt-36 pt-[5rem] ">
          <div className="w-ful  flex flex-1 justify-center">
            <img
              src="/assets/images/here-how-we-help.png"
              alt="negative effects of mobile"
              className=" w-[90%] lg:w-[70%]  object-cover  py-4"
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
