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
          delay: 5000,
          disableOnInteraction: true,
        }}
        speed={1200}
      >
      <SwiperSlide>
          <Image
              src="/images/banner-img2.jpg"
              width={1440}
              height={720}
              layout="responsive"
              alt="img1"
              objectFit="cover"
            />
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <Image
              src="/images/banner-img1.jpg"
              width={1440}
              height={720}
              layout="responsive"
              alt="img1"
              objectFit="cover"
            />
            <div className='absolute left-0 lg:left-1/2 top-0 lg:top-1/3 lg:-translate-y-1/2 p-4 lg:p-12 rounded-lg backdrop-opacity-40'>
              <h1 className='text-primary-color font-bold text-lg text-center lg:text-4xl uppercase mb-2 lg:mb-4'>Murat Hukuk & Danışmanlık</h1>
              <p className='text-primary-color text-xs lg:text-lg'>HEDEFİMİZ; ÖNCELİKLE UYUŞMAZLIĞI ÖNLEMEK, MEVCUT UYUŞMAZLIK DURUMUNDA İSE EN HIZLI VE MAKSİMUM FAYDAYI TEMİN EDECEK ŞEKİLDE ÇÖZÜME KAVUŞTURABİLMEK VE HUKUKU HERKES İÇİN UYGULANABİLİR HALE GETİRMEK, MÜVEKKİLLERİMİZİN GERÇEK İHTİYAÇLARI VE AMAÇLARI ÜZERİNE ODAKLANILARAK 
KALİTELİ VE HIZLI HİZMET SAYESİNDE
UZUN SÜRELİ VE KALICI ÇALIŞMA SAĞLAMAKTIR.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
              src="/images/banner-img3.jpg"
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
