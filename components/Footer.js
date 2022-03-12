import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <div className="bg-primary-color text-white">
      <div className="container mx-auto p-12">
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
              Hedefimiz; öncelikle uyuşmazlığı önlemek, mevcut uyuşmazlık durumunda ise en hızlı ve maksimum faydayı temin edecek şekilde çözüme kavuşturabilmek ve hukuku herkes için uygulanabilir hale getirmektir. Müvekkillerimizin gerçek ihtiyaçları ve amaçları üzerine odaklanılarak kaliteli ve hızlı hizmet sayesinde uzun süreli ve kalıcı çalışma sağlanmaktadır.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-semibold text-brand-color">E-bülten Kayıt</h6>
            <input
              type="text"
              className="w-full h-8 rounded p-2 focus:outline-none"
              placeholder="E-posta Adresi"
            ></input>
            <p>
              E-bülten listemize kayıt olarak hukuk hizmetlerimizden haberdar
              olabilirsiniz!
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <h6 className="font-semibold text-brand-color">Bize Ulaşın</h6>
            <a className='flex items-center justify-start w-full gap-x-6' href="mailto:avbeytullahmurat@hotmail.com">
              <FiMail />
              <span>avbeytullahmurat@hotmail.com</span>
            </a>
            <a className='flex items-center justify-start w-full gap-x-6' href="tel:+903524083448">
              <FiPhone />
              <span>(0352) 408 3448</span>
            </a>
            <a className='flex items-center justify-start w-full gap-x-6' href="tel:+905327935666">
              <FiPhone />
              <span>(0532) 793 5666</span>
            </a>
            <a className='flex items-center justify-start flex-nowrap w-full gap-x-6'>
              <FiMapPin size={36}/>
              <span>Gevher Nesibe Mah. Tekin Sok. No: 6 Hukuk Plaza Kat: 10 Daire: 78 Kocasinan/Kayseri</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-secondary-color text-white py-2">
        <p className="text-center text-xs">
          &copy; Copyright 2021 - <a href="/#">@smhmurat</a> | Her Hakkı
          Saklıdır.
        </p>
      </div>
    </div>
  );
}
