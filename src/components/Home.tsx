import React from "react";
import AboutSection from "./AboutSection";
import NewComics from "./NewComics";
import PopularComics from "./AudioComics";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Blogs from "./Blogs";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { lazy } from "react";
const Team = lazy(() => import("./Team"));
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
