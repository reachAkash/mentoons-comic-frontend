import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import SlidingText from "./components/SlidingText";
import ProgressScroller from "./components/ProgressScroller";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <SlidingText />
      <ProgressScroller />
    </>
  );
}

export default App;
