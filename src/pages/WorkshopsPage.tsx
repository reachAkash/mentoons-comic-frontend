import WorkshopForm from "@/components/common/WorkshopForm";
import BuddyCamp from "@/components/shared/Workshop/BuddyCamp";
import CareerCorner from "@/components/shared/Workshop/CareerCorner";
import FamilyCamp from "@/components/shared/Workshop/FamilyCamp";
import TeenCamp from "@/components/shared/Workshop/TeenCamp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

export interface WorkshopItems {
  name: string;
  desc: string;
  img: string;
  video: string;
  pageUrl: string;
}

const WorkshopsPage = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("6-12");
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
          className={`flex items-center justify-center pt-12  ${
            activeCategory === "6-12"
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
            className=" w-[10%]"
            onClick={() => handleCategoryChange("13-19")}
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
          <div className="w-[14%]" onClick={() => handleCategoryChange("20+")}>
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
            className=" w-[10%]"
            onClick={() => handleCategoryChange("parents")}
          >
            <img
              src={`/assets/images/${
                activeCategory === "parents"
                  ? "parents-active-purple.png"
                  : "parents-purple.png"
              }`}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
        <div>
          {activeCategory === "6-12" && <BuddyCamp />}
          {activeCategory === "13-19" && <TeenCamp />}
          {activeCategory === "Parents" && <FamilyCamp />}
          {activeCategory === "20+" && <CareerCorner />}
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
