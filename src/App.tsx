import { Toaster } from "@/components/ui/sonner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ComicsPage from "./pages/ComicsPage";
import Workshops from "./components/comics/WorkshopsPage";
import ComicsHome from "./components/comics/ComicsHome";
import ComicCard from "./components/comics/HoverCardComic";
import Navbar from "./components/comics/Navbar";
import NotFound from "./pages/NotFound";
import PodCast from "./pages/PodCast";
import ProgressScroller from "./components/comics/ProgressScroller";
import ScrollToTop from "./components/comics/ScrollToTop";
import { SearchPage } from "./pages/SearchPage";
import Wishlist from "./pages/Wishlist";
import WebHome from "./pages/WebHome";
import FAQ from "./components/common/FAQ";
import Plans from "./components/common/Plans";
import Footer from "./components/comics/Footer";
import AudioComicPage from "./pages/AudioComicPage";

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
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mentoons-comics" element={<ComicsHome />} />
        <Route
          path="/mentoons-comics/audio-comics"
          element={<ComicsPage page="Audio Comics" />}
        />
        <Route
          path="/mentoons-comics/comics"
          element={<ComicsPage page="Comics" />}
        />
        <Route path="/mentoons-workshops" element={<Workshops />} />
        <Route
          path="/mentoons-comics/comics-list"
          element={<ComicsPage page="Our Comics Collection" />}
        />
        <Route
          path="/mentoons-comics/audio-comics/:comic"
          element={<AudioComicPage />}
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/mentoons-podcast" element={<PodCast />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/website-plans" element={<Plans />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
      {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}
      <ProgressScroller />
    </>
  );
}

export default App;
