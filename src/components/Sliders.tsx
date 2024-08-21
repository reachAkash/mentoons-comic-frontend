import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import User2 from "@/assets/imgs/user2.png";
import User3 from "@/assets/imgs/user3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookSquare, FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  FaLinkedin,
  FaRegStarHalfStroke,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
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
import Dhanashekar from "@/assets/imgs/dhanasekar Illustration.jpg";
import Dhinesh from "@/assets/imgs/Dhinesh Illustration.jpg";
import Sankar from "@/assets/imgs/sankar Illustration.jpg";
import Ajay from "@/assets/imgs/ajay Illustration.jpg";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="rounded-2xl bg-white py-4 px-6 space-y-6"
        >
          <div className="space-y-5 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary text-3xl" />
            <div className="text-lg">2 Minutes Ago</div>
            <div className="h-[5rem]">
              These comics have helped my child understand difficult topics in a
              fun way!
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
            <img className="w-16 rounded-full" src={User2} />- Parent
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="rounded-2xl bg-white py-4 px-6 space-y-6"
        >
          <div className="space-y-5 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary text-3xl" />
            <div className="text-lg">2 Minutes Ago</div>
            <div className="h-[5rem]">
              I love how the stories teach me about friendship and growing up.
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
            <img className="w-16 rounded-full" src={User3} />- Dhruv, Age 12
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="rounded-2xl bg-white py-4 px-6 space-y-6"
        >
          <div className="space-y-5 border-b border-gray-500 py-4">
            <FaQuoteLeft className="text-primary text-3xl" />
            <div className="text-lg">2 Minutes Ago</div>
            <div className="h-[5rem]">
              These comics have helped my child understand difficult topics in a
              fun way!
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
            <img className="w-16 rounded-full" src={User2} />- Parent
          </div>
        </motion.div>
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
          slidesPerView: 1, // Show only 1 card on mobile
        },
        // From 767 px (tablet size)
        767: {
          slidesPerView: 2,
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
            <div className="text-2xl text-extrabold">Parent</div>
            <div className="text-sm">
              These comics have helped my child understand difficult topics in a
              fun way!
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
            <div className="text-2xl text-extrabold">Sachin</div>
            <div className="text-sm">
              I love how the stories teach me about friendship and growing up.
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="rounded-2xl shadow-sm flex items-center bg-white pb-4 px-4 space-y-6 gap-4">
          <div className="flex items-center justify-center gap-6 font-semibold text-xl">
            <img
              className="w-14 rounded-full flex-shrink-0"
              src={TestimonialImg2}
            />
          </div>
          <div className="space-y-2">
            <div className="text-2xl text-extrabold">Parent</div>
            <div className="text-sm">
              These comics have helped my child understand difficult topics in a
              fun way!
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
            <div className="text-2xl text-extrabold">Sachin</div>
            <div className="text-sm">
              I love how the stories teach me about friendship and growing up.
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

export const TeamSlider: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true} // Enable infinite looping
      navigation={false}
      className="w-full"
      breakpoints={{
        // Up to 767px (mobile size)
        0: {
          slidesPerView: 2, // Show only 1 card on mobile
        },
        // From to 767px (mobile size)
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-1 group"
        >
          <div className="overflow-hidden relative rounded-full">
            <img
              className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
              src={Dhanashekar}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-xl">Dhanashekar</div>
            <div className="text-base">Sketch Artist</div>
            <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
              <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
              <FaTwitter className="cursor-pointer text-[#d71515]" />
              <FaLinkedin className="cursor-pointer text-[#d71515]" />
              <FaYoutube className="cursor-pointer text-[#d71515]" />
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-1 group"
        >
          <div className="overflow-hidden relative rounded-full">
            <img
              className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
              src={Ajay}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-xl">Ajay</div>
            <div className="text-base">Video Editor</div>
            <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
              <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
              <FaTwitter className="cursor-pointer text-[#d71515]" />
              <FaLinkedin className="cursor-pointer text-[#d71515]" />
              <FaYoutube className="cursor-pointer text-[#d71515]" />
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-1 group"
        >
          <div className="overflow-hidden relative rounded-full">
            <img
              className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
              src={Dhinesh}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-xl">Dhinesh</div>
            <div className="text-base">Graphic Designer</div>
            <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
              <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
              <FaTwitter className="cursor-pointer text-[#d71515]" />
              <FaLinkedin className="cursor-pointer text-[#d71515]" />
              <FaYoutube className="cursor-pointer text-[#d71515]" />
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
      <SwiperSlide>
        <motion.div
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-1 group"
        >
          <div className="overflow-hidden relative rounded-full">
            <img
              className="rounded-full w-[40rem] border-4 border-white group-hover:scale-110 transition-all duration-300 ease-in-out"
              src={Sankar}
              alt=""
            />
          </div>
          <div>
            <div className="font-semibold text-xl">Sankar</div>
            <div className="text-base">Illustrator</div>
            <div className="invisible group-hover:visible flex items-center justify-center gap-4 pt-4">
              <FaFacebookSquare className="cursor-pointer text-[#d71515]" />
              <FaTwitter className="cursor-pointer text-[#d71515]" />
              <FaLinkedin className="cursor-pointer text-[#d71515]" />
              <FaYoutube className="cursor-pointer text-[#d71515]" />
            </div>
          </div>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
