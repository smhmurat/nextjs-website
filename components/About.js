import React from 'react'
import Image from 'next/image'
import photo from '../public/images/hero-foto.png'

const About = () => {
  return (
    <section className="text-gray-700 body-font bg-about-bg">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color">Hakkımızda
          </h1>
          <p className="mb-8 leading-relaxed"><p>Lorem ipsum dolor sit amet. Vel doloremque fuga in sequi culpa qui maxime officiis? Inventore commodi aut quae nulla aut facere sint  nobis voluptate ut autem consequatur ex dignissimos ipsa. Qui vero ipsa id natus quas et molestias neque et praesentium quia. </p>
          <p className="mb-8 leading-relaxed">Quo voluptatibus veritatis et omnis delectus id similique cupiditate et doloremque assumenda? Vel rerum nesciunt in laborum quasi a consequatur quos.</p>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded" src={photo} width={600} height={720} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default About