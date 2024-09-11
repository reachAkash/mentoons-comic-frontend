import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ScrollToTop from "./components/comics/ScrollToTop";
import { Toaster } from "sonner";
import ProgressScroller from "./components/comics/ProgressScroller";
import ComicCard from "./components/comics/HoverCardComic";
import Loader from "./components/common/Loader";
import Popup from "./layout/Popup";

// Lazy load the pages
const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth/Auth"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Cart = lazy(() => import("./pages/Cart"));
const ComicsPage = lazy(() => import("./pages/ComicsPage"));
const ComicsHome = lazy(() => import("@/pages/ComicsHome"));
const FreeDownload = lazy(() => import("./pages/FreeDownload"));
const AudioComicPage = lazy(() => import("./pages/AudioComicPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Career = lazy(() => import("./components/shared/CareerPage/Career"));
const PodCast = lazy(() => import("./pages/PodCast"));
const FAQ = lazy(() => import("./components/common/FAQ"));
const Plans = lazy(() => import("./components/common/Plans"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Workshops = lazy(() => import("./pages/WorkshopsPage"));

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
    path: "/register",
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
        <ComicsHome />
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
        <ComicsPage page="Audio Comics" />
      </MainLayout>
    ),
  },
  {
    path: "/mentoons-comics/comics",
    element: (
      <MainLayout>
        <ComicsPage page="Comics" />
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
        <ComicsPage page="Our Comics Collection" />
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
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const hoverComicCard = useSelector(
    (store: RootState) => store.comics.currentHoverComic
  );

  const userLoggedIn = useSelector(
    (store: RootState) => store.user.userLoggedIn
  );

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      <Toaster />
      {hoverComicCard !== null && <ComicCard item={hoverComicCard} />}
      <ProgressScroller />
      {showPopup && userLoggedIn && (
        <Popup
          item={{
            name: "Electronic Gadgets And Kids",
            image:
              "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/mini_images/1-13.jpg",
          }}
          setShowPopup={setShowPopup}
        />
      )}
    </>
  );
};

export default Router;
