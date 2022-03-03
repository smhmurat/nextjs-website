import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import MenuItem from './ui/MenuItem';
import { FiMail, FiPhone } from 'react-icons/fi'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import { Transition } from '@headlessui/react';
import styles from '../styles/Nav.module.css';

export default function Header() {
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
  
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-primary-color text-white'>
            <div className='container mx-auto flex items-center justify-between py-4 px-2 lg:px-0'>
                <div className='text-brand-color lg:hidden w-16 h-16'>
                    <button onClick={() => setIsOpen(!isOpen)} type='button' className='inline-flex items-center justify-center' aria-controls='mobile-menu' aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        {!isOpen ? (
                            <svg className='block h-8 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill='none' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        ):(
                            <svg className='block h-6 w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='none' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                            </svg>
                        )}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" height={32} width={32} viewBox="0 0 32 32" fill='currentColor'>
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg> */}
                    </button>
                </div>
                <Link href='/'>
                    <a>
                        <Image src='/images/logo.png' width={249} height={49} className='inline-flex items-center'></Image>
                    </a>
                </Link>
                {/* MENU */}
                <nav className='hidden lg:flex items-center justify-between gap-x-6'>
                   {menu.map((item) => <MenuItem href={item.href} name={item.name} />)}
                </nav>
                {/* SOCIAL MENU */}
                <nav className='hidden lg:flex items-center justify-between gap-x-4'>
                    <Link href='/'>
                       <a className='hover:text-brand-color hover:scale-125 transition-all'><FiMail  size={20}/></a>
                    </Link>
                    <Link href=''>
                        <a className='hover:text-brand-color hover:scale-125 transition-all'><FiPhone  size={20}/></a>
                    </Link>
                    <Link href=''>
                        <a className='hover:text-brand-color hover:scale-125 transition-all'><FaFacebook  size={20}/></a>
                    </Link>
                    <Link href=''>
                        <a className='hover:text-brand-color hover:scale-125 transition-all'><FaTwitter  size={20}/></a>
                    </Link>
                    <Link href=''>
                        <a className='hover:text-brand-color hover:scale-125 transition-all'><FaInstagram  size={20}/></a>
                    </Link>
                </nav>
                
            </div>
        </div>
    )
}