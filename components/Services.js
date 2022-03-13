import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {

  const services = [
    {
      'img': '/images/assets/services/ticaret.png',
      'title': 'Ticaret ve Şirketler Hukuku',
      'subtitle': 'Sermaye Piyasası, Bankalar'
    },
    {
      'img': '/images/assets/services/is.png',
      'title': 'İş ve Sosyal Güvenlik Hukuku',
      'subtitle': 'İşçi-İşveren İlişkileri, Sendikalar'
    },
    {
      'img': '/images/assets/services/aile.png',
      'title': 'Aile Hukuku',
      'subtitle': 'Evlilik, Boşanma, Velayet'
    },
    {
      'img': '/images/assets/services/sigorta.png',
      'title': 'Sigorta ve Tazminat Hukuku',
      'subtitle': 'İrtifak, Rehin, İntifa'
    },
    {
      'img': '/images/assets/services/icra.png',
      'title': 'İcra ve İflas Hukuku',
      'subtitle': 'İade, Şikayet, Cayma'
    },
    {
      'img': '/images/assets/services/tuketici.png',
      'title': 'Tüketici Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/gayrimenkul.png',
      'title': 'Gayrimenkul ve Kira Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/esya.png',
      'title': 'Eşya Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/ceza.png',
      'title': 'Ceza Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/saglik.png',
      'title': 'Sağlık Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/idare.png',
      'title': 'İdare Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/vergi.png',
      'title': 'Vergi Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/ihale.png',
      'title': 'İhale Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/mulkiyet.png',
      'title': 'Fikri Mülkiyet Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/yabanci.png',
      'title': 'Yabancılar ve Vatandaşlık Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/eticaret.png',
      'title': 'E-Ticaret Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/bilisim.png',
      'title': 'Bilişim Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/kisiselveri.png',
      'title': 'Kişisel Verilerin Korunması',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/sozlesme.png',
      'title': 'Sözleşmeler Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/insanhaklari.png',
      'title': 'İnsan Hakları Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
    {
      'img': '/images/assets/services/kent.png',
      'title': 'Kentsel Dönüşüm Hukuku',
      'subtitle': 'Tıbbi Müdahale, Tedavi Hakkı'
    },
  ]

  return (
    <div className='bg-cloud-color w-full py-24 backdrop-opacity-20'>
      <div className='container mx-auto'>
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">Çalışma Alanlarımız</h2>
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