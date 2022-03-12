import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="text-gray-700 body-font bg-hero-pattern bg-fixed bg-center bg-cover">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color">Hakkımızda
          </h2>
          <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet. Vel doloremque fuga in sequi culpa qui maxime officiis? Inventore commodi aut quae nulla aut facere sint  nobis voluptate ut autem consequatur ex dignissimos ipsa. Qui vero ipsa id natus quas et molestias neque et praesentium quia.</p>
          <p className="mb-8 leading-relaxed">Quo voluptatibus veritatis et omnis delectus id similique cupiditate et doloremque assumenda? Vel rerum nesciunt in laborum quasi a consequatur quos.</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded" src='/images/hero-photo.jpg' width={600} height={720} alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default About