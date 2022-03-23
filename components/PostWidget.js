import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [categories, slug])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 mt-4'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Benzer Yazılar' : 'En Son Yazılar'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image alt={post.title} height={60} width={60} unoptimized className='align-middle rounded-full' src={post.featuredImage.url} />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-xs'>
              {moment(post.createdAt).format('DD/MM/YYYY')}
            </p>
            <Link href={`/blog/${post.slug}`} key={index} className='text-base'>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget