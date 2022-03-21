import React from 'react'
import { getServices, getServiceDetails } from '../../services'
import Image from 'next/image'

const ServicesDetails = ({ service }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-two':
        return <h2 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='mt-5 px-4 py-4'>
      <div className='container mx-auto'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center'>{service.title}</h1>
        <Image
          className="w-full object-cover object-center shadow-lg"
          src={service.featuredImage.url}
          width={1280}
          height={400}
          alt={service.title}
          />
        {service.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default ServicesDetails

export async function getStaticProps({ params }) {
  const data = (await getServiceDetails(params.slug)) || [];
  return {
    props: {
      service: data
    }
  }
}

export async function getStaticPaths() {
  const services = await getServices();

  return {
    paths: services.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: false,
  }
}