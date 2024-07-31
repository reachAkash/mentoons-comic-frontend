import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import Brand1 from "@/assets/imgs/brand1.png";
import Brand2 from "@/assets/imgs/brand2.png";
import Brand3 from "@/assets/imgs/brand3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Wordbreak from "./Wordbreak";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const TestimonialsSlider: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true} // Enable infinite looping
      className="py-10"
      breakpoints={{
        // Up to 767px (mobile size)
        0: {
          slidesPerView: 2, // Show only 1 card on mobile
        },
        // Above 1024px (desktop size)
        1024: {
          slidesPerView: 2, // Show 3 cards on desktop (default)
        },
      }}
    >
      <SwiperSlide>
        <div className="rounded-2xl bg-white py-4 px-4 space-y-4">
          <div className="space-y-4 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary" />
            <div>2 Minutes Ago</div>
            <div>
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit. Nemo <Wordbreak />
              assumenda porro quae quos. <Wordbreak /> Lorem, ipsum dolor.
            </div>
            <div className="flex items-center justify-between w-fit text-xl">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaRegStarHalfStroke className="text-yellow-500" />
            </div>
          </div>
          <div></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
