import React from 'react'
import '../styles/Card.css'

const Brands = (props) => {
  return (
    <div className='boxBrands'>
      <div className='imageCardBrands'>
        <img src={props.src} alt={props.desc} className='CardImageBrands' />
      </div>
      {/* <p className='cardText'>{props.desc}</p> */}
    </div>
  )
}

export default Brands
