"use client";

import Link from "next/link";
import React from "react";

const PostButton = ({title}) => {
  return (
    <div
      onClick={() => {
        
      }}
    >
      <Link
        href={`/blog/${title}`}
        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

export default PostButton;
