"use client"

import { useState } from "react"

const { createContext } = require("react")

export const ViewsCountContext = createContext()

export const ViewsCountProvider = ({children}) => {
  const [views, setviews] = useState("1");

  
  return(
    <ViewsCountContext.Provider value={{views, setviews}}>
      {children}
    </ViewsCountContext.Provider>
  )
}