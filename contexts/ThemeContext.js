"use client"

import { useState } from "react"

const { createContext } = require("react")

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [mode, setmode] = useState("dark");

  const toggle = () => {
    console.log("object")
    setmode(prev => (prev === "dark" ? "light" : "dark"))
  }

  return(
    <ThemeContext.Provider value={{mode, toggle}}>
      <div className={`theme ${mode}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}