import React from 'react'
import '../styles/Trendproducts.css'

const Trendproducts = (props) => {
    return (
        <div className='TrendingProducts'>
            <img
                src={props.prodImg}
                alt=""
                style={{
                    width: props.prodWidth,
                    height: props.prodHeight,
                    borderRadius: props.imgBorder
                }}
            />


            <div className="TrendingBox">
                <div className="name trendname">
                    {props.prodName}
                </div>
                <div className="line"></div>


                <div className="off trendoff">
                    {props.prodOff}
                </div>


                <div className="mrp trendmrp">
                    <div className="price">
                        {props.prodPrice}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;M.R.P: &nbsp;
                    <span className='mrpmrp'>
                        {props.prodMrp}
                    </span>
                </div>

                <div className="about-item trendinfo">
                    {props.prodInfo}
                </div>

                <div className="line"></div>

                <button id="addToCartBtn">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                <button id="buyNowBtn">Buy Now <i className="fa-solid fa-bag-shopping"></i></button>

                <div id="productBenefits">

                    <div className="benefitItem">
                        <i className="fa-solid fa-tags"></i>
                        <span>Clearance Sale</span>
                    </div>

                    <div className="benefitItem">
                        <i className="fa-solid fa-truck"></i>
                        <span>Free Delivery</span>
                    </div>

                    <div className="benefitItem">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Cartify Delivered</span>
                    </div>
                    <div className="benefitItem">
                        <i className="fa-solid fa-bolt"></i>
                        <span>Fast Delivery</span>
                    </div>

                    <div className="benefitItem">
                        <i className="fa-solid fa-shield-halved"></i>
                        <span>Secure Transaction</span>
                    </div>

                    <div className="benefitItem">
                        <i className="fa-solid fa-award"></i>
                        <span>Top Brand</span>
                    </div>

                </div>

                <div id="sellerInfo">

                    <div className="sellerRow">
                        <span className="sellerLabel">Ships from</span>
                        <span className="sellerValue">Cartify</span>
                    </div>

                    <div className="sellerRow">
                        <span className="sellerLabel">Sold by</span>
                        <span className="sellerValue">Cartify Retail</span>
                    </div>

                    <div className="sellerRow">
                        <span className="sellerLabel">Payment</span>
                        <span className="sellerValue">Secure Transaction</span>
                    </div>

                    <div className="sellerRow">
                        <span className="sellerLabel">Gift options</span>
                        <span className="sellerValue">Available at checkout</span>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default Trendproducts
