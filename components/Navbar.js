import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuItem from './ui/MenuItem'
import SocialMenuItem from './ui/SocialMenuItem'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const menu = [
        {
            'href': '/',
            'name': 'Anasayfa'
        },
        {
            'href': '/about',
            'name': 'Hakkımızda'
        },
        {
            'href': '/services',
            'name': 'Çalışma Alanlarımız'
        },
        {
            'href': '/blog',
            'name': 'BLOG'
        },
        {
            'href': '/contact',
            'name': 'İLETİŞİM'
        }
    ]

const socialMenu = [
        {
            'href': '/',
            'name': <FiMail size={24} />
        },
        {
            'href': '/',
            'name': <FiPhone size={24} />
        },
        {
            'href': '/',
            'name': <FaFacebook size={24} />
        },
        {
            'href': '/',
            'name': <FaTwitter size={24} />
        },
        {
            'href': '/',
            'name': <FaInstagram size={24} />
        }
    ]


const handleClick = (open, setOpen) => {
    setOpen(!open)
}

function MobileNav({open, setOpen}) {
  return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-primary-color transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out filter z-10`}>
            <div className="flex flex-col mx-4 mt-20 text-brand-color max-w-full">
                <Link href="/" >
                    <a className="cursor-pointer text-white px-2 py-2 text-md hover:text-brand-color"  onClick={() => handleClick(open, setOpen)}>Anasayfa</a>
                </Link>
                <Link href="/about" >
                    <a className="cursor-pointer text-white px-2 py-2 text-md hover:text-brand-color"  onClick={() => handleClick(open, setOpen)}>Hakkımızda</a>
                </Link>
                <Link href="/services" >
                    <a className="cursor-pointer text-white px-2 py-2 text-md hover:text-brand-color"  onClick={() => handleClick(open, setOpen)}>Hizmetlerimiz</a>
                </Link>
                <Link href="/blog" >
                    <a className="cursor-pointer text-white px-2 py-2 text-md hover:text-brand-color"  onClick={() => handleClick(open, setOpen)}>Blog</a>
                </Link>
                <Link href="/contact" >
                    <a className="cursor-pointer text-white px-2 py-2 text-md hover:text-brand-color"  onClick={() => handleClick(open, setOpen)}>İletişim</a>
                </Link>
            </div> 
            <div className='flex items-center justify-center gap-x-6 mx-4 mt-4 max-w-full'>
                {socialMenu.map((item, index) => <SocialMenuItem key={index} href={item.href} name={item.name} />)}
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center justify-between filter bg-gradient-to-b from-primary-color to-secondary-color px-4 py-4 text-white">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className='container mx-auto'>
              <div className="flex items-center justify-between w-full z-30">
                <Link href='/'>
                    <a className='z-50'>
                        <Image src='/images/logo.svg' width={241} height={64} alt='logo'/>
                    </a>
                </Link>
                <div className="flex relative w-8 h-8 flex-col justify-between items-center z-50 md:hidden" onClick={() => handleClick(open, setOpen)}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <nav className='hidden md:flex items-center justify-between gap-x-2 lg:gap-x-4'>
                  {menu.map((item, index) => <MenuItem key={index} href={item.href} name={item.name} />)}
                </nav>
                {/* SOCIAL MENU ITEMS */}
                <nav className='hidden lg:flex items-center justify-between gap-x-4'>
                  {socialMenu.map((item, index) => <SocialMenuItem className='selection: text-brand-color' key={index} href={item.href} name={item.name} />)}
                </nav>
              </div>
            </div>
        </div>
    )
}