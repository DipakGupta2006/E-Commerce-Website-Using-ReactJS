import React from 'react'
import '../styles/Products.css'


const Products = (props) => {
    return (
        <div className="Prodduct1">
            <img src={props.src} alt="" />
            <div className="one">
                <p id='off'>
                    {props.off}
                </p>
                <p id='time'>
                    {props.time}
                </p>
            </div>

            <div className="two">
                <p id="price">
                    {props.price}
                </p>
                
                <p id="mrp">
                    M.R.P: &nbsp;
                    <span id='mrpmrp'>
                        {props.mrp}
                    </span>
                </p>
            </div>

            <div className="three">
                <p id='desc'>

                {props.desc}
                </p>
            </div>


        </div>

    )
}

export default Products
