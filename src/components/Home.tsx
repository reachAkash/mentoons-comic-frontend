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
import { ComicCard } from "./HoverCardComic";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Team = lazy(() => import("./Team"));
const Home: React.FC = () => {
  const comicsData = useSelector((store: RootState) => store.comics.comics);
  const comic = comicsData.slice(0, 1)[0];

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
      <ComicCard item={comic} />
    </>
  );
};

export default Home;
