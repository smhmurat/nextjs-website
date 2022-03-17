import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BannerItem = ({src, name}) => {
  return (
    <Link href='/calisma-alanlarimiz'>
      <a className='group flex flex-col items-center gap-y-2 text-center font-semibold text-white'>
        <div className='bg-primary-color rounded-full p-4 flex items-center justify-center group-hover:bg-brand-color'>
          <Image src={src} width={64} height={64} alt={name} />
        </div>
        <div className='group-hover:text-brand-color'>
          {name}
        </div>
      </a>
    </Link>
  )
}

export default BannerItem

