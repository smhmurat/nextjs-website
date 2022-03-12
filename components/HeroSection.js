import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
        <SwiperSlide>
          <div className='relative'>
            <Image
              src="/images/slide1.jpg"
              width={1440}
              height={720}
              layout="responsive"
              alt="img1"
              objectFit="cover"
            />
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cloud-color p-12 rounded-lg backdrop-opacity-40'>
              <h1 className='text-primary-color opacity-100 uppercase mb-4'>Deneyimli Ekibimizle</h1>
              <h1 className='text-primary-color opacity-100'>YERLİ VE YABANCI ŞİRKETLER İLE BİREYLER TEMSİL EDİLMEKTE,
                ÇÖZÜM ODAKLI, KAPSAMLI HUKUKİ DANIŞMANLIK VE DAVA TAKİP HİZMETLERİ
                SUNULMAKTADIR.</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
              src="/images/slide1.jpg"
              width={1440}
              height={720}
              layout="responsive"
              alt="img1"
              objectFit="cover"
            />
        </SwiperSlide>
        <SwiperSlide>
          <Image
              src="/images/slide1.jpg"
              width={1440}
              height={720}
              layout="responsive"
              alt="img1"
              objectFit="cover"
            />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
