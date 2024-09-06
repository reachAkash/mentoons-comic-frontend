const MdMultiverse = () => {
  return (
    <div className="w-full h-full relative">
      <figure className="w-4/5 sm:w-3/4 md:w-1/2 m-auto relative">
        <img
          src="/assets/home/baloon.png"
          alt="balloons"
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-4 sm:left-6 md:left-10 transform -translate-y-1/2">
          <h1 className="text-left text-xl lg:text-6xl md:text-4xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight text-[#9e7300]">
            ENGAGING
            <br /> MENTORING FOR
            <br /> YOUR CHILD
          </h1>
          <p className="text-left text-white text-base sm:text-lg md:text-xl lg:text-2xl">
            Made fun and effective
          </p>
        </div>
        <button className="h-8 w-8 lg:h-28 lg:w-28 absolute bottom-8 right-12">
          <img
            src="/assets/home/btn-yellow.png"
            alt="blue-btn"
            className="h-full w-full object-contain"
          />
        </button>
      </figure>
      <figure className="w-[8rem] sm:w-[20rem] md:w-[15rem] h-auto absolute left-20">
        <img
          src="/assets/home/specs.png"
          alt="specs-asset"
          className="h-full w-full object-contain"
        />
      </figure>
      <figure className="w-full relative mt-8 sm:mt-10 md:mt-12">
        <img
          src="/assets/home/bg-man.png"
          alt="hero"
          className="w-full h-auto object-contain"
        />
        <h1 className="absolute top-[35%] right-6 sm:right-[10%] text-right text-xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight">
          GIVE YOUR
          <br /> CHILD THE GIFT OF
          <br /> GROWTH WITH
          <br /> <span className="text-[#3d7719]">MENTOONS</span>
        </h1>
        <button className="h-8 w-8 lg:h-28 lg:w-28 absolute bottom-[20%] right-[15%] md:bottom-[25%] md:right-[20%]">
          <img
            src="/assets/home/btn-green.png"
            alt="green-btn"
            className="h-full w-full object-contain"
          />
        </button>
      </figure>
      <figure className="w-[8rem] lg:w-[20rem] md:w-[15rem] h-auto absolute right-6 lg:right-20">
        <img
          src="/assets/home/helicopter.png"
          alt="helicopter-asset"
          className="h-full w-full object-contain"
        />
      </figure>
      <div className="text-center text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold mt-8 sm:mt-10 md:mt-12 relative p-16 lg:p-44">
        <h1 className="leading-tight">
          A <span className="text-red-500">U</span>
          <span className="text-orange-500">N</span>
          <span className="text-yellow-500">I</span>
          <span className="text-green-500">Q</span>
          <span className="text-blue-500">U</span>
          <span className="text-purple-500">E</span> platform that
          <br />
          combines enriching
          <br />
          mentorship with the captivating
          <br />
          power of cartoons
        </h1>
        <button className="h-8 w-8 lg:h-28 lg:w-28 absolute bottom-2 right-[15%] md:bottom-6 md:right-[10%]">
          <img
            src="/assets/home/btn-blue.png"
            alt="blue-btn"
            className="h-full w-full object-contain"
          />
        </button>
      </div>
    </div>
  );
};

export default MdMultiverse;
