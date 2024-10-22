const BuddyCamp = () => {
  return (
    <section>
      <div className="w-full relative ">
        <img
          src="/assets/images/buddy-camp-cloud.png"
          alt=""
          className="w-full object-cover"
        />

        <div className=" absolute w-full h-full top-0 ">
          <div className="flex items-start  justify-between   ">
            <div className=" w-[50%] ">
              <img
                src="/assets/images/workshop-hero-text.png"
                alt=""
                className="w-[100%]  p-4  md:pt-12 md:px-12  object-cover"
              />
              <img
                src="/assets/images/workshop-subtext.png"
                alt=""
                className="w-[80%]  px-4  md:pt-0 md:px-12  object-cover"
              />
            </div>
            <div className=" w-[50%] ">
              <img
                src="/assets/images/workshop-hero.png"
                alt=""
                className="w-[90%] mx-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative  mt-12 bg-[url(/assets/images/workshop-info-bg.png)] bg-center bg-cover bg-no-repeat ">
        {/* <img src="/assets/images/workshop-info-bg.png" alt="" /> */}
        <div className=" absolute top-0  w-full h-full flex ">
          <div className="w-[50%] h-full ">
            <div>
              <img
                src="/assets/images/issue-text.png"
                alt=""
                className="w-full object-cover p-4  md:p-12 "
              />
            </div>
            <div>
              <img
                src="/assets/images/issue-illustration.png"
                alt=""
                className="w-full object-cover p-4 pt-0 md:p-12 md:pt-0 "
              />
            </div>
          </div>
          <div className="w-[50%] h-full  relative">
            <img
              src="/assets/images/mentoons-tv.png"
              alt=""
              className="w-full object-cover  p-2 pt-4  pr-3 md:p-12"
            />
            <div>
              <video
                playsInline
                webkit-playsinline
                src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/Children+Common+Issues.mp4"
                className=" w-[47%] absolute top-[33%] left-[25%]  md:top-[31%] md:left-[26%]"
                autoPlay
                controls
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="relative  flex">
        <div className="w-[50%] h-full ">
          <div>
            <img
              src="/assets/images/buddy-camp-info.png"
              alt=""
              className="w-full object-cover "
            />
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img
            src="/assets/images/buddy-camp-illustration.png"
            alt=""
            className="w-full object-cover "
          />
        </div>
      </div>
      <div className="">
        <img
          src="/assets/images/workshop-enquiry-form.png"
          alt=""
          className="w-[80%] mx-auto"
        />
      </div>
    </section>
  );
};

export default BuddyCamp;
