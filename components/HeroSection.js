import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide14 from '../public/images/slide14.jpg'
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Parallax, Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

const HeroSection = () => {

  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        speed={1000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
       <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              "url(/images/slide14.jpg)",
            "objectFit": 'cover'
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide >
           <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={slide14} layout="responsive" alt="img1" objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={slide14} layout="responsive" alt="img1" objectFit="cover"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSection
