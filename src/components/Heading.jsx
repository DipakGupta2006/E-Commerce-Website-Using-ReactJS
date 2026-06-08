import React from 'react'
import '../styles/Heading.css'

const Heading = ({ heading, desc }) => {
  return (
    <div className='heading-container'>
      <h1 className='head'>{heading}</h1>
      <p className='subHead'>{desc}</p>
    </div>
  )
}

export default Heading
