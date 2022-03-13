import React from 'react'
import BannerItem from './ui/BannerItem';
import { FaBalanceScale, FaFileContract, FaIndustry, FaUsers, FaUniversity } from 'react-icons/fa';

const bannerMenu = [
  {
    'src': '/images/assets/banner/advice-law.svg', 
    'name': 'Hukuki Danışmanlık'
  },
  {
    'src': '/images/assets/advice-law.svg', 
    'name': 'Boşanma Hukuku'
  },
  {
    'src': '/images/assets/advice-law.svg', 
    'name': 'Tazminat Hukuku'
  },
  {
    'src': '/images/assets/advice-law.svg', 
    'name': 'İş Hukuku'
  },
  {
    'src': '/images/assets/advice-law.svg', 
    'name': 'Miras Hukuku'
  },
  {
    'src': '/images/assets/advice-law.svg', 
    'name': 'Bireysel Başvuru Yolu'
  }
]

const Banner = () => {
  return (
    <div className='bg-secondary-color py-4'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-y-4'>
        {bannerMenu.map((item, index) => <BannerItem key={index} src={item.src} name={item.name} />)}
      </div>
    </div>
  )
}

export default Banner
