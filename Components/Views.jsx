"use client";


import { ViewsCountContext } from "@/contexts/ViewsCount";
import React, { useContext, useEffect, useState } from "react";


const Views = ({product}) => {
  const {views} = useContext(ViewsCountContext)
  const [finalValue, setfinalValue] = useState(views);

  useEffect(() => {
    fetch(`/api/post`)
      .then((res) => res.json())
      .then((data) => {
        const weWontItem =  data.filter((item) => item.title == product.title);
        console.log(weWontItem)
        
        setfinalValue(weWontItem[0].clicked)
        // setviews(data)
      })
  }, [views])

  return (
    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
      <svg
        className="w-4 h-4 mr-1"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      {finalValue}
    </span>
  );
};

export default Views;
