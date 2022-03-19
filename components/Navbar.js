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
            'href': '/hakkimizda',
            'name': 'Hakkımızda'
        },
        {
            'href': '/calisma-alanlarimiz',
            'name': 'Çalışma Alanlarımız'
        },
        {
            'href': '/blog',
            'name': 'BLOG'
        },
        {
            'href': '/iletisim',
            'name': 'İLETİŞİM'
        }
    ]

const socialMenu = [
        {
            'href': '/',
            'name': 'Mail',
            'icon': <FiMail size={24} />
        },
        {
            'href': '/',
            'name': 'Telefon',
            'icon': <FiPhone size={24} />
        },
        {
            'href': '/',
            'name': 'Facebook',
            'icon': <FaFacebook size={24} />
        },
        {
            'href': '/',
            'name': 'Twitter',
            'icon': <FaTwitter size={24} />
        },
        {
            'href': '/',
            'name': 'Instagram',
            'icon': <FaInstagram size={24} />
        }
    ]


const handleClick = (open, setOpen) => {
    setOpen(!open)
}

function MobileNav({open, setOpen}) {
  return (
        <div className={`fixed w-full top-0 left-0 overflow-hidden flex flex-col justify-between bg-primary-color pb-24 transform ${open ? "-translate-x-0 min-h-full" : "-translate-x-full min-h-full"} transition-transform duration-500 ease-in-out filter z-10 `}>
            <div className="flex flex-col mx-4 mt-24 text-brand-color max-w-full">
                <Link href="/" >
                    <a className="cursor-pointer text-white p-6 text-sm hover:text-brand-color border-b border-b-white"  onClick={() => handleClick(open, setOpen)}>ANASAYFA</a>
                </Link>
                <Link href="/hakkimizda" >
                    <a className="cursor-pointer text-white p-6 text-sm hover:text-brand-color border-b border-b-white"  onClick={() => handleClick(open, setOpen)}>HAKKIMIZDA</a>
                </Link>
                <Link href="/calisma-alanlarimiz" >
                    <a className="cursor-pointer text-white p-6 text-sm hover:text-brand-color border-b border-b-white"  onClick={() => handleClick(open, setOpen)}>ÇALIŞMA ALANLARIMIZ</a>
                </Link>
                <Link href="/blog" >
                    <a className="cursor-pointer text-white p-6 text-sm hover:text-brand-color border-b border-b-white"  onClick={() => handleClick(open, setOpen)}>BLOG</a>
                </Link>
                <Link href="/iletisim" >
                    <a className="cursor-pointer text-white p-6 text-sm hover:text-brand-color border-b border-b-white"  onClick={() => handleClick(open, setOpen)}>İLETİŞİM</a>
                </Link>
            </div> 
            <div className='flex items-center justify-evenly gap-x-6 mx-4 mt-6'>
                {socialMenu.map((item, index) => <SocialMenuItem key={index} href={item.href} name={item.name} icon={item.icon} />)}
            </div>
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed w-full top-0 overflow-hidden flex items-center justify-between filter bg-gradient-to-b from-primary-color to-secondary-color px-4 py-4 text-white z-40">
            <div className='container mx-auto overflow-hidden'>
              <div className="flex items-center justify-between w-full z-30">
                <MobileNav open={open} setOpen={setOpen}/>
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
                  {socialMenu.map((item, index) => <SocialMenuItem className='selection: text-brand-color' key={index} href={item.href} name={item.name} icon={item.icon}/>)}
                </nav>
              </div>
            </div>
        </div>
    )
}