import { Toaster } from "@/components/ui/sonner";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ComicsHome from "./components/ComicsHome";
import FAQ from "./components/common/FAQ";
import Plans from "./components/common/Plans";
import Footer from "./components/Footer";
import ComicCard from "./components/HoverCardComic";
import Navbar from "./components/Navbar";
import ProgressScroller from "./components/ProgressScroller";
import ScrollToTop from "./components/ScrollToTop";
import { SearchPage } from "./components/Search";
import Workshops from "./components/WorkshopsPage";
import AudioComicPage from "./pages/AudioComicPage";
import Cart from "./pages/Cart";
import ComicsPage from "./pages/ComicsPage";
import NotFound from "./pages/NotFound";
import PodCast from "./pages/PodCast";
import PodcastDetails from "./pages/PodcastDetails";
import WebHome from "./pages/WebHome";
import Wishlist from "./pages/Wishlist";
function App() {
  const hoverComicCard = useSelector(
    (store: RootState) => store.comics.currentHoverComic
  );

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<WebHome />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mentoons-comics' element={<ComicsHome />} />
        <Route
          path='/mentoons-comics/audio-comics'
          element={<ComicsPage page='Audio Comics' />}
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
        <Route path='/' element={<WebHome />} />
        <Route path='/mentoons-comics' element={<ComicsHome />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/audio-comic' element={<AudioComicPage />} />
        <Route path='/mentoons-workshops' element={<Workshops />} />
        <Route path='/comics-list' element={<ComicsPage page='' />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/mentoons-podcast' element={<PodCast />} />
        {/* <Route
          path='/mentoons-podcast/category/:id'
          element={<PodcastDetails />}
        /> */}
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
