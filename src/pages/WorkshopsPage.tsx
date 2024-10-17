// import workshopArrow from "@/assets/imgs/workshop-arrow.png";
// import workshopBlueBg from "@/assets/imgs/workshop-bg1.png";
// import WorkshopCardSmall from "@/assets/imgs/workshop-card-small2.png";
// import WorkshopHeroSmall from "@/assets/imgs/workshop-home-small.png";
// import WorkshopHero from "@/assets/imgs/workshop_home.png";
// import workshopStar from "@/assets/imgs/Workshops_Page_ 7.png";
// import WorkshopAlarm from "@/assets/imgs/Workshops_Page_.png";
import WorkshopForm from "@/components/common/WorkshopForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";
// import { workshopDetails } from "@/constant/comicsConstants";
// import { useQuery } from "@/pages/AudioComicPage";
// import React, { useCallback, useEffect, useRef, useState } from "react";

export interface WorkshopItems {
  name: string;
  desc: string;
  img: string;
  video: string;
  pageUrl: string;
}

// const ComicWorkshop: React.FC = () => {
//   const currType = useQuery();
//   const workshop = currType.get("workshop");
//   const activeWorkshop =
//     workshop == "buddy"
//       ? 0
//       : workshop == "teen"
//       ? 1
//       : workshop == "family"
//       ? 2
//       : workshop == "comic"
//       ? 3
//       : 4;

//   const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItems>(
//     workshopDetails[activeWorkshop]
//   );
//   const [showForm, setShowForm] = useState<boolean>(false);
//   const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
//   const workshopRefLg = useRef<HTMLDivElement>(null);
//   const workshopRefSm = useRef<HTMLDivElement>(null);

//   const handleCardClick = (item: WorkshopItems) => {
//     setSelectedWorkshop(item);
//     if (imagesLoaded) {
//       if (workshopRefLg.current) {
//         workshopRefLg.current.scrollIntoView({ behavior: "smooth" });
//       }
//       if (workshopRefSm.current) {
//         workshopRefSm.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   const handleImageLoad = useCallback(() => {
//     setImagesLoaded(true);
//   }, []);

//   useEffect(() => {
//     handleCardClick(workshopDetails[activeWorkshop]);
//   }, [workshop, imagesLoaded]);

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative">
//         <div>
//           <img
//             className="hidden md:block h-full w-full"
//             src={WorkshopHero}
//             alt="Workshop background"
//             onLoad={handleImageLoad}
//           />
//           <img
//             className="block md:hidden w-full"
//             src={WorkshopHeroSmall}
//             alt="Workshop background"
//             onLoad={handleImageLoad}
//           />
//         </div>
//         <div className="absolute w-[70%] md:w-1/2 text-white md:left-[27%] top-10 pl-6 md:pl-0 text-start md:top-1/2 md:-translate-y-[60%] md:-translate-x-1/2 font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
//           Making mentoring accessible, engaging, and impactful for all.
//           <div className="relative right-14 md:left-32">
//             .<span className="font-extrabold">.</span>.
//           </div>
//           <div>
//             <img
//               className="hidden md:block w-14 absolute -bottom-14 left-2/3"
//               src={workshopArrow}
//               alt="fun icon"
//             />
//             <img
//               className="block md:hidden w-14 absolute top-10 left-[110%]"
//               src={workshopArrow}
//               alt="fun icon"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Workshop Listing Section */}
//       <div className="relative flex flex-col items-center bg-darkClouds bg-cover bg-no-repeat pt-20 gap-4">
//         <div className="absolute -top-14 left-4 md:-top-32 lg:-top-44 md:left-20">
//           <img
//             className="w-1/3 md:w-[50%] lg:w-2/3"
//             src={WorkshopAlarm}
//             alt="alarm image"
//           />
//         </div>
//         {/* First row: 3 images */}
//         <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-0 w-full gap-12 md:gap-4">
//           {workshopDetails.slice(0, 3).map((item, index) => (
//             <div
//               onClick={() => handleCardClick(item)}
//               className="flex justify-center w-full lg:w-1/3"
//               key={index}
//             >
//               <img
//                 className="w-[70%] md:w-[85%] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
//                 src={item.img}
//                 alt={item.name}
//               />
//             </div>
//           ))}
//         </div>
//         {/* Second row: 2 centered images */}
//         <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-0 w-full gap-12 md:gap-4">
//           {workshopDetails.slice(3).map((item, index) => (
//             <div
//               onClick={() => handleCardClick(item)}
//               className="flex justify-center w-full lg:w-1/3"
//               key={index}
//             >
//               <img
//                 className="w-[70%] md:w-[80%] cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
//                 src={item.img}
//                 alt={item.name}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Workshop Section */}
//         <div
//           ref={workshopRefLg}
//           className="hidden lg:flex relative flex-col w-full h-full max-w-7xl pt-10 space-y-10"
//         >
//           <img
//             className="w-full h-full"
//             src={workshopBlueBg}
//             alt="blue bg"
//             onLoad={handleImageLoad}
//           />
//           <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] space-y-5">
//             <div className="font-base text-4xl md:text-5xl text-white flex items-center justify-center m-auto">
//               <img src={workshopStar} alt="star" /> {selectedWorkshop.name}{" "}
//               <img src={workshopStar} alt="star" />
//             </div>
//             <div className="flex flex-col lg:flex-row items-center justify-between px-14 gap-8">
//               <div className="w-[60%]">
//                 <video
//                   className="rounded-lg pl-4"
//                   src={selectedWorkshop.video}
//                   width="800"
//                   height="400"
//                   controls
//                   controlsList="nodownload"
//                 ></video>
//               </div>
//               <div className="w-[60%] space-y-4">
//                 <div className="font-medium leading-tight tracking-wide text-2xl">
//                   {selectedWorkshop.desc}
//                 </div>
//                 <div className="relative left-16 px-8 py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
//                   <img
//                     onClick={() => setShowForm(true)}
//                     className="w-1/2"
//                     src="/assets/home/talktous.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile card section */}
//         <div ref={workshopRefSm} className="relative flex lg:hidden flex-col">
//           <img
//             className="w-full h-full"
//             src={WorkshopCardSmall}
//             alt="blue bg"
//             onLoad={handleImageLoad}
//           />
//           <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] px-8 md:-translate-y-[66%] space-y-5">
//             <div className="font-base text-3xl md:text-5xl text-white flex items-center justify-center m-auto">
//               <img src={workshopStar} alt="star" /> {selectedWorkshop.name}{" "}
//               <img src={workshopStar} alt="star" />
//             </div>
//             <div className="flex flex-col lg:flex-row items-center justify-between space-y-4">
//               <div className="w-full">
//                 <video
//                   className="rounded-lg"
//                   src={selectedWorkshop.video}
//                   width="800"
//                   height="400"
//                   controls
//                   controlsList="nodownload"
//                 ></video>
//               </div>
//               <div className="w-full space-y-4">
//                 <div className="font-medium leading-tight tracking-wide text-xl md:text-2xl">
//                   {selectedWorkshop.desc}
//                 </div>
//                 <div className="relative flex items-center justify-center left-0 px-8 py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
//                   <img
//                     onClick={() => setShowForm(true)}
//                     className="w-[30%]"
//                     src="/assets/home/talktous.png"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {showForm && (
//         <Dialog open={showForm} onOpenChange={() => setShowForm(false)}>
//           <DialogContent className="z-[999999] bg-transparent border-0">
//             <DialogHeader>
//               <DialogClose asChild>
//                 <button className="absolute top-16 right-[2rem] lg:right-[2.5rem] text-gray-600 hover:text-gray-800 text-2xl font-bold sm:text-2xl z-[99999] shadow-2xl">
//                   &times;
//                 </button>
//               </DialogClose>
//             </DialogHeader>
//             <DialogDescription>
//               <WorkshopForm selectedWorkshop={selectedWorkshop.name} />
//             </DialogDescription>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default ComicWorkshop;

const WorkshopsPage = () => {
  enum WorkshopType {
    buddyCamp = "6-12",
    teenCamp = "13-19",
    "20+Camp" = "20+",
    familyCamp = "Parents",
  }
  const [activeCategory, setActiveCategory] = React.useState<string>(
    WorkshopType.buddyCamp
  );
  const [showForm, setShowForm] = React.useState<boolean>(false);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section>
      <div className="w-full relative">
        {/* <img
          src="/assets/images/workshop-cloud.png"
          alt=""
          className="w-full object-cover"
        /> */}
        <div
          className={`flex items-center justify-center space-x-2 pt-12  ${
            activeCategory === "6-12"
              ? "bg-[#ffe5c8]"
              : activeCategory === "13-19"
              ? "bg-[#ffe899]"
              : "bg-[#ffecc4]"
          }`}
        >
          <div
            className="w-[20%] md:w-[10%]"
            onClick={() => handleCategoryChange(WorkshopType.buddyCamp)}
          >
            <img
              src={`/assets/images/${
                activeCategory === "6-12"
                  ? "6-12-active-purple.png"
                  : "6-12-purple.png"
              }`}
              alt=""
              className="w-full  object-cover"
            />
          </div>
          <div
            className="w-[20%] md:w-[10%]"
            onClick={() => handleCategoryChange(WorkshopType.teenCamp)}
          >
            <img
              src={`/assets/images/${
                activeCategory === "13-19"
                  ? "13-19-active-purple.png"
                  : "13-19-purple.png"
              }`}
              alt=""
              className="w-36 object-cover"
            />
          </div>
          <div
            className="w-[27%] md:w-[14%]"
            onClick={() => handleCategoryChange(WorkshopType["20+Camp"])}
          >
            <img
              src={`/assets/images/${
                activeCategory === "20+"
                  ? "20+-active-purple.png"
                  : "20+-purple.png"
              }`}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div
            className=" w-[20%] md:w-[10%]"
            onClick={() => handleCategoryChange(WorkshopType.familyCamp)}
          >
            <img
              src={`/assets/images/${
                activeCategory === "Parents"
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
          {activeCategory === "Parents" && <WorkshopsPage3 />}
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
                  <WorkshopForm
                    selectedWorkshop={activeCategory}
                    setShowForm={setShowForm}
                  />
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
    <section className="">
      <div className="w-full relative">
        <img
          src="/assets/images/buddy-camp-cloud.png"
          alt=""
          className="hidden md:block w-full object-cover"
        />
        <img
          src="/assets/images/buddy_camp_cloud_sm.svg"
          alt=""
          className="block md:hidden w-full"
        />
        <div className="absolute w-full h-full top-0">
          <div className="flex items-center justify-center pt-4">
            <img
              src="/Buddy camp.png"
              alt=""
              className="block md:hidden w-[85%] object-cover"
            />
          </div>
          <div className="flex flex-col md:flex-row items-start justify-center md:justify-between">
            <div className="md:w-[50%] flex flex-col items-center md:items-start">
              <img
                src="/assets/images/workshop-hero-text.png"
                alt=""
                className="w-[100%]  p-4  md:pt-12 md:px-12  object-cover"
              />
              <img
                src="/assets/images/workshop-subtext.png"
                alt=""
                className="hidden md:block w-[80%]  px-4  md:pt-0 md:px-12  object-cover"
              />
            </div>
            <div className="md:w-[50%]">
              <img
                src="/assets/images/workshop-hero.png"
                alt=""
                className="w-[90%] mx-auto object-cover "
              />
              <img
                src="/assets/images/workshop-subtext.png"
                alt=""
                className="block md:hidden w-[80%]  px-4  md:pt-0 md:px-12  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-12">
        <img
          className="hidden md:block"
          src="/assets/images/workshop-info-bg.png"
          alt=""
        />
        <img
          className="block md:hidden"
          src="/assets/images/workshop-info-bg-sm.svg"
          alt=""
        />
        <div className="absolute top-0  w-full h-full flex flex-col md:flex-row">
          <div className="md:w-[50%] h-full">
            <div>
              <img
                src="/assets/images/issue-text.png"
                alt=""
                className="hidden md:block w-full object-cover p-4  md:p-12"
              />
              <img
                src="/assets/images/issue-text-sm.svg"
                alt=""
                className="block md:hidden w-full p-8"
              />
            </div>
            <div>
              <img
                src="/assets/images/issue-illustration.png"
                alt=""
                className="hidden md:block w-full object-cover p-4 pt-0 md:p-12 md:pt-0 "
              />
              <img
                src="/assets/images/issue-illustration-sm.svg"
                alt=""
                className="absolute bottom-0 block md:hidden w-full object-cover p-4 pt-0 md:p-12 md:pt-0 "
              />
            </div>
          </div>
          <div className="hidden md:block w-[50%] h-full  relative">
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
          <div className="block md:hidden md:w-[50%] h-full p-4 absolute top-[4rem]">
            <img
              src="/assets/images/mentoons-tv.png"
              alt=""
              className="w-full object-cover p-2 pt-4 pr-3"
            />
            <div>
              <video
                playsInline
                webkit-playsinline
                src="https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/Children+Common+Issues.mp4"
                className=" w-[47%] absolute top-[13%] left-[25%]"
                autoPlay
                controls
                muted
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex relative">
        <div className="w-full md:w-[50%] h-full">
          <div className="w-full">
            <img
              src="/assets/images/buddy-camp-info.png"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-[50%] h-full">
          <img
            src="/assets/images/buddy-camp-illustration.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="block md:hidden relative">
        <img
          src="/assets/images/buddy-camp-info-sm.svg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="block md:hidden relative">
        <div>
          <img
            src="/assets/images/buddy-camp-creamCover-sm.svg"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="absolute top-8">
          <img
            src="/assets/images/buddy-camp-info2-sm.svg"
            alt=""
            className="w-full object-cover p-4"
          />
        </div>
        <div className="absolute bottom-8 flex items-center justify-center">
          <img
            src="/assets/images/solution-illustration-sm.svg"
            alt=""
            className="w-[80%]"
          />
        </div>
      </div>
      <div className="block md:hidden">
        <div className="px-8 py-2">
          <img src="/assets/images/buddy-camp-childParent-header.svg" alt="" />
        </div>
        <div>
          <img src="/assets/images/buddy-camp-childParent-sm.svg" alt="" />
        </div>
      </div>
      <div className="relative block md:hidden">
        <img
          src="/assets/images/buddy-contactform-sm.svg"
          className=""
          alt=""
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
