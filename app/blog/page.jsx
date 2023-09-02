import Posts from '@/Components/Posts'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Posts />
        </div>
      </div>
    </section>
  )
}

export default page
