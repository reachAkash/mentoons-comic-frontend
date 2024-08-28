import React, { Suspense } from "react";
import AboutSection from "./AboutSection";
import NewComics from "./NewComics";
import AudioComics from "./AudioComics";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Blogs from "./Blogs";
import HeroSection from "./HeroSection";
// import Team from "./Team";
import { lazy } from "react";
const Team = lazy(() => import("./Team"));

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewComics />
      <AudioComics />
      <Suspense fallback={<div>Loading...</div>}>
        <Team />
      </Suspense>
      <Testimonials />
      <Pricing />
      <Blogs />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
