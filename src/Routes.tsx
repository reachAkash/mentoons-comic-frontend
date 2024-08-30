import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ComicsPage from "./pages/ComicsPage";
import ComicsHome from "./components/comics/ComicsHome";
import FreeDownload from "./pages/FreeDownload";
import AudioComicPage from "./pages/AudioComicPage";
import SearchPage from "./pages/SearchPage";
import Career from "./components/shared/CareerPage/Career";
import PodCast from "./pages/PodCast";
import FAQ from "./components/common/FAQ";
import Plans from "./components/common/Plans";
import NotFound from "./pages/NotFound";
import ProgressScroller from "./components/comics/ProgressScroller";
import ComicCard from "./components/comics/HoverCardComic";
import Workshops from './components/comics/WorkshopsPage'
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ScrollToTop from "./components/comics/ScrollToTop";
import { Toaster } from "sonner";


const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/auth",
    element: (
      <MainLayout>
        <Auth />
      </MainLayout>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <MainLayout>
        <Wishlist />
      </MainLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainLayout>
        <Cart />
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics",
    element: (
      <MainLayout>
        <ComicsHome/>
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics/free-download",
    element: (
      <MainLayout>
        <FreeDownload />
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics/audio-comics",
    element: (
      <MainLayout>
        <ComicsPage  page="Audio Comics"/>
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics/comics",
    element: (
      <MainLayout>
        <ComicsPage page='Comics' />
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-workshops",
    element: (
      <MainLayout>
        <Workshops />
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics/comics-list",
    element: (
      <MainLayout>
        <ComicsPage page='Our Comics Collection'/>
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics/audio-comics/:comic",
    element: (
      <MainLayout>
        <AudioComicPage />
      </MainLayout>
    ),
  },
  {
    path: "/search",
    element: (
      <MainLayout>
        <SearchPage />
      </MainLayout>
    ),
  },
  {
    path: "/hiring",
    element: (
      <MainLayout>
        <Career />
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-podcast",
    element: (
      <MainLayout>
        <PodCast />
      </MainLayout>
    ),
  },
  {
    path: "/faq",
    element: (
      <MainLayout>
        <FAQ />
      </MainLayout>
    ),
  },
  {
    path: "/website-plans",
    element: (
      <MainLayout>
        <Plans />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <NotFound />
      </MainLayout>
    ),
  },
  
];

const Router = () => {
  const hoverComicCard = useSelector(
    (store: RootState) => store.comics.currentHoverComic
  );
  return (
    <>
       <ScrollToTop />
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
    <Toaster />
     {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}
     <ProgressScroller />
     </>
  );
};

export default Router;
