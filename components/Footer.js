import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <div className="bg-primary-color text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-12">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  width={249}
                  height={64}
                  alt="logo"
                />
              </a>
            </Link>
            <p className="text-sm">
              Murat Hukuk & Danışmanlık, Avukat Beytullah MURAT tarafından 2021 yılında kurulmuştur. Büromuz, yerli ve yabancı müvekkillerine, ticari yaklaşımlara ve kişisel özelliklere uygun, çözüm odaklı, kapsamlı hukuki danışmanlık ve dava takip hizmetleri sunmakta, dürüst, şeffaf, müvekkil odaklı seçkin bir hukuki destek sağlamaktadır. Hukuk Büromuz çalışmalarını özellikle Ticaret Hukuku, Şirketler Hukuku, Gayrimenkul Hukuku, İş Hukuku, Aile Hukuku, Tüketici Hukuku, İcra ve İflas Hukuku, Miras Hukuku, Kira Hukuku, Sigorta ve Tazminat Hukuku, Ceza Hukuku, İdare ve Vergi Hukuku alanlarında yoğunlaştırmakla birlikte, müvekkillerine her türlü hukuki destek ve danışmanlığı profesyonel çizgisinden ödün vermeden sunmaktadır. Bu web sitesini, büromuza, avukatlarımıza ve iletişim bilgilerimize ulaşmak için kullanabilir, yayınlarımızdan ve hukuki gelişmelerden haberdar olabilirsiniz.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h6 className="font-semibold text-brand-color">E-bülten Kayıt</h6>
            <div>
              <input
                type="mail"
                className="w-full h-8 rounded p-2 text-primary-color"
                placeholder="E-posta Adresi"
              ></input>
              <p className="text-sm">
                E-bülten listemize kayıt olarak hukuk hizmetlerimizden haberdar
                olabilirsiniz!
              </p>
            </div>
            <div className="w-full h-80">
              {/* Map */}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h6 className="font-semibold text-brand-color">Bize Ulaşın</h6>
            <a className='flex items-center justify-start w-full gap-x-6' href="tel:+903524083448">
              <FiPhone size={20} />
              <span>(0352) 408 34 48</span>
            </a>
            <a className='flex items-center justify-start w-full gap-x-6' href="mailto:avbeytullahmurat@hotmail.com">
              <FiMail size={20} />
              <span>avbeytullahmurat@hotmail.com</span>
            </a>
            <a className='flex items-center justify-start flex-nowrap w-full gap-x-6'>
              <FiMapPin size={48}/>
              <span>Gevher Nesibe Mah. Tekin Sok. No: 6 Hukuk Plaza Kat: 10 Daire: 78 Kocasinan/Kayseri</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary-color text-white py-2">
        <p className="text-center text-xs">
          &copy; Copyright 2021 - <Link href="https://www.instagram.com/smhmurat/"><a>@smhmurat</a></Link> | Her Hakkı
          Saklıdır.
        </p>
      </div>
    </div>
  );
}
