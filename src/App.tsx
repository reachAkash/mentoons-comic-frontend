import { Toaster } from "@/components/ui/sonner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AudioComicPage from "./components/AudioComicPage";
import Cart from "./components/Cart";
import ComicsPage from "./components/ComicsPage";
import ComicWorkshop from "./components/ComicWorkshop";
import Home from "./components/Home";
import ComicCard from "./components/HoverCardComic";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PodCast from "./components/PodCast";
import ProgressScroller from "./components/ProgressScroller";
import ScrollToTop from "./components/ScrollToTop";
import { SearchPage } from "./components/Search";
import SlidingText from "./components/SlidingText";
import Wishlist from "./components/Wishlist";
import WebHome from "./pages/WebHome";
import FAQ from "./components/common/FAQ";
import Plans from "./components/common/Plans";

function App() {
  const hoverComicCard = useSelector(
    (store: RootState) => store.comics.currentHoverComic
  );

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<WebHome />} />
        <Route path="/mentoons-comics" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/audio-comic" element={<AudioComicPage />} />
        <Route path="/workshops" element={<ComicWorkshop />} />
        <Route path="/comics-list" element={<ComicsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mentoons-podcast" element={<PodCast />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/website-plans" element={<Plans />} />
      </Routes>
      <SlidingText />
      <Toaster />
      {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}

      <ProgressScroller />
    </>
  );
}

export default App;
