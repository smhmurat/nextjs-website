import React from 'react'
import Link from 'next/link'

const BannerItem = ({link, name}) => {
  return (
    <Link href='/'>
      <a className='flex flex-col items-center gap-y-2 w-48 text-center font-semibold text-white'>
        <span className='bg-primary-color rounded-full w-24 h-24 flex items-center justify-center'>
         {link}
        </span>
          {name}
      </a>
    </Link>
  )
}

export default BannerItem

