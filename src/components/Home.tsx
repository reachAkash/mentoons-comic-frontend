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
import ComicCard from "./HoverCardComic";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Team = lazy(() => import("./Team"));
const Home: React.FC = () => {
  const hoverComicCard = useSelector(
    (store: RootState) => store.comics.currentHoverComic
  );

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
      {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}
    </>
  );
};

export default Home;
