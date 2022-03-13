import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BannerItem = ({src, name}) => {
  return (
    <Link href='/'>
      <a className='flex flex-col items-center gap-y-2 text-center font-semibold text-white'>
        <span className='bg-primary-color rounded-full p-4 flex items-center justify-center'>
          <Image src={src} width={64} height={64} alt={name} />
        </span>
          {name}
      </a>
    </Link>
  )
}

export default BannerItem

