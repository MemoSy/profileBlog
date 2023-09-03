"use client"

import React, { useContext, useEffect, useState } from 'react'

const page = (props) => {
  const [data, setData] = useState([])

  useEffect(async () => {
    try {
      await fetch(`/api/post/${props.params.id}`, {
        method: "POST",
        body: JSON.stringify({
          clicked: "50"
        }),
      });

    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetch(`https://profile-blog-ochre.vercel.app/api/post/${props.params.id}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data[0])
    })
  }, []);
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h1 className='w-full text-center text-[28px] mb-8'>{data.title}</h1>
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={data.image} />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 pt-[28px]">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img className='rounded-full w-[84px] h-[84px]' src={data.authImage} alt="" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-500 text-lg">{data.auth}</h2>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">{data.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
