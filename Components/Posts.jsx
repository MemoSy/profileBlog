import Link from 'next/link'
import React from 'react'
import PostButton from './PostButton'
import Views from './Views'


async function getData() {
  const res = await fetch('https://profile-blog-ochre.vercel.app/api/post',{
    cache: 'no-store'
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Posts = async () => {
  const data = await getData()


  return (
    <>
      {data?.map((product)=> (
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={product.image} alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-white mb-3">{product.title}</h1>
                    <p className="leading-relaxed mb-3">{product.desc}</p>
                    <div className="flex items-center flex-wrap ">
                      <PostButton title={product.title}/>
                      <Views product={product}/>
                      <span className="text-gray-400 inline-flex gap-[12px] items-center leading-none text-sm">
                        <p>{product.auth} </p>
                        <img src={product.authImage} className='rounded-full h-[38px] w-[38px] ' alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          ))}
    </>
  )
}

export default Posts
