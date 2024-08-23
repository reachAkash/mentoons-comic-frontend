import Footer from "@/components/Footer";
import HeroSectionPodcast from "@/components/shared/HeroSectionPodcast";
import HomeSection from "@/components/shared/hompage/HomeSection";
import PodcastSection from "@/components/shared/PodcastSection/PodcastSection";
import Testimonial from "@/components/shared/Testimonial";

const PodCast = () => {
  return (
    <>
      <HeroSectionPodcast />
      {/* CATEGORY */}

      <HomeSection />
      {/* <Category />
      <AgeCategory /> */}
      {/* PODCAST LIST */}
      {/* <CategoryCard /> */}
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
