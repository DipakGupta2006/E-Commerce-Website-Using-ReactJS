import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div className='box'>
      <div className='imageCard'>
        <img src={props.src} alt={props.desc} className='CardImage' />
      </div>
      <p className='cardText'>{props.desc}</p>
    </div>
  )
}

export default Card
