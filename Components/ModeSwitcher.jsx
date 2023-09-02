"use client"
import { useContext } from 'react'
import './Nav.css'

import React from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'

const ModeSwitcher = () => {
  const {toggle} = useContext(ThemeContext)
  
  return (
    <>
      <label className="switch" onClick={toggle}>
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </>
  )
}

export default ModeSwitcher
