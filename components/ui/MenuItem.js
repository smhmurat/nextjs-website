import React from 'react'
import Link from 'next/link'

const MenuItem = ({ href, name }) => {
  return (
    <Link href={href}>
      <a className='cursor-pointer text-white md:text-xs xl:text-base font-semibold px-2 py-2 text-md hover:text-brand-color uppercase hover:border-b-4 hover:border-b-brand-color'>{name}</a>
    </Link>
  )
}

export default MenuItem