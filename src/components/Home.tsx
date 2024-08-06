import React from "react";
import AboutSection from "./AboutSection";
import NewComics from "./NewComics";
import PopularComics from "./AudioComics";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Blogs from "./Blogs";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewComics />
      <PopularComics />
      <Team />
      <Testimonials />
      <Pricing />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
