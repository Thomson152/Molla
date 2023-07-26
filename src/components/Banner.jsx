import React from "react";
import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { EffectFade } from "swiper";

import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div className="flex md:flex-row justify-between md:space-x-8 md:space-y-0 space-y-6 xl:px-12 lg:px-8 px-3  flex-col mt-8 ">
      <div className=" md:max-w-[70%] w-[100%]">
        <Swiper
          spaceBetween={50}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          effect={"fade"}
          speed={1000}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="">
              <img
                src={slide1}
                className="shadow-sm w-[900px] md:h-[350px] sm:h-[270px]"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="">
              <img
                src={slide2}
                className="shadow-sm w-[900px] md:h-[350px] sm:h-[270px]"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex md:w-[30%] w-[100%]   flex-col  gap-y-7">
        <div className="">
          <img
            src={banner1}
            className="shadow-sm w-[1000px] sm:h-[100px]  "
            alt=""
          />
        </div>

        <div className="">
          <img
            src={banner2}
            className="shadow-sm  w-[1000px] sm:h-[100px]"
            alt=""
          />
        </div>

        <div className="">
          <img
            src={banner3}
            className="shadow-sm w-[1000px] sm:h-[100px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
