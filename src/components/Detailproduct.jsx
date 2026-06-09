import React from 'react'
import '../styles/Detailproduct.css'
// import Detailproduct from './Detailproduct'
// import '../styles/Dashboard.css'

const Detailproduct = (props) => {
    return (
        

        <>
            <div className="BadaDaba">

                <div id='detailBoxImg image-container'>
                    <img
                        src={props.productImg}
                        alt=""
                        style={{
                            width: props.imgWidth,
                            height: props.imgHeight,
                            borderRadius: props.imgBorder
                        }}
                    />
                </div>

                <div className="detailBox">

                    <div className="LeftBoxDetail">
                        <div className="name">
                            {props.productName}
                        </div>

                        <div className="rating">
                            <p className='ratenum'>{props.productRate}</p>
                            <p className='star'>
                                {props.productStar}
                            </p>
                        </div>

                        <div className="brought">
                            {props.productBrought}
                        </div>
                        <div className="line"></div>

                        <div className="off">
                            {props.productOff}
                        </div>



                        <div className="mrp">
                            <div className="price">
                                {props.productPrice}
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;M.R.P: &nbsp;
                            <span className='mrpmrp'>
                                {props.productMrp}
                            </span>
                        </div>

                        <div className="taxes">
                            {props.productTax}
                        </div>

                        <div className="emi">
                            {props.productEmi}
                        </div>

                        <div className="offer">
                            {props.productOffer}
                        </div>

                        <div className="leftContainer">
                            {props.productHighlight}

                        </div>

                        <div className="bottomContainer">
                            {props.productInfo}
                        </div>

                    </div>


                    <div className="RightBoxDetail">
                        {props.productSmallImg}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Detailproduct
