import React from 'react'
import '../styles/Fashionimg.css'
import BestsellerImg from '../components/BestsellerImg'



const Fashionimg = () => {
    return (
        <>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/JuneMDD26/Tophero/Unrec/Women_s_clothing_1500x460._SX1500_QL85_FMpng_.png" id='topDealsBanner' alt="" />
            </div>

            <div className="FashionImgContainer">
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/V1/Anni_designer_412x540._CB785692084_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/V1/Janasya_412x540._CB785692084_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/Unrec/Topbrands/Lavie/Lavie._CB786135277_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Lakme_412x540._CB785708723_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Allen_Solly_412x540._CB785708723_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/V1/Voylla_412x540._CB785692084_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Liberty_412x540._CB785708723_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Dove_412x540._CB785708723_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/V1/Van_Heusen_412x540._CB785692084_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Aristocrat_412x540._CB785708723_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Swadesi_Stuff_412x540._CB785708723_.png" alt="" />
                <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/MarchSSFlipBAU/TopBrands/Unrec/Symbol_412x540._CB785708723_.png" alt="" />
            </div>

            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/918PGXAq2uL._SY741_.jpg"
                imgWidth="500px"
                imgHeight="750px"
                imgBorder="1px"
                productName="TRENDMALLS Women's Georgette Embroidery work Lehenga Choli with Dupatta | Bridesmaid Wedding Lehenga Choli for women"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>

                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/91komUxfxxL._SY741_.jpg"
                            style={{ height: "750px", width: "400px" }}
                            alt=""
                        />                        

                    </>
                }
            />

            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/71Jc6nT-PwL._SY741_.jpg"
                imgWidth="500px"
                imgHeight="710px"
                imgBorder="1px"
                productName="SASSAFRAS Women’s Slim Fit Full Sleeves Rib Square Neck Ribbed Basics – Casual Ribbed T-Shirt Tops"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>

                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/81s9YAT2oRL._SY879_.jpg"
                            style={{ height: "710px", width: "400px" }}
                            alt=""
                        />

                    </>
                }
            />


            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/61L24awnI5L._SY741_.jpg"
                imgWidth="520px"
                imgHeight="750px"
                imgBorder="1px"
                productName="Leriya Fashion Women’s V-Neck Floral Print Ruffle Long Sleeve A-Line Mini Dress | Elegant Casual Party Outfit | Lightweight Layered Summer Wear"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>

                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/61JL7s2IvHL._SX679_.jpg"
                            style={{ height: "750px", width: "400px" }}
                            alt=""
                        />

                    </>
                }
            />



            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/510cPIAGnJL._SY741_.jpg"
                imgWidth="500px"
                imgHeight="770px"
                imgBorder="1px"
                productName="Leriya Fashion One Shoulder Bodycon Dress For Women | Knee Length Party Dress For Womens Western|One Piece Dresses For Womans | Stylish Dress For Woman|Summer Casual Outfit Wear Events, Date & Evening Look"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>

                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/71mRIxbtcCL._SY741_.jpg"
                            style={{ height: "770px", width: "400px" }}
                            alt=""
                        />

                    </>
                }
            />



            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/61xzI8wvmTL._SY741_.jpg"
                imgWidth="500px"
                imgHeight="670px"
                imgBorder="1px"
                productName="Allen Solly Men's Cotton Graphic Fitted T-Shirt"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>

                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/61T0ytGWcLL._SY741_.jpg"
                            style={{ height: "670px", width: "400px" }}
                            alt=""
                        />                        

                    </>
                }
            />



            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/71eUwDk8z+L._SX569_.jpg"
                imgWidth="500px"
                imgHeight="700px"
                imgBorder="1px"
                productName="Allen Solly Men’s Polo T‑Shirt | Comfortable Rich Cotton Blend, Band Collar, Regular Fit | Stylish & Premium All Day Wear"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>

                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/71J8pbcn8WL._SX569_.jpg"
                            style={{ height: "700px", width: "400px" }}
                            alt=""
                        />                      

                    </>
                }
            />



            <BestsellerImg
                productImg="https://m.media-amazon.com/images/I/71bGaOWXSVL._SY741_.jpg"
                imgWidth="500px"
                imgHeight="750px"
                imgBorder="1px"
                productName="MARUTI FASHION HOUSE Lehenga Choli Draped Lehenga Saree Set For Womens And Girls Ready To Wear Hevay Chinon Fabric With Work Multi Thread Embroidery Work Wedding Letest new"
                productRate="4.3"
                productStar="&#9733;&#9733;&#9733;&#9733;&#9733;"
                productBrought={
                    <>
                        <b>30+ bought</b> in past month
                    </>
                }
                productOff="22% off"
                productPrice="₹1999/-"
                productMrp="₹2999/-"
                productTax="Inclusive of all taxes"
                productEmi={
                    <>
                        <b>EMI </b>starts at ₹129. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </>
                }
                productOffer={
                    <>
                        <i class="fa-solid fa-tags"></i>&nbsp;Offer
                    </>
                }

                productHighlight={
                    <>
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Material composition</strong></td>
                                <td>Georgette; Inner: Crepe</td>
                            </tr>

                            <tr>
                                <td><strong>Weave type</strong></td>
                                <td>Woven</td>
                            </tr>

                            <tr>
                                <td><strong>Finish type</strong></td>
                                <td>Semi-stitched</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli with Dupatta</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                        <div className="line"></div>
                    </>
                }

                productInfo={
                    <>
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
                    </>
                }

                productSmallImg={
                    <>
                        <img
                            src="https://m.media-amazon.com/images/I/71VdhswoufL._SY741_.jpg"
                            style={{ height: "750px", width: "450px" }}
                            alt=""
                        />                        {/* <img src="https://m.media-amazon.com/images/I/71oLPwCh06L._SY741_.jpg" alt="" />
                        <img src="https://m.media-amazon.com/images/I/81zEh90PhGL._SY741_.jpg" alt="" />
                        <img src="https://m.media-amazon.com/images/I/71MlxKjAkSL._SY741_.jpg" alt="" /> */}

                    </>
                }
            />


        </>
    )
}

export default Fashionimg
