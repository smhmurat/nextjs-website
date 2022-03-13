import React from 'react'
import Link from 'next/link'

const MenuItem = ({ href, name }) => {
  return (
    <Link href={href}>
      <a className='cursor-pointer text-white font-semibold px-2 py-2 text-md hover:text-brand-color uppercase'>{name}</a>
    </Link>
  )
}

export default MenuItem