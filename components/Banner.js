import React from 'react'
import BannerItem from './ui/BannerItem';
import { FaBalanceScale, FaFileContract, FaIndustry, FaUsers, FaUniversity } from 'react-icons/fa';

const bannerMenu = [
  {
    'link': <FaBalanceScale size={64}/>, 
    'name': 'Hukuki Danışmanlık'
  },
  {
    'link': <FaFileContract size={64}/>, 
    'name': 'Sözleşmeler Hukuku'
  },
  {
    'link': <FaUsers size={64}/>, 
    'name': 'Tüketici Hukuku'
  },
  {
    'link': <FaUniversity size={64}/>, 
    'name': 'İcra Hukuku'
  },
  {
    'link': <FaIndustry size={64}/>,
    'name': 'İş Hukuku'
  }
]

const Banner = () => {
  return (
    <div className='bg-secondary-color p-4'>
      <div className='container mx-auto grid grid-cols-2 lg:grid-cols-5 place-items-center'>
        {bannerMenu.map((item, index) => <BannerItem key={index} link={item.link} name={item.name} />)}
      </div>
    </div>
  )
}

export default Banner
