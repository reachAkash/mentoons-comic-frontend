import HeroSectionPodcast from "@/components/shared/HeroSectionPodcast";
import HomeSection from "@/components/shared/hompage/HomeSection";
import PodcastSection from "@/components/shared/PodcastSection/PodcastSection";
import Pricing from "@/components/shared/Pricing-Plan";
import Testimonial from "@/components/shared/Testimonial";

const PodCast = () => {
  return (
    <>
      <HeroSectionPodcast />
      {/* CATEGORY */}

      {/* <Category />
      <AgeCategory /> */}
      {/* PODCAST LIST */}
      {/* <CategoryCard /> */}
      <PodcastSection />
      {/* Stats section */}
      {/* <StatisticsSection /> */}

      <HomeSection />
      <Testimonial />
      <section id='pricing'>
        <Pricing />
      </section>
      {/* <FrequentlyAskeQuestion /> */}
      {/* <ContributeYourPodcast /> */}
    </>
  );
};

export default PodCast;
