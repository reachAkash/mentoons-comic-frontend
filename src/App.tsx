import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import SlidingText from "./components/SlidingText";
import ProgressScroller from "./components/ProgressScroller";
import ComicWorkshop from "./components/ComicWorkshop";
import NotFound from "./components/NotFound";
import AudioComicPage from "./components/AudioComicPage";
import ComicsPage from "./components/ComicsPage";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "@/components/ui/sonner";
import { SearchPage } from "./components/Search";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/audio-comic" element={<AudioComicPage />} />
        <Route path="/workshops" element={<ComicWorkshop />} />
        <Route path="/comics-list" element={<ComicsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SlidingText />
      <Toaster />
      <ProgressScroller />
    </>
  );
}

export default App;
