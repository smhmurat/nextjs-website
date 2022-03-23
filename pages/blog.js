import React from 'react'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'

const BlogPage = ({ posts }) => {
  return (
    <div className='mt-32'>
      <div className='container mx-auto px-10 mb-8'>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-color text-center">
          Blog Yazılarımız
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
          </div>
          <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts
    }
  }
}