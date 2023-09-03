"use client"

import { useClerk } from "@clerk/nextjs"
import { useEffect, useState } from "react";
import PostButton from "./PostButton";
import Views from "./Views";


const OwnPosts = () => {
  const [data, setdata] = useState([]);
  const { user } = useClerk();

  useEffect(() => {
    fetch(`/api/post`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
      })
  }, [])

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {data?.map((post) => post.auth == user?.fullName ?(
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.image} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">sad</h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">{post.title}</h1>
                  <p className="leading-relaxed mb-3">sada</p>
                  <div className="flex items-center flex-wrap ">
                    <PostButton title={post.title}/>
                    <Views product={post}/>
                    <span className="text-gray-400 inline-flex gap-[12px] items-center leading-none text-sm">
                      <p>{post.auth} </p>
                      <img src={post.authImage} className='rounded-full h-[38px] w-[38px] ' alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : "")}
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default OwnPosts
