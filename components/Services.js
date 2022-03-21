import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import servicesData from '../services-data'

const Services = () => {
  
  return (
    <div className='bg-cloud-color w-full py-24 backdrop-opacity-20'>
      <div className='container mx-auto'>
        <h2 className="title-font sm:text-4xl text-3xl font-medium text-primary-color text-center mb-4 lg:mb-8">Çalışma Alanlarımız</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-8 w-full mt-0'>
          {servicesData.map((service, index) => (
              <Link key={index}  href={`/calisma-alanlarimiz/${service.link}`}>
                <a className='flex items-center justify-start gap-4 w-4/5 '>
                  <Image src={service.src} width={64} height={64} alt={service.title}/>
                  <hr className='w-1 h-12 bg-primary-color' />
                  <div className='flex flex-col items-start'>
                    <h5>{service.title}</h5>
                    <p className='font-normal text-xs'>{service.subtitle}</p>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Services