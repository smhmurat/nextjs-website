import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {

  const services = [
    {
      'img': '/images/icon-money.png',
      'title': 'Ticaret Hukuku',
      'subtitle': 'Sermaye Piyasası, Bankalar'
    },
    {
      'img': '/images/icon-builder.png',
      'title': 'Is Hukuku',
      'subtitle': 'İşçi-İşveren İlişkileri, Sendikalar'
    },
    {
      'img': '/images/icon-family.png',
      'title': 'Aile Hukuku',
      'subtitle': 'Evlilik, Boşanma, Velayet'
    },
    {
      'img': '/images/icon-camping.png',
      'title': 'Eşya Hukuku',
      'subtitle': 'İrtifak, Rehin, İntifa'
    },
    {
      'img': '/images/icon-trade.png',
      'title': 'Tüketici Hukuku',
      'subtitle': 'İade, Şikayet, Cayma'
    },
    {
      'img': '/images/icon-doctor.png',
      'title': 'Sağlık Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
  ]

  return (
    <div className='bg-cloud-color w-full py-24 backdrop-opacity-20'>
      <div className='container mx-auto'>
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">Uzmanlik Alanlarimiz</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center space-y-8 w-full'>
          {services.map((item, index) => (
              <Link key={index}  href='/services'>
                <a className='flex items-center justify-start gap-4 w-4/5 '>
                  <Image src={item.img} width={64} height={64} alt={item.title}/>
                  <hr className='w-1 h-12 bg-primary-color' />
                  <div className='flex flex-col items-start'>
                    <h5>{item.title}</h5>
                    <p className='font-normal text-xs'>{item.subtitle}</p>
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