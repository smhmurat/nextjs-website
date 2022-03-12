import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-5 px-4">
      <div className="container mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">
          Hakkımızda
        </h1>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-4">
        <div className="shadow-2xl rounded-3xl mt-8 flex items-center justify-center">
            <Image
              className="object-cover object-center rounded-3xl"
              src="/images/hero-photo.jpg"
              width={400}
              height={400}
              alt="hero"
            />
          </div>
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Haziran 2017
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Hukuk Fakultesi
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500">
                Avukat Beytullah Murat 2017 yili Haziran ayinda Istanbul
                Universitesi Hukuk Fakultesi'nden derece ile mezun oldu.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Ocak 2017 - Haziran 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Is Deneyimi
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Yaklasik 3 yil boyunca Istanbul Anadolu Yakasi Maltepe ilcesinde
                bulunan Dogal Hukuk Burosunda staj ve sonrasinda gorev yapti.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Application UI code in Tailwind CSS
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default About;
