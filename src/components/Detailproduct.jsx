import React from 'react'
import '../styles/Detailproduct.css'
const Detailproduct = () => {
    return (
        <>
            <div id='detailBoxImg'>
                <img src="https://m.media-amazon.com/images/I/71vX56T0WPL._SY741_.jpg" alt="" />
            </div>

            <div className="detailBox">
                <div className="LeftBoxDetail">
                    <div className="name">
                        JIHU CULTURE Women's Orange Sequence Embroidery Work Silk Semi-Sttiched Lehenga Choli
                    </div>

                    <div className="rating">
                        <p>4.8</p>
                        <p className='star'>
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </p>
                    </div>

                    <div className="brought">
                        50+ bought in past month
                    </div>

                    <div className="off">

                    </div>

                </div>

                <div className="RightBoxDetail">

                </div>
            </div>

        </>
    )
}

export default Detailproduct
