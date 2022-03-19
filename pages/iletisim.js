import React from "react";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";


const ContactPage = () => {
  return (
    <div className="my-8">
      <div className="w-full h-[400px] py-4 bg-brand-color">
        
      </div>
      <div className="container mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-text-color text-center">
          Bize Ulaşın
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="flex flex-col justify-start gap-4 md:h-[450px] border-2 border-dotted border-r-0 p-4">
            <h2 className="title-font text-xl text-center mb-4 font-medium text-text-color border-b-2 border-b-text-color">
              İletişim Bilgileri
            </h2>
            <a
              className="flex items-center justify-start w-full gap-x-6 text-text-color"
              href="tel:+903524083448"
            >
              <FiPhone size={32} />
              <span>(0352) 408 34 48</span>
            </a>
            <a
              className="flex items-center justify-start w-full gap-x-6 text-text-color"
              href="mailto:avbeytullahmurat@hotmail.com"
            >
              <FiMail size={32} />
              <span>avbeytullahmurat@hotmail.com</span>
            </a>
            <Link href="/">
              <a className="flex items-center justify-start w-full gap-x-6 text-text-color">
                <IoGlobeOutline />
                <span>beytullahmurat.av.tr</span>
              </a>
            </Link>
            <a className="flex items-center justify-start flex-nowrap w-full gap-x-6 text-text-color">
              <FiMapPin size={32} />
              <span>
                Gevher Nesibe Mah. Tekin Sok. No: 6 Hukuk Plaza Kat: 10 Daire:
                78 Kocasinan/KAYSERİ
              </span>
            </a>
          </div>
          <form
            action=""
            method="post"
            className="border-2 border-dotted w-full h-[450px] p-4"
          >
            <h2 className="title-font text-xl text-center mb-4 font-medium text-text-color border-b-2 border-b-text-color">
              Mesaj Gönder
            </h2>
            <div className="w-full flex flex-col gap-2">
              <input
                type="text"
                className="leading-none text-text-color p-3 focus:outline-none focus:border-text-color border-2 rounded"
                placeholder="Ad Soyad"
              />
              <input
                type="text"
                className="leading-none text-text-color p-3 focus:outline-none focus:border-text-color border-2 rounded"
                placeholder="E-posta Adresi"
              />
              <input
                type="text"
                className="leading-none text-text-color p-3 focus:outline-none focus:border-text-color border-2 rounded"
                placeholder="Telefon"
              />
              <input
                type="textarea"
                className="leading-none text-text-color p-3 focus:outline-none focus:border-text-color border-2 rounded"
                placeholder="Mesaj Konusu"
              />
              <textarea
                type="textarea"
                className="leading-none text-text-color p-3 focus:outline-none focus:border-text-color border-2 rounded"
                placeholder="Mesaj"
                rows={4}
                cols={50}
              />
              <button
                className="py-2.5 px-5 mb-2 text-sm font-medium text-white bg-primary-color rounded-lg shadow-xl hover:bg-white hover:text-primary-color hover:border-2 hover:border-primary-color transition-colors duration-300"
                type="submit"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
