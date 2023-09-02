"use client"
import React from 'react'
import './CreateForm.css'
import Button from './Button'
import { useState } from 'react'
import { useClerk } from '@clerk/clerk-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CreatePost = () => {
  const { user } = useClerk();
  // for toggle
  const [hiddenOrVisible, sethiddenOrVisible] = useState("hidden");
  // for inputs
  const [title, settitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [auth, setAuth] = useState("");
  const [image, setImage] = useState("");
  const [authImage, setAuthImage] = useState("");
  const [uploadData, setUploadData] = useState();

  // toggle Function
  const togglePopup = () => {
    sethiddenOrVisible(prev => (prev == "hidden" ? "" : "hidden"))
    console.log(user.fullName)
  }

  const addPost = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    for ( const file of document.getElementById("picture").files) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-uploads');

    const data = await fetch('https://api.cloudinary.com/v1_1/de4xbguwz/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setImage(data.secure_url);
    setUploadData(data);


    try {
      await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          title,
          category,
          desc,
          body,
          auth: user.fullName == null ? user.emailAddresses[0].emailAddress.split("@")[0] : user.fullName,
          image: data.secure_url,
          authImage:user.imageUrl,
          clicked: "0"
        }),
      });
      // e.target.reset()
    } catch (err) {
      console.log(err);
    }
    sethiddenOrVisible(prev => (prev == "hidden" ? "" : "hidden"))
  }

  return (
    <>
      <div className='px-5 mt-3 w-full flex justify-center items-center'>
        <Button toggleIt={togglePopup}><FontAwesomeIcon icon={faPlus} className="fa-solid fa-plus text-[32px]"></FontAwesomeIcon></Button>
      </div>
      <form>
        <div className={`${hiddenOrVisible} min-h-screen md:px-20 pt-6`}>
          <div className="bg-[#94A3B8] rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">ADD POST</h1>
            <div className="space-y-4">
              <div>
                <label for="title" className="text-lx font-serif">Title:</label>
                <input value={title} onChange={(e) => settitle(e.target.value)} type="text" placeholder="title" id="title" className="ml-2 outline-none py-1 px-2 text-gray-600 text-md border-2 rounded-md" />
              </div>
              <div>
                <label for="description" className="block mb-2 text-lg font-serif">Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} id="description" cols="30" rows="10" placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"></textarea>
              </div>
              <div>
                <label for="name" className="text-lx font-serif">Desc:</label>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder="name" id="name" className="ml-2 text-gray-600 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <div className="grid w-full max-w-xs items-center gap-1.5">
                <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Picture</label>
                <input id="picture" name='file' type="file" className="flex h-10 w-full rounded-md border-2  border-input border-red-200 bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium" />
              </div>
              <div>
                <label for="text" className="text-lx font-serif">Category:</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="name" id="forText" className="ml-2 text-gray-600 outline-none py-1 px-2 text-md border-2 rounded-md" />
              </div>
              <button onClick={addPost} className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default CreatePost
