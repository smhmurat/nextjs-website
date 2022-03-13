import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full py-4">
          <div className="w-1/3 px-4">
             <Link href='/services'>
                <a className='flex items-center justify-start gap-4 w-4/5 '>
                  <Image src='/images/assets/services/ticaret.png' width={48} height={48} alt='{item.title}'/>
                  <hr className='w-1 h-12 bg-primary-color' />
                  <div className='flex flex-col items-start'>
                    <h5>Ticaret Hukuku</h5>
                    <p className='font-normal text-xs'>Alt baslik</p>
                  </div>
                </a>
              </Link>
          </div>
          <div className="w-2/3 bg-green-500">Sag Taraf</div>
        </div>

        <div className="flex items-center justify-center w-full py-4">
          <div className="w-1/3 px-4">
             <Link href='/services'>
                <a className='flex items-center justify-start gap-4 w-4/5 '>
                  <Image src='/images/assets/services/ticaret.png' width={48} height={48} alt='{item.title}'/>
                  <hr className='w-1 h-12 bg-primary-color' />
                  <div className='flex flex-col items-start'>
                    <h5>Ticaret Hukuku</h5>
                    <p className='font-normal text-xs'>Alt baslik</p>
                  </div>
                </a>
              </Link>
          </div>
          <div className="w-2/3 bg-green-500">Sag Taraf</div>
        </div>

        <div className="flex items-center justify-center w-full py-4">
          <div className="w-1/3 px-4">
             <Link href='/services'>
                <a className='flex items-center justify-start gap-4 w-4/5 '>
                  <Image src='/images/assets/services/ticaret.png' width={48} height={48} alt='{item.title}'/>
                  <hr className='w-1 h-12 bg-primary-color' />
                  <div className='flex flex-col items-start'>
                    <h5>Ticaret Hukuku</h5>
                    <p className='font-normal text-xs'>Alt baslik</p>
                  </div>
                </a>
              </Link>
          </div>
          <div className="w-2/3 bg-green-500">Sag Taraf</div>
        </div>
      </div>
    </section>
  );
};

export default services;
