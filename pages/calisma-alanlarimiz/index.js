import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import servicesData from "../../services-data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ServicesPage = () => {
  return (
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">
          Çalışma Alanlarımız
        </h1>
        <div className="flex items-center justify-center py-4 ">
          <Tab.Group>
            <div className="flex flex-col items-start justify-center lg:flex-row w-full h-[500px] lg:h-[700px]">
              <Tab.List
                className="w-full md:w-1/4 transition-all duration-300 h-[140px] lg:h-full overflow-y-scroll"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                {servicesData.map((service, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      classNames(
                        "w-full p-2.5 text- leading-5 font-semibold text-primary-color",
                        "focus:outline-none",
                        selected
                          ? "bg-cloud-color text-brand-color"
                          : "text-primary-color hover:bg-white/[0.80]"
                      )
                    }
                  >
                    <div className="flex items-center justify-start gap-2 md:gap-2">
                      <Image
                        src={service.icon}
                        width={48}
                        height={48}
                        alt={service.title}
                      />
                      <hr className="w-1 h-12 bg-primary-color" />
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="text-sm">{service.title}</h5>
                        <p className="font-normal text-xs">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="w-full md:w-3/4">
                {Object.values(servicesData).map((service, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={({ selected }) =>
                      classNames(
                        "w-full p-6 leading-5 font-normal text-primary-color",
                        "focus:outline-none h-[360px] lg:h-[600px] overflow-y-scroll",
                        selected ? "bg-cloud-color" : "bg-white"
                      )
                    }
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-full relative">
                        <Image
                          className="object-cover object-center shadow-lg"
                          src={service.img}
                          width={1000}
                          height={300}
                          alt={service.title}
                        />
                        <h1 className="text-sm md:text-2xl lg:text-4xl text-white font-semibold absolute bottom-2 right-2 backdrop-blur-sm bg-primary-color/30 p-1 lg:p-4">
                          {service.title}
                        </h1>
                      </div>
                      <p className="mb-4 text-base font-normal text-gray-500">{service.desc}</p>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
