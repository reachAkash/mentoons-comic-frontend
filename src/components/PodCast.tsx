import Footer from "./Footer";

import AgeCategory from "./shared/Categories/AgeCategory";
import Category from "./shared/Category";
import HeroSectionPodcast from "./shared/HeroSectionPodcast";
import HomeSection from "./shared/hompage/HomeSection";
import PodcastSection from "./shared/PodcastSection/PodcastSection";
import Testimonial from "./shared/Testimonial";

const PodCast = () => {
  return (
    <>
      <HeroSectionPodcast />
      {/* CATEGORY */}
      <HomeSection />
      <Category />
      <AgeCategory />
      {/* PODCAST LIST */}
      <PodcastSection />
      {/* Stats section */}
      {/* <StatisticsSection /> */}
      <Testimonial />
      {/* <FrequentlyAskeQuestion /> */}

      {/* FOOTER Section */}
      <Footer />
    </>
  );
};

export default PodCast;
