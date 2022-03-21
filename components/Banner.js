import React from 'react'
import BannerItem from './ui/BannerItem';
import { FaBalanceScale, FaFileContract, FaIndustry, FaUsers, FaUniversity } from 'react-icons/fa';

const bannerMenu = [
  {
    'src': '/images/assets/banner/advice-law.svg', 
    'name': 'Hukuki Danışmanlık',
    'link': 'hukuki-danismanlik'
  },
  {
    'src': '/images/assets/banner/divorce.svg', 
    'name': 'Boşanma Hukuku',
    'link': 'aile-hukuku'
  },
  {
    'src': '/images/assets/banner/compensation.svg', 
    'name': 'Tazminat Hukuku',
    'link': 'sigorta-ve-tazminat-hukuku'
  },
  {
    'src': '/images/assets/banner/profession.svg', 
    'name': 'İş Hukuku',
    'link': 'is-ve-sosyal-guvenlik-hukuku'
  },
  {
    'src': '/images/assets/banner/inheritance.svg', 
    'name': 'Miras Hukuku',
    'link': 'miras-hukuku'
  },
  {
    'src': '/images/assets/banner/human-right.svg', 
    'name': 'Bireysel Başvuru Yolu',
    'link': 'bireysel-basvuru-yolu'
  }
]

const Banner = () => {
  return (
    <div className='bg-secondary-color py-4'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-y-4'>
        {bannerMenu.map((item, index) => <BannerItem key={index} src={item.src} name={item.name} link={item.link} />)}
      </div>
    </div>
  )
}

export default Banner
