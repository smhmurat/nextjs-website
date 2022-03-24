import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <section className="text-gray-700 body-font bg-none lg:bg-hero-pattern lg:bg-fixed lg:bg-center lg:bg-cover">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color">Hakkımızda
          </h2>
          <p className="mb-4 text-xl font-normal text-primary-color ">
                Avukat Beytullah MURAT İstanbul Üniversitesi&apos;ndeki öğrencilik döneminde ve sonrasında yaklaşık 5 yıl boyunca takip ettiği birçok davayla ve yaptığı danışmanlık işleriyle İstanbul&apos;da kazandığı tecrübe sonrasında 2021 yılında Kayseri’ye gelerek Murat Hukuk & Danışmanlık Bürosunu kurmuştur.
              </p>
              <p className="mb-4 text-xl font-normal text-primary-color">
                Murat Hukuk & Danışmanlık Bürosu, yerli ve yabancı müvekkillerine, ticari yaklaşımlara ve kişisel özelliklere uygun, çözüm odaklı, kapsamlı hukuki danışmanlık ve dava takip hizmetleri sunmakta, dürüst, şeffaf, müvekkil odaklı seçkin bir hukuki destek sağlamaktadır.
              </p>
              <Link href='/hakkimizda'>
                <a className='transition duration-500 transform hover:-translate-y-1 inline-block bg-primary-color text-white text-lg font-medium rounded-full px-8 py-3 cursor-pointer'>Daha Fazla</a>
            </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded lg:invisible" src='/images/hero-photo.png' width={600} height={720} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default About