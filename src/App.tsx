import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import SlidingText from "./components/SlidingText";
import ProgressScroller from "./components/ProgressScroller";
import ComicWorkshop from "./components/ComicWorkshop";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/audio-comic?:" element={<Cart />} /> */}
        <Route path="/comic-workshop" element={<ComicWorkshop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SlidingText />
      <ProgressScroller />
    </>
  );
}

export default App;
