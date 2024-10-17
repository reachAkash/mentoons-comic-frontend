import WorkshopForm from "@/components/common/WorkshopForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";
import { useLocation} from "react-router-dom";


export interface WorkshopItems {
  name: string;
  desc: string;
  img: string;
  video: string;
  pageUrl: string;
}

const WorkshopsPage = () => {
  const location = useLocation();
  const searchParams = location.search
  const workshop = searchParams.split('=')[1]
  const [activeCategory, setActiveCategory] = React.useState<string>("6-12");
  const [showForm, setShowForm] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (workshop) {
      setActiveCategory(workshop);
    }
  }, [workshop]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section>
      <div className="w-full relative">
        <div
          className={`flex items-center justify-center pt-12  ${activeCategory === "6-12"
              ? "bg-[#ffe5c8]"
              : activeCategory === "13-19"
                ? "bg-[#ffe899]"
                : "bg-[#ffecc4]"
            }`}
        >
          <div
            className=" w-[10%]"
            onClick={() => handleCategoryChange("6-12")}
          >
            <img
              src={`/assets/images/${activeCategory === "6-12"
                  ? "6-12-active-purple.png"
                  : "6-12-purple.png"
                }`}
              alt=""
              className="w-full  object-cover"
            />
          </div>
          <div
            className=" w-[10%]"
            onClick={() => handleCategoryChange("13-19")}
          >
            <img
              src={`/assets/images/${activeCategory === "13-19"
                  ? "13-19-active-purple.png"
                  : "13-19-purple.png"
                }`}
              alt=""
              className="w-36 object-cover"
            />
          </div>
          <div className="w-[14%]" onClick={() => handleCategoryChange("20+")}>
            <img
              src={`/assets/images/${activeCategory === "20+"
                  ? "20+-active-purple.png"
                  : "20+-purple.png"
                }`}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div
            className=" w-[10%]"
            onClick={() => handleCategoryChange("parents")}
          >
            <img
              src={`/assets/images/${activeCategory === "parents"
                  ? "parents-active-purple.png"
                  : "parents-purple.png"
                }`}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div>
          {activeCategory === "6-12" && <WorkshopsPage1 />}
          {activeCategory === "13-19" && <WorkshopsPage2 />}
          {activeCategory === "parents" && <WorkshopsPage3 />}
        </div>
        <div className="relative flex items-center justify-center left-0 px-8 py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
          <img
            onClick={() => setShowForm(true)}
            className="w-[30%]"
            src="/assets/home/talktous.png"
          />
        </div>
        {showForm && (
          <Dialog open={showForm} onOpenChange={() => setShowForm(false)}>
            <DialogContent className="z-[999999] bg-transparent border-0">
              <DialogDescription>
                <div className="relative">
                  <WorkshopForm selectedWorkshop={activeCategory} setShowForm={setShowForm} />
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default WorkshopsPage;

export const WorkshopsPage1 = () => {
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
      <div className="relative  mt-12 ">
        <img src="/assets/images/workshop-info-bg.png" alt="" />
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

export const WorkshopsPage2 = () => {
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
export const WorkshopsPage3 = () => {
  return (
    <section>
      <div className="w-full relative ">
        <img
          src="/assets/images/family-camp-cloud.png"
          alt=""
          className="w-full object-cover"
        />

        <div className=" absolute w-full h-full top-0 ">
          <div className="flex items-start  justify-between   ">
            <div className=" w-[50%] ">
              <img
                src="/assets/images/family-camp-hero-text.png"
                alt=""
                className="w-[100%]  p-4  md:pt-12 md:px-12  object-cover"
              />
            </div>
            <div className=" w-[50%] ">
              <img
                src="/assets/images/family-camp-hero.png"
                alt=""
                className="w-[90%] mx-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative  ">
        <div className="absolute bottom-[0%] right-0 w-[50%]">
          <img src="/assets/images/family-camp-aim-text.png" alt="" />
        </div>
        <img src="/assets/images/family-camp-info-bg.png" alt="" />
        <div className=" absolute top-0  w-full h-full flex ">
          <div className="w-[50%] h-full ">
            <div className=" ">
              <img
                src="/assets/images/family-camp-issue-text.png"
                alt=""
                className="w-full object-cover p-6 pt-8 pb-2  md:p-24 md:pb-6 "
              />
            </div>
            <div>
              <img
                src="/assets/images/family-camp-issue-illustration.png"
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
              src="/assets/images/family-camp-info.png"
              alt=""
              className="w-full object-cover p-4 "
            />
          </div>
        </div>
        <div className="w-[50%] h-full ">
          <img
            src="/assets/images/family-camp-illustration.png"
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
