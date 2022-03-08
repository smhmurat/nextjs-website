import React from 'react';
import logo from '../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='bg-primary-color text-white'>
            <div className='container mx-auto p-12'>
                <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-12'>
                    <div className='flex flex-col gap-4'>
                        <Link href='/'>
                          <a>
                            <Image src='/images/logo.png' width={249} height={49} />
                          </a>
                        </Link>
                        <p>
                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6>E-bülten Kayıt</h6>
                        <input type='text' className='w-full h-8 rounded-lg p-2' placeholder='E-posta Adresi'></input>
                        <p>E-bülten listemize kayıt olarak hukuk hizmetlerimizden haberdar olabilirsiniz!</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h6>Bize Ulaşın</h6>
                        <span>Telefon</span>
                        <span>Mail</span>
                        <span>Adres</span>
                    </div>
                </div>
            </div>
            <div className='bg-secondary-color text-white py-2'>
                <p className='text-center text-xs'>&copy; Copyright 2021 - <a href='/#'>@smhmurat</a> | Her Hakkı Saklıdır.</p>
            </div>
        </div>
    )
}
