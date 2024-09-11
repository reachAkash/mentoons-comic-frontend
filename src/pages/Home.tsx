import FeelFree from "@/components/Home/FeelFree";
import HeroBanner from "@/components/Home/HeroBanner";
import MdMultiverse from "@/components/Home/MdMultiverse";
import Struggles from "@/components/Home/Struggles";
import WhatWeOffer from "@/components/Home/WhatWeOffer";

const Home = () => {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <HeroBanner />
      <Struggles />
      <MdMultiverse />
      <WhatWeOffer />
      <FeelFree />
    </div>
  );
};

export default Home;
