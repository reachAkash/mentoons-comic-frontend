import { Toaster } from "@/components/ui/sonner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AudioComicPage from "./pages/AudioComicPage";
import Cart from "./pages/Cart";
import ComicsPage from "./pages/ComicsPage";
import Workshops from "./components/Workshops";
import ComicsHome from "./components/ComicsHome";
import ComicCard from "./components/HoverCardComic";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import PodCast from "./pages/PodCast";
import ProgressScroller from "./components/ProgressScroller";
import ScrollToTop from "./components/ScrollToTop";
import { SearchPage } from "./pages/SearchPage";
import SlidingText from "./components/SlidingText";
import Wishlist from "./pages/Wishlist";
import WebHome from "./pages/WebHome";
import FAQ from "./components/common/FAQ";
import Plans from "./components/common/Plans";
import Footer from "./components/Footer";

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
        <Route path="/mentoons-comics" element={<ComicsHome />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/audio-comic" element={<AudioComicPage />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/comics-list" element={<ComicsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mentoons-podcast" element={<PodCast />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/website-plans" element={<Plans />} />
      </Routes>
      <SlidingText />
      <Footer/>
      <Toaster />
      {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}

      <ProgressScroller />
    </>
  );
}

export default App;