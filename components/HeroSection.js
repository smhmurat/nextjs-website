import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide14 from '../public/images/slide14.jpg'
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper";

export default function App() {

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1200}
        
        
      >
        <SwiperSlide >
          <Image src={slide14} layout="responsive" alt="img1" objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={slide14} layout="responsive" alt="img1" objectFit="cover"/>
        </SwiperSlide>
        <SwiperSlide >
          <Image src={slide14} layout="responsive" alt="img1" objectFit="cover"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
