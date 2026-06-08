import React from 'react'
import '../styles/Detailproduct.css'
// import '../styles/Dashboard.css'
const Detailproduct = () => {
    return (
        <>
        
            <div id='detailBoxImg'>
                <img src="https://m.media-amazon.com/images/I/71vX56T0WPL._SY741_.jpg" alt="" />
            </div>

            <div className="detailBox">
                
                <div className="">
                    <div className="name">
                        JIHU CULTURE Women's Orange Sequence Embroidery Work Silk Semi-Sttiched Lehenga Choli - JH290ORG
                    </div>

                    <div className="rating">
                        <p className='ratenum'>4.8</p>
                        <p className='star'>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </p>
                    </div>

                    <div className="brought">
                        <b>50+ bought </b>in past month
                    </div>
                    <div className="line"></div>

                    <div className="off">
                        23% off
                    </div>



                    <div className="mrp">
                        <div className="price">
                            ₹3999/-
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;M.R.P: &nbsp;
                        <span className='mrpmrp'>
                            ₹5999/-
                        </span>
                    </div>

                    <div className="taxes">
                        Inclusive of all taxes
                    </div>

                    <div className="emi">
                        <b>EMI </b>starts at ₹79. No Cost EMI available <span>EMI options</span><i class="fa-solid fa-angle-down"></i>
                    </div>

                    <div className="offer">
                        <i class="fa-solid fa-tags"></i>&nbsp;Offers
                    </div>


                    <div className="leftContainer">
                        <table>
                            <tr>
                                <td><strong className='highlights'>Top Highlights</strong></td>
                            </tr>

                            <tr>
                                <td><strong>Care Instructions</strong></td>
                                <td>Dry Clean Only</td>
                            </tr>

                            <tr>
                                <td><strong>Style</strong></td>
                                <td>Lehenga Choli Set</td>
                            </tr>

                            <tr>
                                <td><strong>Neck Style</strong></td>
                                <td>Round Neck</td>
                            </tr>

                            <tr>
                                <td><strong>Occasion Type</strong></td>
                                <td>Formal, Special Occasions</td>
                            </tr>

                            <tr>
                                <td><strong>Sleeve Type</strong></td>
                                <td>Short Sleeve</td>
                            </tr>

                            <tr>
                                <td><strong>Country of Origin</strong></td>
                                <td>India</td>
                            </tr>
                        </table>
                    </div>

                    <div className="bottomContainer">
                        <div class="about-item">
                            <h3>About this item</h3>

                            <ul>
                                <li>
                                    Lehenga Fabric: Silk | Lehenga Inner: Silk | Lehenga Work:
                                    Sequence Embroidery Work | Lehenga Stitching Type:
                                    Semi-Stitch Up To 44 with Canvas Pata
                                </li>

                                <li>
                                    Choli Fabric: Silk | Choli Work:
                                    Sequence Embroidery Work | Choli Size:
                                    Unstitched Up To 44
                                </li>

                                <li>
                                    DupataFabric : Net | DupataWork : Sequnce Embroidery Work With Lace Border
                                </li>
                                <li>
                                    Care Instructions: Dry Clean Only

                                </li>
                            </ul>
                        </div>
                    </div>

                </div>





                <div className="RightBoxDetail">
                    <img src="https://m.media-amazon.com/images/I/71Ys0Rffr0L._SY741_.jpg" alt="" />
                    <img src="https://m.media-amazon.com/images/I/71o5WIJzfcL._SY741_.jpg" alt="" />
                    <img src="https://m.media-amazon.com/images/I/71gSGjFYmdL._SY741_.jpg" alt="" />
                    <img src="https://m.media-amazon.com/images/I/71kQJQb8M6L._SY741_.jpg" alt="" />

                </div>
            </div>

        </>
    )
}

export default Detailproduct
