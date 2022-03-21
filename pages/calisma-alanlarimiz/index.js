import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import servicesData from "../../services-data";
import { getServices } from '../../services'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ServicesPage = ({ services }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-two':
        return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">
          Çalışma Alanlarımız
        </h1>
        <div className="flex items-center justify-center py-4 ">
          <Tab.Group>
            <div className="flex flex-col items-start justify-center md:flex-row w-full h-[500px] md:h-[700px]">
              <Tab.List
                className="w-full sm:w-5/12 lg:w-1/4 transition-all duration-300 h-[140px] md:h-full overflow-y-scroll"
                onClick={() => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
                }}
              >
                {services.map((service, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      classNames(
                        "w-full p-1 leading-5 font-semibold text-primary-color",
                        "focus:outline-none",
                        selected
                          ? "bg-cloud-color text-brand-color"
                          : "text-primary-color hover:bg-white/[0.80]"
                      )
                    }
                  >
                    <div className="flex items-center justify-start gap-2 md:gap-2">
                      <Image
                        src={service.node.icon.url}
                        width={48}
                        height={48}
                        alt={service.node.title}
                      />
                      <hr className="w-1 h-12 bg-primary-color" />
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="text-sm">{service.node.title}</h5>
                        <p className="font-light lg:font-normal text-xs">
                          {service.node.description}
                        </p>
                      </div>
                    </div>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="w-full sm:w-7/12 lg:w-3/4 lg:h-full">
                {Object.values(services).map((service, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={({ selected }) =>
                      classNames(
                        "w-full p-2 leading-5 font-normal text-primary-color",
                        "focus:outline-none h-[360px] lg:h-[600px] overflow-y-scroll",
                        selected ? "bg-cloud-color" : "bg-white"
                      )
                    }
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-full relative">
                        <Image
                          className="object-cover object-center shadow-lg"
                          src={service.node.featuredImage.url}
                          width={1000}
                          height={300}
                          alt={service.title}
                        />
                        <h1 className="text-sm md:text-2xl lg:text-4xl text-white font-semibold absolute bottom-2 right-2 backdrop-blur-sm bg-primary-color/30 p-1 lg:p-4">
                          {service.node.title}
                        </h1>
                      </div>
                      {service.node.content.raw.children.map((typeObj, index) => {
                      const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

                      return getContentFragment(index, children, typeObj, typeObj.type)
                    })}
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

export async function getStaticProps() {
  const services = (await getServices()) || [];
  return {
    props: {
      services
    }
  }
}
