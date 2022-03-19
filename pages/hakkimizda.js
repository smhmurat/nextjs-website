import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="mt-5 px-4 py-16">
      <div className="container mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">
          Hakkımızda
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-4">
          <div className="shadow-2xl rounded-3xl mt-8 flex items-center justify-center">
            <Image
              className="object-cover object-center rounded-3xl"
              src="/images/hero-photo.jpg"
              width={1280}
              height={1280}
              alt="hero"
            />
          </div>
          <ol className="relative border-l border-gray-200">
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Ekim 2013 - Haziran 2017
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Hukuk Fakultesi
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Avukat Beytullah MURAT 2017 yılı Haziran ayında İstanbul
                Üniversitesi Hukuk Fakültesi&apos;nden onur derecesi ile mezun
                olmuştur.
              </p>
            </li>
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                Ocak 2016 - Aralık 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                İs Deneyimi
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Avukat Beytullah MURAT öğrencilik döneminde başlamış olduğu
                İstanbul Anadolu Yakası Maltepe ilçesinde bulunan Hukuk
                Bürosunda yaklaşık 5 yıl çalışmış, avukatlık staj ve sonrasında
                da serbest avukat olarak bu büroda birçok alanda dava takibi
                yapmış ve danışmanlık hizmeti vermiştir.
              </p>
            </li>
            <li className="mb-5 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                Mart 2021 - ...
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Murat Hukuk & Danışmanlık
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Avukat Beytullah MURAT İstanbul Üniversitesi döneminde ve
                sonrasında İstanbul&apos;da yaptığı işlerde kazandığı tecrübe sonucunda 2021 yılında Kayseri’ye gelerek Murat Hukuk & Danışmanlık Bürosunu kurmuştur.
              </p>
              <p className="mb-4 text-base font-normal text-gray-500">
                Murat Hukuk & Danışmanlık Bürosu, yerli ve yabancı
                müvekkillerine, ticari yaklaşımlara ve kişisel özelliklere
                uygun, çözüm odaklı, kapsamlı hukuki danışmanlık ve dava takip
                hizmetleri sunmakta, dürüşt, şeffaf, müvekkil odaklı seçkin bir
                hukuki destek sağlamaktadır.
              </p>
              <p className="mb-4 text-base font-normal text-gray-500">
                Murat Hukuk & Danışmanlık Bürosu, müvekkillerin taleplerine en
                hızlı şekilde cevap verebilmekte, her müvekkille karşılıklı
                güvene dayalı uzun soluklu işler tesis etmekte ve müvekkillerin
                kendilerine özgü çalışma sistemlerini kavrayarak onlara destek
                olmaktadır. Büromuzda müvekkillerimiz aleyhine oluşabilecek tüm
                hukuki riskler, risk ortaya çıkmadan öngörebilmek için
                çalışılmakta, “Koruyucu Avukatlık” olarak nitelendirilebilecek
                bu proaktif yaklaşımımızla, müvekkillerimiz aleyhine
                oluşabilecek tüm hukuki riskler azaltılmaya çalışılmaktadır.
              </p>
              <p className="mb-4 text-base font-normal text-gray-500">
                Yüksek tecrübe ve enerjimiz ile sizi anlayan ve sıkıntılarınıza
                yaratıcı çözümler sunan bir hukuk bürosu olarak, bireysel ve
                kurumsal ayrım gözetmeksizin tüm müvekkillerimizin hukuki
                sorunlarını, hızlı bir şekilde ve üstün hizmet anlayışıyla
                çözmek, risklerini azaltmak en önemli amacımızdır.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
