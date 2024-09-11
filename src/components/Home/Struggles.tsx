const Struggles = () => {
  return (
    <>
      <div className="w-full h-full bg-red">
        <div className="bg-[url('/assets/home/Group 2.png')] lg:bg-cover bg-bottom bg-no-repeat px-10 h-full ">
          <div className="relative">
            <h1 className="text-3xl lg:text-7xl lg:text-center ">
              We know
              <br />
              <span className="font-extrabold">THE STRUGGLES</span>
              <br />
              our youth is facing
            </h1>
            <figure className="absolute top-0 right-2 w-[8rem] lg:w-[20rem]">
              <img src="/assets/home/Paper rocket .png" alt="pr-asset" />
            </figure>
          </div>
          <div className="py-10 px-3">
            <figure>
              <img
                src="/assets/home/Assets .png"
                alt=""
                className="h-full w-full object-contain"
              />
            </figure>
          </div>
        </div>
        <div className="w-full h-full flex gap-12 px-4  lg:px-32 bg-[url('/assets/images/blue-wave.png')] bg-top bg-no-repeat bg-cover pt-[5rem] lg:pt-36">
          <div className="w-1/2 h-ful l">
            <figure className="w-full  h-full relative top-16">
              <img
                src="/assets/images/here-how-we-help.png"
                alt="negative effects of mobile"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
          <figure className="w-1/2 h-auto  ">
            <img
              src="/assets/home/Assets-2.png"
              alt="negative effects of mobile"
              className="h-full w-full object-contain"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Struggles;
