"use client"

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash,faAddressCard, faPhone,faUser, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import ModeSwitcher from './ModeSwitcher';

const Nav = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the width threshold as needed
      if (window.innerWidth <= 1024) {
        setShowName(false); // Mobile
      } else {
        setShowName(true); // Desktop
      }
    };

    // Initial check
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-col items-center">
        <div className='w-full flex justify-around gap-14 items-center mb-6 bg-slate-400 rounded-xl py-3'>
          <Link href="https://mahmud.tech/" className="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <img className="w-16 h-16 lg:h-16 lg:w-16 text-white p-2 rounded-full" src="https://mahmud.tech/static/media/github.b1df3043f4e05eca68b5.png" alt="" />
            <span className="ml-3 text-xl hidden lg:flex">ProfilePro</span>
          </Link>
          {/* mode swithcer */}
          <ModeSwitcher />
          <SignedOut>
            <Link href="/sign-in">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">Sign In
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
                userProfile: { elements: { userButtonOuterIdentifier: "text-[50px]" } },
            }}  showName={showName ? true : false}  afterSignOutUrl="/"/>
          </SignedIn>
        </div>
        <nav className="w-full md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-around gap-5">
          <Link href="/projects" className="mr-5 transition-all text-slate-100 hover:text-blue-300 flex justify-center items-center gap-2"><FontAwesomeIcon icon={faCheck} className="fas fa-check"></FontAwesomeIcon> <p className='hidden lg:flex bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent'>Projects</p> </Link>
          <Link href="/blog" className="mr-5 transition-all text-slate-100 hover:text-blue-300 flex justify-center items-center gap-2"><FontAwesomeIcon icon={faAddressCard} className="fas fa-check"></FontAwesomeIcon> <p className='hidden lg:flex bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent'>Blog</p> </Link>
          <Link href="/portfolio" className="mr-5 transition-all text-slate-100 hover:text-blue-300 flex justify-center items-center gap-2"><FontAwesomeIcon icon={faUser} className="fas fa-check"></FontAwesomeIcon> <p className='hidden lg:flex bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent'>Portfolio</p> </Link>
          <Link href="/contact" className="mr-5 transition-all text-slate-100 hover:text-blue-300 flex justify-center items-center gap-2"><FontAwesomeIcon icon={faPhone} className="fas fa-check"></FontAwesomeIcon> <p className='hidden lg:flex bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent'>Contact</p> </Link>
          <Link href="/dashboard" className="mr-5 transition-all text-slate-100 hover:text-blue-300 flex justify-center items-center gap-2"><FontAwesomeIcon icon={faSquarePlus} className="fas fa-check"></FontAwesomeIcon> <p className='hidden lg:flex bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent'>Dashboard</p> </Link>
        </nav>
      </div>
    </header>
  )
}

export default Nav
