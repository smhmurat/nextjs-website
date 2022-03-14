import React from 'react'
import Link from 'next/link'

const SocialMenuItem = ({ href, icon, name }) => {
  return (
    <Link href={href}>
      <a className='text-white hover:text-brand-color hover:scale-125 transition-all' title={name}>{icon}</a>
    </Link>
  )
}

export default SocialMenuItem