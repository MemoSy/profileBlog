import CreatePost from '@/Components/CreatePost'
import OwnPosts from '@/Components/OwnPosts'
import React from 'react'

const page = () => {
  return (
    
    <div className='h-[84.5vh]'>
      {/* post Section */}


      {/* createPOst Sectrion */}
      <CreatePost />

      {/* Own Posts Sectrion */}
        <OwnPosts />
    </div>
  )
}

export default page
