import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import User1 from "@/assets/imgs/user1.png";
import User2 from "@/assets/imgs/user2.png";
import User3 from "@/assets/imgs/user3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Wordbreak from "./Wordbreak";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import React from "react";
import TestimonialImg2 from "@/assets/imgs/testimonials2.jpg";
import TestimonialImg4 from "@/assets/imgs/testemonials4.jpg";
import Comic1 from "@/assets/imgs/comic1.jpg";
import Comic2 from "@/assets/imgs/comic2.jpg";
import Comic3 from "@/assets/imgs/comic3.jpg";
import Comic4 from "@/assets/imgs/comic4.jpg";
import Comic5 from "@/assets/imgs/comic5.jpg";
import Comic6 from "@/assets/imgs/comic6.jpg";
import Comic7 from "@/assets/imgs/comic7.jpg";
import Comic8 from "@/assets/imgs/comic8.jpg";
import Comic9 from "@/assets/imgs/comic9.jpg";

const TestimonialsSlider: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} // Enable infinite looping
      className="py-10 w-full md:w-[55%]"
      breakpoints={{
        // Up to 767px (mobile size)
        0: {
          slidesPerView: 1, // Show only 1 card on mobile
        },
        // Above 1024px (desktop size)
        1024: {
          slidesPerView: 2, // Show 3 cards on desktop (default)
        },
      }}
    >
      <SwiperSlide>
        <div className="rounded-2xl bg-white py-4 px-6 space-y-6">
          <div className="space-y-5 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary text-3xl" />
            <div className="text-lg">2 Minutes Ago</div>
            <div className="">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit. <Wordbreak /> Nemo assumenda porro quae quos. Lorem, ipsum
              dolor.
            </div>
            <div className="flex items-center justify-between w-fit text-xl">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaRegStarHalfStroke className="text-yellow-500" />
            </div>
          </div>
          <div className="flex items-center justify-start gap-6 font-semibold text-xl">
            <img className="w-16 rounded-full" src={User2} />
            Akash Gupta
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl bg-white py-4 px-6 space-y-6">
          <div className="space-y-5 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary text-3xl" />
            <div className="text-lg">2 Minutes Ago</div>
            <div className="">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit. <Wordbreak /> Nemo assumenda porro quae quos. Lorem, ipsum
              dolor.
            </div>
            <div className="flex items-center justify-between w-fit text-xl">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaRegStarHalfStroke className="text-yellow-500" />
            </div>
          </div>
          <div className="flex items-center justify-start gap-6 font-semibold text-xl">
            <img className="w-16 rounded-full" src={User3} />
            Akash Gupta
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl bg-white py-4 px-6 space-y-6">
          <div className="space-y-5 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary text-3xl" />
            <div className="text-lg">2 Minutes Ago</div>
            <div className="">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit. <Wordbreak /> Nemo assumenda porro quae quos. Lorem, ipsum
              dolor.
            </div>
            <div className="flex items-center justify-between w-fit text-xl">
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaStar className="text-yellow-500 text-xl" />
              <FaRegStarHalfStroke className="text-yellow-500" />
            </div>
          </div>
          <div className="flex items-center justify-start gap-6 font-semibold text-xl">
            <img className="w-16 rounded-full" src={User1} />
            Akash Gupta
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export const MiniTestimonailsSlider: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} // Enable infinite looping
      className="py-10 w-full"
      breakpoints={{
        // Up to 767px (mobile size)
        0: {
          slidesPerView: 2, // Show only 1 card on mobile
        },
        // Above 1024px (desktop size)
        1024: {
          slidesPerView: 3, // Show 3 cards on desktop (default)
        },
      }}
    >
      <SwiperSlide>
        <div className="rounded-2xl shadow-sm flex items-center bg-white pb-4 px-4 space-y-6 gap-4">
          <div className="flex items-center justify-center gap-6 font-semibold text-xl">
            <img
              className="w-14 rounded-full flex-shrink-0"
              src={TestimonialImg2}
            />
          </div>
          <div className="space-y-2">
            <div className="text-2xl text-extrabold">Srishti</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-sm flex items-center bg-white pb-4 px-4 space-y-6 gap-4">
          <div className="flex items-center justify-center gap-6 font-semibold text-xl">
            <img
              className="w-14 rounded-full flex-shrink-0"
              src={TestimonialImg4}
            />
          </div>
          <div className="space-y-2">
            <div className="text-2xl text-extrabold">Akash</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-sm flex items-center bg-white pb-4 px-4 space-y-6 gap-4">
          <div className="flex items-center justify-center gap-6 font-semibold text-xl">
            <img className="w-14 rounded-full flex-shrink-0" src={User3} />
          </div>
          <div className="space-y-2">
            <div className="text-2xl text-extrabold">Aman</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-sm flex items-center bg-white pb-4 px-4 space-y-6 gap-4">
          <div className="flex items-center justify-center gap-6 font-semibold text-xl">
            <img
              className="w-14 rounded-full flex-shrink-0"
              src={TestimonialImg4}
            />
          </div>
          <div className="space-y-2">
            <div className="text-2xl text-extrabold">Akash</div>
            <div className="text-sm">
              Lorem ipsum dolor sit amet, <Wordbreak /> consectetur adipisicing
              elit.
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export const ComicSlider: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} // Enable infinite looping
      navigation={true}
      className="py-10 w-full lg:w-[80%]"
      breakpoints={{
        // Up to 767px (mobile size)
        0: {
          slidesPerView: 1, // Show only 1 card on mobile
        },
      }}
    >
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic1} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic2} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic3} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic4} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic5} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic6} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic7} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic8} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center justify-center">
          <img className="w-[30rem] lg:w-[22rem]" src={Comic9} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
