import React from 'react'
import './Header.css'

export const Header = ({ heading, details }) => {
  return (
    <div className='header-container'>
       <h1>{heading}</h1>
       <p>{details}</p>
    </div>
  )
}
