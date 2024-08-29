import { Toaster } from "@/components/ui/sonner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Workshops from "./components/comics/WorkshopsPage";
import ComicsHome from "./components/comics/ComicsHome";
import ComicCard from "./components/comics/HoverCardComic";
import Navbar from "./components/comics/Navbar";
import ProgressScroller from "./components/comics/ProgressScroller";
import ScrollToTop from "./components/comics/ScrollToTop";
import { SearchPage } from "./pages/SearchPage";
import Wishlist from "./pages/Wishlist";
import FAQ from "./components/common/FAQ";
import Plans from "./components/common/Plans";
import Footer from "./components/comics/Footer";
import AudioComicPage from "./pages/AudioComicPage";
import FreeDownload from "./pages/FreeDownload";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ComicsPage from "./pages/ComicsPage";
import NotFound from "./pages/NotFound";
import PodCast from "./pages/PodCast";
function App() {
  const hoverComicCard = useSelector(
    (store: RootState) => store.comics.currentHoverComic
  );

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mentoons-comics" element={<ComicsHome />} />
        <Route
          path="/mentoons-comics/free-download"
          element={<FreeDownload />}
        />
        <Route
          path="/mentoons-comics/audio-comics"
          element={<ComicsPage page="Audio Comics" />}
        />
        <Route
          path='/mentoons-comics/comics'
          element={<ComicsPage page='Comics' />}
        />
        <Route path='/mentoons-workshops' element={<Workshops />} />
        <Route
          path='/mentoons-comics/comics-list'
          element={<ComicsPage page='Our Comics Collection' />}
        />
        <Route
          path='/mentoons-comics/audio-comics/:comic'
          element={<AudioComicPage />}
        />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/mentoons-podcast' element={<PodCast />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/website-plans' element={<Plans />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/mentoons-comics' element={<ComicsHome />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/audio-comic' element={<AudioComicPage />} />
        <Route path='/mentoons-workshops' element={<Workshops />} />
        <Route path='/comics-list' element={<ComicsPage page='' />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/mentoons-podcast' element={<PodCast />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/website-plans' element={<Plans />} />
      </Routes>
      <Footer />
      <Toaster />
      {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}
      <ProgressScroller />
    </>
  );
}

export default App;
