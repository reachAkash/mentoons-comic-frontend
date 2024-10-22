 const TeenCamp = () => {
  return (
    <section>
      <div className="w-full relative ">
        <img
          src="/assets/images/teen-camp-cloud.png"
          alt=""
          className="w-full object-cover"
        />

        <div className=" absolute w-full h-full top-0 ">
          <div className="flex items-start  justify-between   ">
            <div className=" w-[50%] ">
              <img
                src="/assets/images/teen-camp-hero-text.png"
                alt=""
                className="w-[100%]  p-4  md:pt-12 md:px-12  object-cover"
              />
              <img
                src="/assets/images/teen-camp-subtext.png"
                alt=""
                className="w-[80%]  px-4  md:pt-0 md:px-12  object-cover"
              />
            </div>
            <div className=" w-[50%] ">
              <img
                src="/assets/images/teen-camp-hero.png"
                alt=""
                className="w-[90%] mx-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative  mt-12 ">
        <div className="absolute bottom-[5%] right-0 w-[50%]">
          <img src="/assets/images/teen-camp-aim-text.png" alt="" />
        </div>
        <img src="/assets/images/teen-camp-info-bg.png" alt="" />
        <div className=" absolute top-0  w-full h-full flex ">
          <div className="w-[50%] h-full ">
            <div className=" ">
              <img
                src="/assets/images/teen-camp-issue-text.png"
                alt=""
                className="w-full object-cover p-6 pt-8 pb-2  md:p-24 md:pb-6 "
              />
            </div>
            <div>
              <img
                src="/assets/images/teen-camp-issue-illustration.png"
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
                src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/Teen+Camp+Common+Issues.mp4"
                className=" w-[47%] absolute top-[24%] left-[25%]  md:top-[22%] md:left-[26%]"
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
              src="/assets/images/teen-camp-info.png"
              alt=""
              className="w-full object-cover "
            />
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img
            src="/assets/images/teen-camp-illustration.png"
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
export default TeenCamp;