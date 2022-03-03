import React from 'react'
import Link from 'next/link'

const MenuItem = ({ href, name }) => {
  return (
    <Link href={href}>
      <a className='cursor-pointer text-white px-2 py-2 text-md hover:text-brand-color'>{name}</a>
    </Link>
  )
}

export default MenuItem