import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuItem from './ui/MenuItem'

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
            'name': 'Hizmetlerimiz'
        },
        {
            'href': '/blog',
            'name': 'Blog'
        },
        {
            'href': '/contact',
            'name': 'İletişim'
        }
    ]

function MobileNav({open, setOpen}) {
  return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-primary-color transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter `}>
            <div className="flex flex-col ml-4 mt-20 text-brand-color">
                {menu.map(item => <Link href={item.href} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    <a className="text-xl font-medium my-4">{item.name}</a>
                </Link>)}
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex filter bg-primary-color px-4 py-4 h-20 items-center justify-between">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="flex items-center">
                <Image src='/images/logo.png' width={249} height={49} />
            </div>
            <div className="flex justify-end items-center">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-brand-color rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-brand-color rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-brand-color rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    {menu.map((item) => <MenuItem href={item.href} name={item.name} />)}
                </div>
            </div>
        </nav>
    )
}